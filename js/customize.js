// 自行加入的JS請寫在這裡
$(function () {
  var $slider = $('.mpSlider .slider');

  if ($slider.length) {
    var currentSlide;
    var slidesCount;
    var sliderCounter = document.createElement('div');
    sliderCounter.classList.add('sliderCounter');

    var updateSliderCounter = function (slick, currentIndex) {
      currentSlide = slick.slickCurrentSlide() + 1;
      slidesCount = slick.slideCount;

      // 如果 currentSlide 小於 10，則格式化為 2 位數字
      var formattedCurrentSlide = currentSlide < 10 ? '0' + currentSlide : currentSlide;

      // 如果 slidesCount 小於 10，則格式化為 2 位數字
      var formattedSlidesCount = slidesCount < 10 ? '0' + slidesCount : slidesCount;

      $(sliderCounter).text(formattedCurrentSlide + '/' + formattedSlidesCount);
    };

    $slider.on('init', function (event, slick) {
      $slider.append(sliderCounter);
      updateSliderCounter(slick, 0); // 初始化顯示第一張
    });

    $slider.on('afterChange', function (event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    });

    $slider.slick();
  }

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

//節點在手機版變下拉選單
// $(document).ready(function() {
//   var wwSmall = 768; // 設定你的視窗寬度閾值

//   // 點擊當前按鈕時，觸發 toggleMenu
//   $('.subMenuToggle').click(function() {
//       // 使用 this 找到對應的下拉選單
//       $(this).siblings('.subMenuList').slideToggle();
//       // 使用 this 切換當前按鈕的 active class
//       $(this).toggleClass('active');
//   });

//   當視窗大小改變時重設所有下拉選單和按鈕狀態
//   $(window).resize(function() {
//       if ($(window).width() > wwSmall) {
//           $('.subMenuList').css('display', 'block'); // 大於 wwSmall 時，顯示所有選單
//           $('.subMenuToggle').removeClass('active'); // 移除所有按鈕的 active 狀態
//       } else {
//           $('.subMenuList').css('display', 'none'); // 小於 wwSmall 時，隱藏所有選單
//           $('.subMenuToggle').removeClass('active'); // 移除所有按鈕的 active 狀態
//       }
//   });
// });

//advSearch 顯示條件查詢
$(document).ready(function () {
  const advSearchButton = $('.advSearch button');
  const advSearchContent = $('.advSearchContent');
  const focusableElements = advSearchContent.find('input, select, button'); // 找到所有可 focus 的表單元素

  // 展開或收合內容的函數
  function toggleContent() {
    advSearchContent.slideToggle(); // 展開或收合 .advSearchContent
    advSearchButton.toggleClass('active');
  }

  // 滑鼠點擊事件：展開或收合內容
  advSearchButton.on('click', function () {
    toggleContent();
  });

  // 鍵盤事件：當按下 Enter 鍵時展開內容
  advSearchButton.on('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault(); // 阻止默認的 Enter 行為
      if (!advSearchContent.is(':visible')) {
        toggleContent(); // 只在內容未展開時展開
      }
    }
  });

  // 鍵盤事件：按下 Tab 鍵時，焦點移到第一個可 focus 的元素
  advSearchButton.on('keydown', function (e) {
    if (e.key === 'Tab' && advSearchContent.is(':visible')) {
      e.preventDefault(); // 阻止默認的 Tab 行為
      focusableElements.first().focus(); // 焦點移到第一個可 focus 元素
    }
  });

  // 監聽最後一個 focusable 元素上的 Tab 鍵按下事件
  focusableElements.last().on('keydown', function (e) {
    if (e.key === 'Tab' && !e.shiftKey) {
      e.preventDefault(); // 阻止默認的 Tab 行為
      advSearchContent.slideUp(); // 收合內容
      advSearchButton.removeClass('active').focus(); // 焦點返回到按鈕
    }
  });

  // 監聽第一個 focusable 元素上的 Shift+Tab 鍵按下事件
  focusableElements.first().on('keydown', function (e) {
    if (e.key === 'Tab' && e.shiftKey) {
      e.preventDefault(); // 阻止默認的 Shift+Tab 行為
      advSearchContent.slideUp(); // 收合內容
      advSearchButton.removeClass('active').focus(); // 焦點返回到按鈕
    }
  });
});

