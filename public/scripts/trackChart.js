
$(document).ready(function(){

  var trackID = $(".trackTitle").attr("trackid");
  console.log(trackID);
  var trackUrl = "/tracks/intervals/" + trackID;
  console.log(trackUrl);
  var coord = [];
  $.ajax({
    type:"GET",
    url: trackUrl,
    success: function(data) {
      coord = createChart(data);
      createTable(data);
      console.log(coord);
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





});
