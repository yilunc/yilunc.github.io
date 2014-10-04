var page = 2;
$(function() {      
  $("#media-main").swipe( {
    swipeUp:function(event, direction, distance, duration, fingerCount) {
      newCardUp(0);
    },
    swipeDown:function(event, direction, distance, duration, fingerCount) {
      newCardDown(0);  
    },
    threshold:0
  });
  $("#media-alt").swipe( {
    swipeUp:function(event, direction, distance, duration, fingerCount) {
      newCardUp(1); 
    },
    swipeDown:function(event, direction, distance, duration, fingerCount) {
      newCardDown(1);  
    },
    threshold:0
  });
  $("#loading").delay(2500).animate({opacity:("0")}, 1000).animate({right:("100%")}, 1000);
});
function doSomething(index) {
  if (index == page)
    return;
  for (var i = 1; i <= 3; i++)
    $("#content"+i).stop(true,true);
  $("#content"+index).css("display","initial");
  var temp = page; // page is changed before the animation finishes
  var speed = 300; // speed of animation in ms
  var delta = index<page?100:-100; // scroll left or right
  $("#content"+index).css("left",(-delta)+"%");
  $("#content"+page).animate({left:("+=" + delta + "%")}, speed, function() { $("#content"+temp).css("display","none") } );
  $("#content"+index).animate({left:("+=" + delta + "%")}, speed );
  page = index;
  if (page == 1) {
    $("#nav1").addClass("menu-alt");
    $("#nav1").removeClass("menu");
    $("#nav2").addClass("updog");
    $("#nav2").removeClass("updog-alt");
    $("#nav3").addClass("pen");
    $("#nav3").removeClass("pen-alt");
  } else if (page == 2) {
    $("#nav1").addClass("menu");
    $("#nav1").removeClass("menu-alt");
    $("#nav2").addClass("updog-alt");
    $("#nav2").removeClass("updog");
    $("#nav3").addClass("pen");
    $("#nav3").removeClass("pen-alt");
  } else {
    $("#nav1").addClass("menu");
    $("#nav1").removeClass("menu-alt");
    $("#nav2").addClass("updog");
    $("#nav2").removeClass("updog-alt");
    $("#nav3").addClass("pen-alt");
    $("#nav3").removeClass("pen");
  }
}
function newCardUp(alt) {
  if (alt == 0) {
    $("#card-alt").css("top", "100%");
    $("#card-main").animate({top:("-100%")}, 300);
    $("#card-alt").animate({top:("0")}, 300);
  } else {
    $("#card-main").css("top", "100%");
    $("#card-alt").animate({top:("-100%")}, 300);
    $("#card-main").animate({top:("0")}, 300);
  }
}
function newCardDown(alt) {
  if (alt == 0) {
    $("#card-alt").css("top", "-100%");
    $("#card-main").animate({top:("100%")}, 300);
    $("#card-alt").animate({top:("0")}, 300);
  } else {
    $("#card-main").css("top", "-100%");
    $("#card-alt").animate({top:("100%")}, 300);
    $("#card-main").animate({top:("0")}, 300);
  }
}
function submit() {
  $("#submit-bg").css("display", "initial");
  $("#submit-bg").animate({opacity:("1")}, 500);
}
function cancel() {
  $("#submit-bg").animate({opacity:("0")}, 500);
  setTimeout(function(){$("#submit-bg").css("display", "none");}, 500);
}
function swapZiggeo() {
  $("#camera-feed").css("display", "none");
  $("#ziggeo-feed").css("display", "block");
  $("#camera").css("display", "none");
  $("#play").css("display", "block");
  $("#upload").css("background", "url(upload.svg)");
  $("#upload").css("background-size", "cover");
  $("#video").css("background", "url(video-alt.svg)");
  $("#video").css("background-size", "cover");
}
function swapCamera() {
  $("#camera-feed").css("display", "block");
  $("#ziggeo-feed").css("display", "none");
  $("#camera").css("display", "block");
  $("#play").css("display", "none");
  $("#ziggeo-feed").css("display", "block");
  $("#upload").css("background", "url(upload-alt.svg)");
  $("#upload").css("background-size", "cover");
  $("#video").css("background", "url(video.svg)");
  $("#video").css("background-size", "cover");
}
function play() {
  $("#play").css("display", "none");
  $("#stop").css("display", "block");
}
function stop() {
  submit();
  $("#play").css("display", "block");
  $("#stop").css("display", "none");
}