$("h1").addClass("h-styling");
$("button").addClass("btn-button");
$("button").click(function(){
  $("#box").animate({
    width: "400px"
  }, {
    duration: 5000,
    easing: "linear",
    step: function(x) {
      $("#demo").text(Math.round(x * 100 / 400)  + "%");  
    }
  });
});