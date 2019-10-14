$(window).load(function(){
  var heightSize = $(window).height();
  $('.gnav-sp').height(heightSize);
});

$(function(){
  $('.gnav-drawer-btn').click(function(){
    $(this).toggleClass('active');
    $('.gnav').fadeToggle();
  });
});

$(function(){
  var gnav = $(".gnav");
  $(window).on('load scroll', function(){
    console.log($(this).scrollTop());
    if($(this).scrollTop() > 30 && gnav.hasClass('scroll') == false) {
      gnav.addClass('scroll');
    } else if($(this).scrollTop() == 0 && gnav.hasClass('scroll') == true) {
      gnav.removeClass('scroll');
    }
  });
});


var mql = window.matchMedia('(max-width: 768px)');
var swiper = null;
function initSwiper(){
  if(mql.matches){
    swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        deley: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        reverseDirection: false
      },
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
      spaceBetween: 10,
      speed: 1000,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  } else {
    if(swiper) {
      swiper.destroy();
    }
  }
}
mql.addListener(initSwiper);
initSwiper();