//accordion
$(document).ready(function () {
  function accordionFunction(obj) {
    'use strict';
    const accordion = $(obj.target);
    const autoClose = obj.autoClose;
    const openSwitch = obj.openSwitch;
    const openFirst = obj.openFirst;
    const { open, close } = obj.info;

    if (accordion.length) {
      let nowIndex = obj.index === null ? null : obj.index < accordion.find('.accordionList').length ? obj.index : accordion.find('.accordionList').length;

      // 初始化每個手風琴項
      accordion.find('.accordionList').each(function (index) {
        const $this = $(this);
        const $button = $this.find('.accordionBtn');
        const $content = $this.find('.accordionContent');

        $button
          .attr({
            'aria-expanded': 'false',
            role: 'button',
          })
          .append(`<span class="accordionState">${open}</span><span class="accordionArrow"></span>`);

        if (nowIndex === index) {
          $this.addClass('active');
          $button.attr('aria-expanded', 'true');
          $content.slideDown();
          $button.find('.accordionState').text(close);
        } else {
          $content.hide(); // 隱藏其他內容
        }
      });

      // 預先展開模式
      function openCheck() {
        if (!openFirst && nowIndex === null) {
          accordion.find('.accordionContent').slideUp();
        }
      }
      openCheck();

      accordion.find('.accordionList').each(function (index) {
        const $this = $(this);
        const $button = $this.find('.accordionBtn');
        const $content = $this.find('.accordionContent');
        const itemAllTarget = $content.find('a,button,input,textarea,select'); // 可聚焦元素
        const firstItem = itemAllTarget.first();
        const lastItem = itemAllTarget.last();
        const siblings = $this.siblings('.accordionList');
        const $nextButton = accordion
          .find('.accordionList')
          .eq(index + 1)
          .find('.accordionBtn'); // 下一個 accordion 按鈕
        const $prevButton = accordion
          .find('.accordionList')
          .eq(index - 1)
          .find('.accordionBtn'); // 上一個 accordion 按鈕

        // 點擊事件
        if (openSwitch) {
          $button.on('click', function (e) {
            e.preventDefault();
            if ($this.hasClass('active')) {
              // 如果已展開，則收合
              $this.removeClass('active');
              $content.slideUp();
              $button.attr('aria-expanded', 'false');
              $button.find('.accordionState').text(open);
            } else {
              // 如果未展開，則展開
              siblings.removeClass('active');
              siblings.find('.accordionContent').slideUp();
              siblings.find('.accordionBtn').attr('aria-expanded', 'false').find('.accordionState').text(open);

              $this.addClass('active');
              $content.slideDown();
              $button.attr('aria-expanded', 'true');
              $button.find('.accordionState').text(close);
            }

            nowIndex = index;

            // 自動關閉
            if (autoClose) {
              siblings.each(function () {
                $(this).find('.accordionContent').slideUp();
                $(this).removeClass('active');
                $(this).find('.accordionBtn').attr('aria-expanded', 'false').find('.accordionState').text(open);
              });
            }
          });

          // 鍵盤導航
          $button.on('keydown', function (e) {
            if (e.which === 9 && !e.shiftKey) {
              // Tab 鍵
              if (!$this.hasClass('active')) {
                $content.slideDown();
              }

              e.preventDefault();

              if (itemAllTarget.length > 0) {
                // 如果內容中有可聚焦元素，將焦點設置到第一個
                firstItem.focus();
              } else {
                // 如果沒有可聚焦元素，將焦點移到下一個按鈕
                $nextButton.focus();
              }
            } else if (e.which === 9 && e.shiftKey) {
              // Shift + Tab 鍵
              e.preventDefault();

              if (itemAllTarget.length > 0) {
                // 如果內容中有可聚焦元素，將焦點設置到最後一個
                lastItem.focus();
              } else {
                // 如果沒有可聚焦元素，將焦點移到上一個按鈕
                $prevButton.focus();
              }
            }
          });
        }

        // 內容內部的鍵盤導航
        itemAllTarget.each(function () {
          $(this).on('keydown', function (e) {
            if (e.which === 9 && e.shiftKey && $(this).is(firstItem)) {
              // Shift + Tab 從第一個聚焦元素回到按鈕
              $button.focus();
            }
          });
        });
      });
    }
  }

  // 手風琴功能
  accordionFunction({
    target: '.accordion',
    openFirst: false, // 預設先展開所有內容，鍵盤的自動開合功能無效
    autoClose: true, // 點擊時自動關閉已展開的項目，若需要此功能需要關閉openFirst
    openSwitch: true, // 是否可開合
    index: 0, // 預設開啟第幾個
    info: {
      open: '展開', // 收合時顯示
      close: '收合', // 展開時顯示
    },
  });
});

