var visibleThumbnail = true;
var visibleDot = true;

$(document).ready(function () {
  var width = 850;
  var currentWidth = 0;
  //DOM
  var $slider = $('#slider');
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');
  var $slidesFirstchild = $slideContainer.find('.slide:first-child').index() + 1;
  var $slidesLastchild = $slideContainer.find('.slide:last-child').index() + 1;
  var $dot = $('.dot');
  var $dots = $dot.find('.dotted');
  var currentSlide = $slidesFirstchild;
  function nextSlide() {
    currentSlide++;
    if (currentSlide > $slidesLastchild) {
      currentSlide = $slidesFirstchild;
      currentWidth = 0;
      $slideContainer.css("transform", "translateX(" + (currentWidth) + "px)");
    } else {
      currentWidth = (currentSlide - 1) * -width;
      $slideContainer.css("transform", "translateX(" + (currentWidth) + "px)");
    }

    if (visibleDot) {
      dotted();
    }
    else {
      $dots.css('display','none');
    }
    if (visibleThumbnail) {
      hoverNextSlide();
    }
  }
  function invisibleDots() {
    if(!visibleDot) {
      $dots.css('display','none');
    }
  }
  invisibleDots();
  function prevSlide() {
    currentSlide--;
    if (currentSlide < $slidesFirstchild) {
      currentSlide = $slidesLastchild;
      currentWidth = (currentSlide - 1) * -width;
      $slideContainer.css("transform", "translateX(" + (currentWidth) + "px)");
    } else {
      currentWidth = width + currentWidth;
      $slideContainer.css("transform", "translateX(" + (currentWidth) + "px)");
    }
    /**
     * Set option variable to show dots and thumbnail.
     * 
     * @param {boolean} visibleDot show if it's true or not.
     * @param {boolean} visibleThumbnail the same above.
     * @returns {null}
     * 
     */
    if (visibleDot) {
      dotted();
    }
    else {

    }
    if (visibleThumbnail) {
      hoverPrevSlide();
    }
  }
  function hoverNextSlide() {
    /**
     * Hover next slide function
     */
    if (visibleThumbnail) {
      var nextSlide = '';
      $('.thumbnail-next').html(nextSlide);

      if (currentSlide === $slidesLastchild) {
        nextSlide = $('#slider .slides .slide' + ':nth-child(' + ($slidesFirstchild) + ')').html();
      } else {
        nextSlide = $('#slider .slides .slide' + ':nth-child(' + (currentSlide + 1) + ')').html();
      }
      $('.thumbnail-next').html(nextSlide);
      $('.narrow span img').mouseleave(function () {
        $('.thumbnail-next').html('');
      });
    }
  }
  function hoverPrevSlide() {
    /**
     * Hover prev slide function
     */
    if (visibleThumbnail) {
      var prevSlide = '';
      $('.thumbnail-prev').html(prevSlide);

      if (currentSlide === $slidesFirstchild) {
        prevSlide = $('#slider .slides .slide' + ':nth-child(' + ($slidesLastchild) + ')').html();
      } else {
        prevSlide = $('#slider .slides .slide' + ':nth-child(' + (currentSlide - 1) + ')').html();
      }
      $('.thumbnail-prev').html(prevSlide);
      $('.darrow span img').mouseleave(function () {
        $('.thumbnail-prev').html('');
      });
    }
  }
  function dotted() {
    console.log($(".dotted").find('.dots:nth-child(3)').index());
    for (i = 1; i <= $slidesLastchild; i++) {
      if (i !== currentSlide) {
        $dots.find('.dots:nth-child(' + (i) + ') input').prop("checked", false);
      } else {
        $dots.find('.dots:nth-child(' + currentSlide + ') input').prop("checked", true);
      }
    }
  }

  function clickRadioButton() {
    var indexRadio = $(".dotted").find('.dots:nth-child(' + ($(this).index() + 1) + ')').index();
    currentWidth = -width * indexRadio;
    $slideContainer.css("transform", "translateX(" + (currentWidth) + "px)");
    currentSlide = indexRadio + 1;
    dotted();
  }

  $('.narrow span img').on('click', nextSlide).on('mouseenter', hoverNextSlide);
  $('.darrow img').on('click', prevSlide).on('mouseenter', hoverPrevSlide);
  $(".dotted").find('.dots').on('click', clickRadioButton);
});

