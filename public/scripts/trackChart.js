$(document).ready(function(){
  var trackID = $(".trackTitle").attr("trackid");
  console.log(trackID);
  var trackUrl = "/tracks/intervals/" + trackID;
  console.log(trackUrl);
  $.ajax({
    type:"GET",
    url: trackUrl,
    success: function(data) {console.log(data); createChart(data);},
    error: function() {console.log("It's dead, Jim");},
  });

  function createChart(data) {
    var data = JSON.parse(data);
    var labelArr = [];
    for (var i = 0 ;i < data.intervals.length; i++) {
      labelArr.push(data.intervals[i].id + 1);
    }

    var dataPoints = []
    for (var i = 0 ;i < data.intervals.length; i++) {
      for(var j = 0; j < data.intervals[j].intervalLength; j++) {
        dataPoints.push(data.intervals[i].intervalIntensity);
      }
    }
    console.log(dataPoints);
    var mainChartData = {
	     labels : dataPoints,
	      datasets : [
		{
			fillColor : "rgba(140,102,178,.8)",
			strokeColor : "#4db27e",
			pointColor : "#fff",
			pointStrokeColor : "#9DB86D",
			data : dataPoints,
		}
	]
}
    console.log(data.intervals.length);



    var trackChart = document.getElementById('trackChart').getContext('2d');
    new Chart(trackChart).Line(mainChartData,{bezierCurve: false, scaleOverride: true, scaleSteps: 10, scaleStepWidth: 1, scaleStartValue: 0,  responsive: true,});
  }

});
