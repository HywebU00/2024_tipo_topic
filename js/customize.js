// 自行加入的JS請寫在這裡
$(function () {
  var $slider = $('.mpSlider .slider');

if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('sliderCounter');

  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;

    // 如果 currentSlide 小於 10，則格式化為 2 位數字
    var formattedCurrentSlide = currentSlide < 10 ? '0' + currentSlide : currentSlide;

    // 如果 slidesCount 小於 10，則格式化為 2 位數字
    var formattedSlidesCount = slidesCount < 10 ? '0' + slidesCount : slidesCount;

    $(sliderCounter).text(formattedCurrentSlide + '/' + formattedSlidesCount);
  };

  $slider.on('init', function(event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick, 0); // 初始化顯示第一張
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $slider.slick();
}


  // var $slider = $('.mpSlider .slider');

  // if ($slider.length) {
  //   var currentSlide;
  //   var slidesCount;
  //   var sliderCounter = document.createElement('div');
  //   sliderCounter.classList.add('sliderCounter');

  //   var updateSliderCounter = function(slick, currentIndex) {
  //     currentSlide = slick.slickCurrentSlide() + 1;
  //     slidesCount = slick.slideCount;
  //     $(sliderCounter).text(currentSlide + '/' +slidesCount)
  //   };

  //   $slider.on('init', function(event, slick) {
  //     $slider.append(sliderCounter);
  //     updateSliderCounter(slick);
  //   });

  //   $slider.on('afterChange', function(event, slick, currentSlide) {
  //     updateSliderCounter(slick, currentSlide);
  //   });

  //   $slider.slick();
  // }
  // $('.mpSlider .slider').on('init reInit afterChange', function(event, slick, currentSlide) {
  //   var i = (currentSlide ? currentSlide : 0) + 1;
  //   if (slick.slideCount<10) {
  //     if (i<10) {
  //       $('.sliderCounter').html( '<span>0' + i + '</span> / 0' + slick.slideCount);
  //     } else {
  //       $('.sliderCounter').html( '<span>' + i + '</span> / 0' + slick.slideCount);
  //     }
  //   } else {
  //     if (i<10) {
  //       $('.sliderCounter').html( '<span>0' + i + '</span> / ' + slick.slideCount);
  //     } else {
  //       $('.sliderCounter').html( '<span>' + i + '</span> / ' + slick.slideCount);
  //     }
  //   }
  // });
  // $('.mpSlider .slider').slick({
  //   mobileFirst: true,
  //   dots: false,
  //   arrow: true,
  //   infinite: true,
  //   speed: 500,
  //   autoplay: false,
  //   fade: true,
  //   lazyLoaded: true,
  //   lazyLoad: 'ondemand',
  //   ease: 'ease'
  // });

  // 連結輪播
  $('.bottomSlider').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
  // 三輪播
  // $('judgment .content,.service .content').slick({
  //   mobileFirst: true,
  //   dots: false,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   arrow: true,
  //   lazyLoaded: true,
  //   lazyLoad: 'ondemand',
  //   ease: 'ease',
  //   responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         arrows: true,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         arrows: true,
  //       },
  //     },
  //     {
  //       breakpoint: 575,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         arrows: true,
  //       },
  //     },
  //   ],
  // });
  // 廣告輪播
  // $('.adSlider').slick({
  //   mobileFirst: true,
  //   dots: false,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   arrow: true,
  //   lazyLoaded: true,
  //   lazyLoad: 'ondemand',
  //   ease: 'ease',
  //   responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 5,
  //         slidesToScroll: 1,
  //         arrows: true,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 1,
  //         arrows: true,
  //       },
  //     },
  //     {
  //       breakpoint: 575,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         arrows: true,
  //       },
  //     },
  //   ],
  // });

  // 首頁輪播
  $('.video ul').slick({
    mobileFirst: true,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    fade: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    pauseOnHover: false,
    pauseOnFocus: false,
    appendDots: '.video ul',
    customPaging: function (slider, i) {
      var title = $(slider.$slides[i]).find('img').attr('alt').trim();
      return $('<button type="button" aria-label="' + title + '"/>').text(title);
    },
  });


  //燈箱slick+lightBox組合
  $('.cp_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    pauseOnFocus: true,
    focusOnSelect: true,
    accessibility: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  //
  $('.cppic_slider').slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    // pauseOnHover: true,
    // pauseOnFocus: true,
    // focusOnSelect: true,
    // accessibility: true,
    // lazyLoad: 'ondemand',
    // ease: 'ease',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  // cp_photo
  $('.Slider-for').on('init reInit afterChange', function (event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.controls').html(i + '/' + slick.slideCount);
  });
  $('.Slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    swipe: false,
    swipeToSlide: false,
    lazyLoad: 'ondemand',
    asNavFor: '.Slider-nav',
    infinite: true,
  });
  $('.Slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.Slider-for',
    dots: true,
    arrows: true,
    lazyLoad: 'ondemand',
    focusOnSelect: true,
    infinite: true,
  });

  // password_toggle
  var passShow = false;
  $('.password_toggle').each(function (index, el) {
    $(this)
      .find('.btn-icon')
      .off()
      .click(function (e) {
        if (!passShow) {
          $(this).children('i').removeClass().addClass('i_show');
          $(this).parents('.password_toggle').find('input[type="password"]').attr('type', 'text');
          passShow = true;
          // console.log(passShow);
        } else {
          $(this).children('i').removeClass().addClass('i_hide');
          $(this).parents('.password_toggle').find('input[type="text"]').attr('type', 'password');
          passShow = false;
          // console.log(passShow);
        }
        e.preventDefault();
      });
  });
  //sticky sidebar
  // if ($('.stickySidebar').length > 0) {
  //   var stickySidebar = new StickySidebar('.stickySidebar', {
  //     containerSelector: '.main',
  //     topSpacing: 93,
  //     bottomSpacing: 0,
  //     minWidth: 768,
  //     resizeSensor: true,
  //   });
  // }
});
// $('.mpBanner .outerBox').append(`<div class="countBox"><ul></ul></div>`);
// $('.mpSlider').on('init reInit', function (event, slick, currentSlide) {
//   const totalLength = $('.mpSlider .item').length;
//   for (let i = 0; i < totalLength; i++) {
//     $('.mpBanner .countBox ul').append(`<li>0${i + 1}</li>`);
//   }
//   $('.mpBanner .countBox ul li').eq(0).addClass('active');
// });
// $('.mpSlider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
//   $('.mpBanner .countBox ul li').removeClass('active');
//   $('.mpBanner .countBox ul li').eq(nextSlide).addClass('active');
// });

// tab功能
tabFunction({
  target: '.tabSet',
  openFirst: false, // 預設先展開所有內容，鍵盤的自動開合功能無效
  openSwitch: true, // 是否可開合/切換
  autoClose: true, // 自動關閉其他開啟內容
  modeSwitch: true, // 預設模式自動切換，尺寸以上tab功能，尺寸以下手風琴功能
  width: 767, // 尺寸以上tab功能，尺寸以下手風琴功能
  index: 0, // 預設開啟第幾個
});
