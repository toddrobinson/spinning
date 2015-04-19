
$(document).ready(function(){
  $("thead").on("click", function(){
    $("table").find("tbody").fadeToggle();
  });
  var trackID = $(".trackTitle").attr("trackid");
  var trackUrl = "/tracks/intervals/" + trackID;
  var coord = [];
  $.ajax({
    type:"GET",
    url: trackUrl,
    success: function(data) {
      coord = createChart(data);
      createTable(data);
      drawGraph();
    },
    error: function() {console.log("It's dead, Jim");},
  });

  function createChart(data) {

      data = JSON.parse(data);

      //Two data points for every interval. The starting one, and the ending one.
      var dataArr = []
      var time = 0;
      for (var i = 0 ; i < data.intervals.length ; i++) {
        var intensity = parseInt(data.intervals[i].intervalIntensity);
        var length = parseInt(data.intervals[i].intervalLength);
        var intervalStart = [time, intensity];
        var intervalEnd = [time + length, intensity];
        time = time + length;
        dataArr.push(intervalStart, intervalEnd);
      }

      return dataArr;
  }

  function createTable(data) {
    data = JSON.parse(data);
    for (var i = 0 ; i < data.intervals.length ; i++) {
      var intervalNumber = "<td>" + parseInt(data.intervals[i].id + 1) + "</td>";
      var intensity = "<td>" + parseInt(data.intervals[i].intervalIntensity) + "</td>";
      var length = "<td>" + parseInt(data.intervals[i].intervalLength) + "</td>";
      var row = $("<tr>" + intervalNumber + length + intensity + "</tr>");
      $("table.table").find("tbody").append(row);
    }
  }

  function drawGraph() {

    google.load('visualization', '1.1', {packages: ['line'], 'callback' : drawLineColors});
    //google.setOnLoadCallback(drawLineColors);

    function drawLineColors() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Track');

      var rows = coord;

      data.addRows(rows);

      var options = {
        hAxis: {
          title: 'Time (minutes)'
        },
        vAxis: {
          minValue: 1,
          maxValue: 10,
          title: 'Intensity'
        },
        colors: ['#a52714', '#097138'],

      };
      var chart = new google.charts.Line(document.getElementById('chart_div'));
      //var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      //chart.draw(data, options);
      chart.draw(data, google.charts.Line.convertOptions(options));
    }




  }




});