//npNode選單
$(document).ready(function () {
  $('.npNode ul').find('li').has('ul').addClass('hasChild');

  function setMenuHeight() {
    let heights = [$('.npNode ul').eq(0).height()];
    $('.npNode li.active')
      .children('ul')
      .each(function () {
        heights.push($(this).height());
      });
    $('.npNode').css('height', `${Math.max(...heights)}px`);
    $('.npNode ul').css('bottom', '0');
  }

  function initializeMenu() {
    $('.npNode .hasChild > a').on('click', function (e) {
      e.preventDefault();
      $('.npNode').removeAttr('style');
      $('.npNode ul').removeAttr('style');

      $(this).parent('li').toggleClass('active').siblings().removeClass('active').find('li').removeClass('active');
      setMenuHeight();
    });
  }

  function initializeToggleBehavior() {
    $('.npNode .hasChild > a').on('click', function (e) {
      e.preventDefault();
      $(this).parent('li').toggleClass('active').siblings().removeClass('active').find('li').removeClass('active');
    });
  }

  function checkWindowWidth() {
    $('.npNode .hasChild > a').off('click');
    if ($(window).width() >= 768) {
      setMenuHeight();
      initializeMenu();
    } else {
      $('.npNode, .npNode ul').removeAttr('style');
      initializeToggleBehavior();
    }
  }

  // 初始化及監控視窗大小改變
  checkWindowWidth();
  $(window).resize(checkWindowWidth);
});

