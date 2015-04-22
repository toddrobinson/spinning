var runTrack = function() {
  var pub  = {};
  var intervalNumber = 1;


  pub.getData = function () {
  var trackID = $(".trackTitle").attr("trackid");
  var trackUrl = "/tracks/intervals/" + trackID;
  $.ajax({
    type:"GET",
    url: trackUrl,
    success: function(data) {
      pub.intervalData = JSON.parse(data);
      //inn = JSON.parse(data);
    },
    error: function() {console.log("It's dead, Jim");},
  });
};


  pub.nextInterval = function() {
    if (intervalNumber >= pub.intervalData.intervals.length )
    {
      return false;
    }
    intervalNumber += 1;
    $('#currentIntervalNum').text(intervalNumber);
    return true;
  };

  pub.intervals = function() {
      var minutes = 0;
      //console.log(inn.intervals);
      for (var prop in pub.intervalData.intervals)
      {
        intervalLength = parseInt(pub.intervalData.intervals[prop].intervalLength);
        minutes += intervalLength;
      }
      pub.totalLength = minutes;

  };
  pub.advanceProgress = function(percent) {
    var progWidth  =  $('.progress').filter('.totalCompletion').find('.progress-bar').css("width");
    var progContainerWidth  =  $('.progress').filter('.totalCompletion').css("width");
    var newWidth = (percent * parseInt(progContainerWidth)) + parseInt(progWidth);
    var percentageOfWhole = Math.ceil((newWidth/parseInt(progContainerWidth)) * 100);
    $('.progress').filter('.totalCompletion').find('.progress-bar').width(newWidth).text(percentageOfWhole + "%");
  }
  return pub;
};

$(document).ready(function(){
  var run = runTrack();
  run.getData();

  setTimeout(run.intervals, 300);

  var timing = setInterval(function () {
    var stop = run.nextInterval();
    var numIntervals = run.intervalData.intervals.length;
    var intervalPercentage = (100/numIntervals) / 100;
    run.advanceProgress(intervalPercentage);


    //console.log(stop);
    if (!stop) {
    clearInterval(timing);
    }
  },1000);




});
