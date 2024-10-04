$(function () {
  /* Nice Select */
  $(".custom-select").niceSelect();

  /* Datepicker */
  $(".datepicker").datepicker({
    dateFormat: "yy-mm-dd",
    dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
    monthNames: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    monthNamesShort: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
  });

  // Tab
  $("ul.custom-tabs li").click(function () {
    var activeTab = $(this).attr("data-tab");
    $("ul.custom-tabs li").removeClass("on");
    $(".custom-tab_contents").removeClass("on");
    $(this).addClass("on");
    $("#" + activeTab).addClass("on");
  });

  /* 헤더의 높이에 따라 main padding-top 조절 */
  controlMainPadding();

  /* 띠 배너 btn_close 클릭이벤트 */
  $(".band-banner .btn_close").click(function () {
    $(this).parents(".banner").remove();
    controlMainPadding();
  });

  /* 전체 카테고리 호버 이벤트 */
  // $(".hd_category_gnb .category, #hd_category")
  //   .mouseover(function () {
  //     $(".category_icon").addClass("active");
  //     $("#hd_category").stop().slideDown();
  //   })
  //   .mouseout(function () {
  //     $("#hd_category").stop().slideUp();
  //     // $(".category_icon").removeClass("active");
  //   });
  // $(".hd_category_gnb .category")
  //   .mouseover(function () {
  //     $(".category_icon").addClass("active");
  //     $("#hd_category").stop().slideDown();
  //   })
  
  $(".hd_category_gnb #gnb")
    .mouseover(function () {
      $(".category_icon").removeClass("active");
      $("#hd_category").stop().slideUp();
    })
  
  $('header .header__inner').mouseover(function (e) {
    if (e.target.closest('.hd_category_gnb .category')) {
      $(".category_icon").addClass("active");
      $("#hd_category").stop().slideDown();
    }
  })
  
    $("#hd_category")
    .mouseover(function (e) {
      if (!e.target.closest('ul.category')) { 
        $(".category_icon").addClass("active");
      }
      
      $("#hd_category").stop().slideDown();
    })
    .mouseout(function (e) {
      if (!e.target.closest('#hd_category')) {
        $(".category_icon").removeClass("active");
      }
      $("#hd_category").stop().slideUp();
      setTimeout(function () {
        if ($('#hd_category').css('display') == 'none') {
          $(".category_icon").removeClass("active");
        }
      }, 500)
      
    });


  /* 전체 카테고리 : 카테고리 클릭시 해당 다음 뎁스 노출 */
  $(document).on("click", "#hd_category ul.category>li .category_nm", function () {
    $(this).parents('li').siblings().children('.category_nm').removeClass("active");
    $(this).addClass("active");
    $(this).parents('li').siblings().children('.category_sub').hide()
    $(this).siblings('ul.category_sub').show()
  });

  /* 헤더 마이페이지 버튼 호버 이벤트 */
  $(".hd_mypage")
    .mouseover(function () {
      $(this).children(".btn_mypage").addClass("open");
      $("ul.mypage_list").stop().slideDown();
    })
    .mouseout(function () {
      $(this).children(".btn_mypage").removeClass("open");
      $("ul.mypage_list").stop().slideUp();
    });

  $(".setting-lang")
    .mouseover(function () {
      $(this).children(".btn_open").addClass("open");
      $(this).children("ul.lang_list").stop().slideDown();
    })
    .mouseout(function () {
      $(this).children(".btn_open").removeClass("open");
      $(this).children("ul.lang_list").stop().slideUp();
    })
  
  /* 헤더 언어 선택 버튼 호버 이벤트 */
  if (Mobile()) {
    $(".setting-lang")
    .click(function () {
      $(this).children(".btn_open").toggleClass("open");
      $(this).children("ul.lang_list").stop().slideToggle();
    })
  }
  
  /* 모바일 푸터 사업자 정보 펼치기 */
  $(".open_company_info").click(function () {
    $(this).toggleClass("active");
    $(this).siblings(".ft_tel_info_cpright").slideToggle();
  });

  /* 모바일 헤더 햄버거 버튼 클릭 */
  $(".mo-icon_menu").click(function () {
    $(".mobile_gnb").addClass("open");
  });

  /* 모바일 헤더 닫기 버튼 클릭 */
  $(".mobile_gnb__header .btn_close").click(function () {
    $(".mobile_gnb").removeClass("open");
    $(".mobile_gnb__mypage").removeClass("open");
    $(".mobile_submenu").removeClass("open");
  });

  /* 모바일 헤더 마이페이지 버튼 클릭 */
  $(".m-gnb>li .a_menu.mypage").click(function () {
    $(".mobile_gnb__mypage").addClass("open");
  });

  $(".a_menu.a_gnb").click(function () {
    $(this).siblings('.mobile_submenu').addClass('open')
  });

  $(".mobile_submenu .btn_revert").click(function () {
    $(this).closest('.mobile_submenu').removeClass('open')
  });

  // 메뉴 클릭시 하위 카테고리명 변경
  $('.gnb_submenu__menu .a_menu.a_gnb').click(function () {
    let text = $(this).text();
    console.log($(this).siblings('.mobile_submenu'))
    $(this).siblings('.mobile_submenu').find('.menu_nm').text(text)
  })

  /* 모바일 헤더 마이페이지의 전체 버튼 클릭 */
  $(".mobile_gnb__mypage .btn_revert").click(function () {
    $(".mobile_gnb__mypage").removeClass("open");
  });

  /* 아이템 좋아요 버튼 호버 시 btn_like_hover show */
  $(".school-card-item .btn_like_box")
    .mouseover(function () {
      $(this).siblings(".card_back").children(".btn_like_hover").show();
    })
    .mouseout(function () {
      $(this).siblings(".card_back").children(".btn_like_hover").hide();
    });
  

  window.onclick = function (event) {
    if (event.target.closest('.modal.bottom') && event.target.closest('.modal__inner') == null) {
      $('.modal.bottom').hide()
      $("html").css("overflow-y", "auto");
    }

    if (event.target.closest('.list_filter') && event.target.closest('.filter__inner') == null) {
      $('.list_filter').removeClass('open')
      $('.btn_filter').removeClass('active')
      
      $("html").css("overflow-y", "auto");
    }
  };
});

$(window).on("resize", function () {
  let width = $(window).width();
  if (width > 768) {
    $(".modal.bottom").not('.modal_banner').hide();
  }

  controlMainPadding();
});

function Mobile() { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); }

function controlMainPadding() {
  let width = $(window).width();
  if (width > 768) {
    var headerHeight = $("header").outerHeight(true);
    $("main").css("paddingTop", headerHeight);
  }
}

function openModal(id) {
  $("#" + id).show();
  $("html").css("overflow-y", "hidden");
  // $("html, .modal").bind("scroll touchmove mousewheel", function (e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   return false;
  // })
}

function closeModal(id) {
  $("#" + id).hide();
  $("html").css("overflow-y", "auto");
  // $('html, .modal').off('scroll touchmove mousewheel');
}

function closeAllModal() {
  $(".modal").hide();
}