// 亂數數字
function randomFloor(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 亂數英文字
function randomLetter(max, letter = 'abcdefghijklmnopqrstuvwxyz') {
  let text = '';
  for (let i = 0; i < max; i++) text += letter.charAt(Math.floor(Math.random() * letter.length));
  return text;
}

//nodeMemu
$(function () {
  // 新增無障礙相關屬性設定
  if ($('.nodeMenu').length > 0) {
    $('.nodeMenu ul').find('li').has('ul').addClass('hasChild');
    $('.nodeMenu').prepend('<button class="m3Btn" aria-expanded="false" aria-controls="node3" id="m3">第三層選單</button>');
    $('.nodeMenu .hasChild').each(function () {
      const random = `m4_${randomLetter(3)}${randomFloor(0, 999)}`;
      $(this)
        .children('a')
        .attr({ 'aria-controls': `${random}_con`, id: `${random}` });
      $(this)
        .children('ul')
        .attr({ 'aria-hidden': 'true', 'aria-labelledby': `${random} ${random}_btn`, id: `${random}_con` })
        .before(`<button class="m4Btn" aria-expanded="false" aria-controls="${random}_con" id="${random}_btn">第四層選單</button>`);
    });
    $('.nodeMenu li.hasChild > a').attr({
      'aria-expanded': 'false',
      role: 'button',
    });
    // $('.nodeMenu li.hasChild > ul').attr('aria-hidden', 'true');
    $('.nodeMenu li.active > a').attr('aria-expanded', 'true');
    $('.nodeMenu li.active > ul').attr('aria-hidden', 'false');

    // 確保子選單可以被Tab鍵聚焦
    // $('.nodeMenu li.active > ul li a').attr('tabindex', '0');
    // $('.nodeMenu li:not(.active) > ul li a').attr('tabindex', '-1');
  }

  $('.nodeMenu .hasChild > a').on('click', function (e) {
    e.preventDefault();

    $(this).parent('li').siblings().removeClass('active');
    $(this).parent('li').siblings().find('li').removeClass('active');
    $(this).parent('li').siblings().find('ul').removeClass('active');

    let isExpanded = $(this).attr('aria-expanded') === 'false'; // 檢查目前是否已展開
    if (!isExpanded) {
      $(this).parent('li').removeClass('active');
      $(this).siblings('ul').removeClass('active');
      $(this).siblings('.m4Btn').removeClass('openBtn');
    } else {
      $(this).parent('li').addClass('active');
      $(this).siblings('ul').addClass('active');
      $(this).siblings('.m4Btn').addClass('openBtn');
    }

    checkHeight(e);
  });

  $('.nodeMenu .node3 a').on('keyup', function (e) {
    $(this).parent('li').siblings().removeClass('active');
  });

  $(window).on('resize load', function () {
    checkHeight();
  });

  // $(".nodeMenu .m3Btn").on("click", function (e) {
  //   e.preventDefault();
  //   $(this).toggleClass("openBtn");
  //   $(this).siblings("ul").children("li").children("a").toggleClass("open");
  //   checkHeight();
  // });

  $('.nodeMenu .m3Btn').on('click', function (e) {
    e.preventDefault();

    let isExpanded = $(this).hasClass('openBtn'); // 檢查目前是否已展開
    $(this).toggleClass('openBtn').attr('aria-expanded', !isExpanded); // 切換 aria-expanded

    $(this)
      .siblings('ul')
      .attr('aria-hidden', isExpanded) // 切換 aria-hidden
      .children('li')
      .children('a')
      .toggleClass('open');

    checkHeight();
  });

  $('.nodeMenu .m4Btn').on('click', function (e) {
    e.preventDefault();

    let isExpanded = $(this).hasClass('openBtn'); // 檢查目前是否已展開
    $(this).toggleClass('openBtn').attr('aria-expanded', !isExpanded); // 切換 aria-expanded

    $(this).siblings('a').attr('aria-expanded', !isExpanded);
    $(this).siblings('ul').attr('aria-hidden', !isExpanded).toggleClass('active');

    checkHeight();
  });

  $('.nodeMenu .m4Btn').each(function () {
    const _this = $(this);
    const thisAllA = $(this).siblings('ul').find('a');
    thisAllA.eq(thisAllA.length - 1).on('keydown', function (e) {
      if (e.code === 'Tab' && !e.shiftKey) {
        e.preventDefault();
        _this.focus();
      }
    });
  });

  // 在初次加載時調用 checkHeight
  checkHeight();
});

function checkHeight(e) {
  const windowWidth = $(window).width();
  let nextHeight = $('.nodeMenu li.active').children('ul').outerHeight();
  let parentHeight = $('.nodeMenu li.active').parents('ul').outerHeight();
  let m3BtnHeight = $('.nodeMenu .m3Btn').outerHeight();
  let m4BtnHeight = $('.nodeMenu li.active .m4Btn').outerHeight();

  $('.nodeMenu').attr('style', '');
  $('.nodeMenu ul').attr('style', '');
  $('.node3').attr({ id: 'node3', 'aria-labelledby': 'm3' });

  if (windowWidth > 768) {
    $('.node3').attr('aria-hidden', 'false');
    // 大螢幕設備處理
    $('.nodeMenu a').removeClass('open');
    $('.nodeMenu').css('height', `${parentHeight + nextHeight + 16}px`);
    $('.nodeMenu li.active')
      .children('ul')
      .css('top', `${parentHeight + 16}px`);
    // console.log('parentHeight:', parentHeight, 'nextHeight:', nextHeight);
  } else {
    // 小螢幕設備處理
    $('.node3').attr('aria-hidden', $('.m3Btn').attr('aria-expanded') === 'false');
    $('.nodeMenu').css('height', `${parentHeight + nextHeight + m4BtnHeight + m3BtnHeight + 10}px`);
    $('.nodeMenu li.active')
      .children('ul')
      .css('top', `${parentHeight + m4BtnHeight + m3BtnHeight + 10}px`);
    $('.nodeMenu li.active .m4Btn').css('top', `${parentHeight + m3BtnHeight}px`);
  }

  if (e !== undefined && e.target.tagName === 'A') {
    let checkExpanded = $(e.target).attr('aria-expanded') === 'false' ? true : false;

    $(e.target).attr('aria-expanded', checkExpanded);
    $(e.target).siblings('ul').attr('aria-hidden', !checkExpanded);
    $(e.target).siblings('button').attr('aria-expanded', checkExpanded);
  }
}

//錨點滾動
// 選取所有 anchorBlock 裡的 <a> 標籤
const anchors = document.querySelectorAll('.anchorNav a');

// 添加點擊事件給每個 <a>
anchors.forEach((anchor) => {
  anchor.addEventListener('click', function (event) {
    // 檢查 .header 是否有 .sticky 類別
    const header = document.querySelector('.header');
    if (header && header.classList.contains('sticky')) {
      event.preventDefault(); // 阻止預設滾動行為

      // 取得對應的錨點元素
      const targetId = this.getAttribute('href').substring(1); // 去掉 "#" 符號
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // 計算錨點的位置，加上額外的 100px 偏移
        // const offsetPosition = targetElement.offsetTop;
        const stickyHeight = 90; // 預設 sticky 的 top 值
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - stickyHeight;

        // 平滑滾動到計算好的位置
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
        targetElement.focus({ preventScroll: true });
      }
    }
  });
});
