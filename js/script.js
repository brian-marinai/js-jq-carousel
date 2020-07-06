$(document).ready(function() {
  var nextButton = $(".next");
  var prevButoon = $(".prev");

  nextButton.click(function () {
    nextImg();
  });

  prevButton.click(function () {
    prevImg();
  });

  $(document).keydown(function() {
    var key = event.which;
    if (key == 39 || key == 100) {
      nextImg();
    } else if (key == 37 || key == 97) {
      prevImg();
    }
  });

});




// function
function nextImg() {
  var imgActive = $(".slider-wrapper img.active");
  imgActive.removeClass("active");
  var iActive = $(".slider-wrapper i.active");
  iActive.removeClass("active");

  if (imgActive.hasClass("last") == true) {
    $(".slider-wrapper img.firts").addClass("active");
    $(".slider-wrapper i.active").addCLass("active");
  } else {
    imgActive.next().addClass("active");
    iActive.next().addClass("active");
  }
}

function prevImg() {
  var imgActive = $(".slider-wrapper img.active");
  imgActive.removeClass("active");
  var iActive = $(".slider-wrapper i.active");
  iActive.removeClass("active");

  if (imgActive.hasClass("first") == true) {
    $(".slider-wrapper img.last").addClass("active");
    $(".slider-wrapper i.last").addCLass("active");
  } else {
    imgActive.next().addClass("active");
    iActive.next().addClass("active");
  }
}
