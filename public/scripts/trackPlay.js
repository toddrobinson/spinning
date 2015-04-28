/*
runTrack
Sets up the methods associated with running the track


Returns pub, which has the public methods and variables.
*/

var runTrack = function() {
  var pub  = {};
  var currentIntervalNumber = 1;
  var minutesLeftInCurrentInterval = 0;
  var secondsLeftInCurrentInterval = 0;
  var passThroughs = 0;

  //Get the data for the track that is on the page.
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

  //Advances to the next interval if it is time.
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

  //Total time from the intervals
  pub.intervals = function() {
      var minutes = 0;
      for (var prop in pub.intervalData.intervals)
      {
        intervalLength = parseInt(pub.intervalData.intervals[prop].intervalLength);
        minutes += intervalLength;
      }
      pub.totalLength = minutes;

  };
  //Moves overall progress bar based on completed time
  pub.advanceProgress = function(percent, minutes, seconds) {
    totalSeconds = (minutes * 60 ) + seconds;
    newWidth = (totalSeconds / (pub.totalLength * 60)) * 100;
    $('.progress').filter('.totalCompletion').find('.progress-bar').width(newWidth + "%").text(Math.ceil(newWidth) + "%");
    if (seconds < 10) {seconds = "0" + seconds}
    $('#totalTimeLeft').text(minutes + ":" + seconds + " OF ");
  }

  //Sets the level progress bar, and its color based on level.
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
  //At the completion of the track
  function trackComplete() {
    $('#timeInCurrentInterval').text("Done!");
    $("#intensityBar").find(".progress-bar").width(0);
    $('#LEVEL').text("");

  }
  return pub;
};
//Runs when doc is laoded
$(document).ready(function(){
  var run = runTrack();
  run.getData();

  setTimeout(run.intervals, 300);
  var seconds = 0;
  var minutes = 0;
  //Start the running of the track when the user clicks start.
  //Function runs every second.
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
    var stop = run.nextInterval(minutes);
    //Precentage a second is of the total time.
    perc = 1 / (run.totalLength * 60);
    run.advanceProgress(perc, minutes, seconds)



    if (!stop) {
    clearInterval(timing);
    }
  },1000);
});



});
