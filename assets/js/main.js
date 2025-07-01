'use strict';

$(function () {
  // ハンバーガーメニュー
  $('.header__btn, .openbtn').on('click', function () {
    $(this).toggleClass('active');
    $('.nav, #g-nav').toggleClass('active panelactive');
    $('.circle-bg').toggleClass('circleactive');
  });

  $('.nav__btn, .nav__item a, #g-nav a').on('click', function () {
    $('.header__btn, .openbtn').removeClass('active');
    $('.nav, #g-nav').removeClass('active panelactive');
    $('.circle-bg').removeClass('circleactive');
  });

  // スライダー設定（MENU）
  function menuSliderSetting() {
    var width = $(window).width();
    if (width <= 768) {
      $('.MENU_flex').not('.slick-initialized').slick({
        infinite: true,
        dots: true,
        centerMode: true,
        centerPadding: '10%',
        autoplay: true,
        speed: 500,
        arrows: false
      });
    } else {
      $('.MENU_flex.slick-initialized').slick('unslick');
    }
  }

  // スライダー設定（PLAN）
  function planSliderSetting() {
    var width = $(window).width();
    if (width <= 768) {
      $('.PLAN_box').not('.slick-initialized').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        speed: 500,
        arrows: true,
        autoplaySpeed: 10000,
        prevArrow: '<img src="assets/images/arrow-prev.png" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="assets/images/arrow-next.png" class="slide-arrow next-arrow">'
      });
    } else {
      $('.PLAN_box.slick-initialized').slick('unslick');
    }
  }

  menuSliderSetting();
  planSliderSetting();

  $(window).resize(function () {
    menuSliderSetting();
    planSliderSetting();
  });

  // Vegasスライダー設定
  var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;

  var responsiveImage1 = windowwidth > 821 ? [
    { src: './assets/images/Mainpc1.png' },
    { src: './assets/images/Mainpc2.jpg' },
    { src: './assets/images/Main3.jpg' }
  ] : [
    { src: './assets/images/Mainpc1.png' },
    { src: './assets/images/Mainpc2.jpg' },
    { src: './assets/images/Main3.jpg' }
  ];

  var responsiveImage2 = windowwidth > 821 ? [
    { src: './assets/images/Mainpc2.jpg' },
    { src: './assets/images/Main3.jpg' },
    { src: './assets/images/Mainpc1.png' }
  ] : [
    { src: './assets/images/Mainpc2.jpg' },
    { src: './assets/images/Main3.jpg' },
    { src: './assets/images/Mainpc1.png' }
  ];

  $('#slider').vegas({
    overlay: false,
    transition: 'blur',
    transitionDuration: 2000,
    delay: 7000,
    animationDuration: 17000,
    animation: 'kenburns',
    slides: responsiveImage1,
    timer: false
  });

  $('#slider2').vegas({
    overlay: false,
    transition: 'blur',
    transitionDuration: 2000,
    delay: 7000,
    animationDuration: 17000,
    animation: 'kenburns',
    slides: responsiveImage2,
    timer: false
  });

  // 共通スクロールアニメーション関数
  function scrollAnime(selector, animationClass, delayTime) {
    var value = delayTime;
    $(selector).each(function () {
      var parent = this;
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      var childs = $(this).children();

      if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
        $(childs).each(function () {
          if (!$(this).hasClass(animationClass)) {
            $(parent).addClass("play");
            $(this).css("animation-delay", value + "s");
            $(this).addClass(animationClass);
            value += delayTime;

            if (childs.length - 1 == $(childs).index(this)) {
              $(parent).removeClass("play");
            }
          }
        });
      } else {
        $(childs).removeClass(animationClass);
        value = delayTime;
      }
    });
  }

  $(window).on('load scroll', function () {
    scrollAnime('.delayScroll', 'fadeUp', 0.4);
    scrollAnime('.pointScroll', 'fadeUp2', 0.1);
    scrollAnime('.menuScroll', 'fadeUp2', 0.02);
  });
});
