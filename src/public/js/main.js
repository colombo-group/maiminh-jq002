
$(document).ready(function () {
  var width = 850;
  var animateSpeed = 500;
  var paused = 1000;
  var currentSlide = 1;
  var interval;
  //DOM
  var $slider = $('#slider');
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');

  function startSlider() {
    /**
     * start slider function
     */
    currentSlide++;
    if (currentSlide === $slides.length + 1) {
      currentSlide = 1;
//      $slideContainer.css('margin-left', '0');
$slideContainer.animate({'margin-left': '0'}, animateSpeed);
    } else {
      interval = setTimeout(function () {
        $slideContainer.animate({'margin-left': '-=' + width}, animateSpeed);
      }, paused);
      console.log(currentSlide);
    }
  }
  function stopSlider() {
    /**
     * stop slider function.
     */
    clearInterval(interval);
  }
  function checkPosition(argument) {
    if (argument === 'asc') {
      currentSlide++;
    } else {
      currentSlide--;
    }
    console.log(currentSlide);
    if (currentSlide === $slides.length + 1) {
      currentSlide = 1;
      $slideContainer.animate({'margin-left': '0'}, animateSpeed);
    }
    if (currentSlide === 0) {
      currentSlide = $slides.length;
      $slideContainer.animate({'margin-left': '+=' + (-width * currentSlide)}, animateSpeed);
    }
    console.log(currentSlide);
  }
  $('.narrow img').click(function () {
    checkPosition('desc');
    $slideContainer.animate({'margin-left': '+=' + width}, animateSpeed);
    $slideContainer.css('margin-left', '+=' + width);
  });
  $('.darrow img').click(function () {
    checkPosition('asc');
    if (currentSlide !== 1) {
      $slideContainer.animate({'margin-left': '-=' + width}, animateSpeed);
    }
  });

  startSlider(); //auto run slider
  /**
   * processing with mouse event.
   */
//  $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
});

