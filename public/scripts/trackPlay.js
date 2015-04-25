var runTrack = function() {
  var pub  = {};
  var currentIntervalNumber = 1;
  var minutesLeftInCurrentInterval = 0;
  var secondsLeftInCurrentInterval = 0;
  var passThroughs = 0;

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


  pub.nextInterval = function(totalMinutesPassed) {
    if (currentIntervalNumber >= pub.intervalData.intervals.length && totalMinutesPassed == pub.totalLength)
    {
      trackComplete();
      return false;
    }

    var minInInterval = pub.intervalData.intervals[currentIntervalNumber - 1].intervalLength;
    if (passThroughs == 0) {
      minutesLeftInCurrentInterval = minInInterval;
      setLevel();
    }
    if (secondsLeftInCurrentInterval == 0) {
      secondsLeftInCurrentInterval = 59;
      minutesLeftInCurrentInterval--;
    }
    else {
        secondsLeftInCurrentInterval--;
    }
    passThroughs++;
    var displaySec = secondsLeftInCurrentInterval;
    if (displaySec < 10 ) {displaySec = "0" + displaySec};
    $('#timeInCurrentInterval').text(minutesLeftInCurrentInterval + ":" + displaySec);
    if (minutesLeftInCurrentInterval == 0 && secondsLeftInCurrentInterval == 0)
    {
      passThroughs = 0;
      currentIntervalNumber += 1;
      setLevel();
    }


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
  pub.advanceProgress = function(percent, minutes, seconds) {
    totalSeconds = (minutes * 60 ) + seconds;
    newWidth = (totalSeconds / (pub.totalLength * 60)) * 100;
    $('.progress').filter('.totalCompletion').find('.progress-bar').width(newWidth + "%").text(Math.ceil(newWidth) + "%");
    if (seconds < 10) {seconds = "0" + seconds}
    $('#totalTimeLeft').text(minutes + ":" + seconds + " OF ");
  }


  function setLevel(level) {
    $('#currentIntervalNum').text(currentIntervalNumber);
    var newIntensity = pub.intervalData.intervals[currentIntervalNumber - 1].intervalIntensity;
    $('#LEVEL').text(" LEVEL " + newIntensity);
    var newLevelWidth = (newIntensity) * 10;
    $("#intensityBar").find(".progress-bar").width( newLevelWidth + "%");
    if (newIntensity == 1 && newIntensity <= 4){
      $("#intensityBar").find(".progress-bar").css("background-color" , "green" );
    }

    else if (newIntensity < 7) {
      $("#intensityBar").find(".progress-bar").css("background-color" , "orange" );
    }

    else {
      $("#intensityBar").find(".progress-bar").css("background-color" , "red" );
    }
  }
  function trackComplete() {
    $('#timeInCurrentInterval').text("Done!");
    $("#intensityBar").find(".progress-bar").width(0);
    $('#LEVEL').text("");

  }
  return pub;
};

$(document).ready(function(){
  var run = runTrack();
  run.getData();

  setTimeout(run.intervals, 300);
  var seconds = 0;
  var minutes = 0;
  $("#startButton").one("click" , function() {
  $(this).slideUp();
  var timing = setInterval(function () {

    if  (seconds == 59) {
      minutes++;
      seconds = 0;
    }

    else {
      seconds++;
    }
    displaySeconds = seconds;
    if (displaySeconds < 10) {displaySeconds = "0" + displaySeconds}
    //console.log(minutes + ":" + displaySeconds);
    var stop = run.nextInterval(minutes);
    //var numIntervals = run.intervalData.intervals.length;
    //var intervalPercentage = (100/numIntervals) / 100;
    //run.advanceProgress(intervalPercentage);

    //Precentage a second is of the total time.
    perc = 1 / (run.totalLength * 60);
    run.advanceProgress(perc, minutes, seconds)



    if (!stop) {
    clearInterval(timing);
    }
  },1000);
});



});
