$(function () {



  // Splash Screen

  $(window).on("load", function () {
    var loader = $(".loader");
    var wHeight = $(window).height();
    var wWidth = $(window).width();
    var o = 0;

    loader.css({
      top: wHeight / 2 - 2.5,
      left: wWidth / 2 - 200
    });

    do {
      loader.animate(
        {
          width: o
        },
        10
      );
      o += 3;
    } while (o <= 400);
    if (o === 402) {
      loader.animate({
        left: 0,
        width: "100%"
      });
      loader.animate({
        top: "0",
        height: "100vh"
      });
      setTimeout(function () {
        $(".loader-wrapper").fadeOut(500);
        $(".loader").fadeOut(500);
      }, 3000);
    }
  });


  // Splash Screen



  // Cursor

  document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
    t.style.left = n.clientX + "px",
      t.style.top = n.clientY + "px",
      e.style.left = n.clientX + "px",
      e.style.top = n.clientY + "px",
      i.style.left = n.clientX + "px",
      i.style.top = n.clientY + "px";
  });
  var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");
  function n(t) {
    e.classList.add("hover"), i.classList.add("hover");
  }
  function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover");
  }
  s();
  for (var r = document.querySelectorAll("a, button"), a = r.length - 1; a >= 0; a--) {
    o(r[a]);
  }
  function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
  }

  // Cursor


  // Banner
  $('.bannerFade').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    fade: true,
    cssEase: 'linear',
    autoplay: true

  });
  // Banner
  // PROMOTIONS

  $('.promotions-card').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 770,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });



  // PROMOTIONS

  // Events
  $('.events-card').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // rtl: true,  
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 770,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]

  });
  // Events




});

// Navigation

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Navigation




// Check active classes
var checkClass = function () {
  if ($('.item').hasClass('hide')) {
    $('.item').removeClass('hide');
  }
};

// Category filters
$('.all').click(function () {
  checkClass();
});
$('.Drunch').click(function () {
  checkClass();
  $('.item:not(.Drunch)').toggleClass('hide');
});
$('.Shisha').click(function () {
  checkClass();
  $('.item:not(.Shisha)').toggleClass('hide');
});
$('.Breakfast').click(function () {
  checkClass();
  $('.item:not(.Breakfast)').toggleClass('hide');
});
$('.Cocktails').click(function () {
  checkClass();
  $('.item:not(.Cocktails)').toggleClass('hide');
});
$('.Food').click(function () {
  checkClass();
  $('.item:not(.Food)').toggleClass('hide');
});


// Active tag
$('.button').click(function () {
  $('.button').removeClass('active');
  $(this).addClass('active');
})


$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $("#navbar").addClass("onScroll");
    }

    else {
      $("#navbar").removeClass("onScroll");
    }
  });
});