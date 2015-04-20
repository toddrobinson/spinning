console.log("Track Creation");

$(document).ready(function(){

$("form").on("click" , "#addInterval", function(){
  addInterval();
});

$("form").on("click", "#removeInterval", function(){
  removeInterval(this);
});

$("form").on("change", function(){
  timeAndData();
  fillIntervalData();
});

$("div#intervalContainer").find(".intervalItem").first().slideDown();

});


function addInterval() {
  var numIntervals = parseInt($("input#numberOfIntervals").val());
  $("input#numberOfIntervals").val(numIntervals + 1);
  var nextInterval = numIntervals + 1;
  var title = "<p>Interval " + nextInterval  + "</p>";
  var length = '<label>Length(minutes):</label><input required type="number" value="1" min="1" class="intervalLength form-control"></input>';
  var intensity = '<label>Intensity(1-10)</label><input required type="number" min="1" max="10" class="intervalIntensity form-control"></input>';
  var button = '<input class="btn btn-danger" id="removeInterval" type="button" value="Remove" readonly>'
  var intervalItem = $('<div class="intervalItem form-group" id='+ nextInterval + '>' + title  + length + intensity + button + '<hr></div>');
  $("div#intervalContainer").append(intervalItem);
  $("div#intervalContainer").find(".intervalItem").last().slideDown();
}


function removeInterval(button) {
  var ITEM = $(button).closest(".intervalItem")
  ITEM.slideUp(function(){
    $(ITEM).remove();
    var numIntervals = parseInt($("input#numberOfIntervals").val());
    $("input#numberOfIntervals").val(numIntervals - 1);
    reorderIntervals();
    timeAndData();
  });


}

function reorderIntervals() {
  var intervalSections = $("div#intervalContainer").find(".intervalItem");
  console.log("#");
  //console.log(intervalSections);

  //Skipping the first one on purpose
  for(var i = 1 ; i< intervalSections.length ; i++) {
    //console.log(intervalSections[i]);
    $(intervalSections[i]).attr("id", i+1);
    $(intervalSections[i]).find("p").text("Interval " + parseInt(i+1));
  }
}

function timeAndData() {
  var intervalSections = $("div#intervalContainer").find(".intervalItem");
  var totalTime = 0;
  for(var i = 0 ; i< intervalSections.length ; i++) {
    var tempTime = $(intervalSections[i]).find(".intervalLength").val();
    tempTime = parseInt(tempTime);
    totalTime += tempTime;
  }
  if(isNaN(totalTime)){
  $("form").find("input#length").val(0);
  }
  else {
  $("form").find("input#length").val(totalTime);
  }
}

function fillIntervalData() {
  var intervalSections = $("div#intervalContainer").find(".intervalItem");
  var data = new Object();
  var intervals = [];
  for (var i = 0 ; i < intervalSections.length; i++) {
    var id = i;
    var intervalLength = $(intervalSections[i]).find(".intervalLength").val();
    var intervalIntensity = $(intervalSections[i]).find(".intervalIntensity").val();
    var tempInterval = {};
    tempInterval.id = id;
    tempInterval.intervalLength = intervalLength;
    tempInterval.intervalIntensity = intervalIntensity;
    intervals.push(tempInterval);
  }
  data.intervals = intervals;
  $("form").find("#intervalData").val(JSON.stringify(data));
  console.log(data);
}
