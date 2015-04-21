var runTrack = function() {

  var intervalNumber = 1;
  var pub  = new Object();
  var trackID = $(".trackTitle").attr("trackid");
  var trackUrl = "/tracks/intervals/" + trackID;
  $.ajax({
    type:"GET",
    url: trackUrl,
    success: function(data) {
      pub.intervalData = JSON.parse(data);
    },
    error: function() {console.log("It's dead, Jim");},
  });



  pub.nextInterval = function() {
    if (intervalNumber >= pub.intervalData.intervals.length )
    {
      return false;
    }
    intervalNumber += 1;
    $('#currentIntervalNum').text(intervalNumber);
    //console.log(pub.intervalData.intervals);
    return true;
  }

  pub.returnIntervalData = function() {
    console.log(pub.intervalData.intervals);
    return pub.intervalData;
  }

  return pub;
};

$(document).ready(function(){
  var run = runTrack();

  var really = run.returnIntervalData();

  var timing = setInterval(function () {
    var stop = run.nextInterval();
    var progWidth  =  $('.progress').filter('.totalCompletion').find('.progress-bar').css("width");
    var progContainerWidth  =  $('.progress').filter('.totalCompletion').css("width");
    var newWidth = (.0588 * parseInt(progContainerWidth)) + parseInt(progWidth);
    $('.progress').filter('.totalCompletion').find('.progress-bar').width(newWidth);
    //console.log(stop);
    if (!stop) {
    clearInterval(timing);
    }
  },1000);




});
