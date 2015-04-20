$(document).ready(function(){
  $("button").on("click", function(){
    drawChart(Math.ceil(Math.random() * 10));
  });







  google.setOnLoadCallback(drawChart);
  function drawChart(val) {

    var data = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['Intensity', 1],
    ]);

    var options = {
      width: 800, height: 400,
        greenFrom: 0, greenTo: 4,

      redFrom: 8, redTo: 10,
      yellowFrom:4, yellowTo: 8,

        max: 10,


    };

    var chart = new google.visualization.Gauge(document.getElementById('chart_div'));
    console.log(val + "  right here");
    if (!isNaN(val)) {
      data.setValue(0 , 1, val);
    }
    chart.draw(data, options);




  }


});
