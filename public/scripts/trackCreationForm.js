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
});

$("div#intervalContainer").find(".intervalItem").first().slideDown();

});


function addInterval() {
  var numIntervals = parseInt($("input#numberOfIntervals").val());
  $("input#numberOfIntervals").val(numIntervals + 1);
  var nextInterval = numIntervals + 1;
  var title = "<p>Interval " + nextInterval  + "</p>";
  var length = 'Length(minutes):<input required type="number" min="1" class="intervalLength"></input>';
  var intensity = 'Intensity(1-10)<input required type="number" min="1" max="10" class="intervalIntensity"></input>';
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
    console.log(intervalSections[i]);
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
