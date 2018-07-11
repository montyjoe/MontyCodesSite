$( document ).ready(function() {
  $(".load-img").animate({opacity:1}, 2000);
  $(".load-text-top").animate({top: '+=100%'}, 2300);
  $(".load-text-bottom").animate({top: '+=100%'}, 2000);
  $(".enter-button").animate({top: '-=80%'}, 2000);
  $(".enter-button").click(function(){
    if ($(".enter-button").hasClass('clickable')) {
      $(".enter-button").removeClass("clickable");
      $(".load-text-top").animate({top: '-=100%'}, 200);
      $(".load-text-bottom").animate({top: '-=100%'}, 200);
      $(".enter-button").animate({top: '+=80%'}, 200);
      $(".load-img").animate({opacity:0}, 800);
      $(".header").animate({left: '-=101%'}, 800);
      $(".header-img").animate({left: '-=100%'}, 1200);
      $(".resume-button").animate({left: '-=37%'}, 1500);
      $(".body").animate({top: '-=150%'}, 2800);
      $(".body-name").animate({top: '-=150%'}, 2800);
      $(".body-title").animate({top: '-=150%'}, 3000);
      $(".title-button").animate({top: '-=155%'}, 3000);
      $(".about-me-button").animate({top: '-=150%'}, 2800);
      $(".projects-button").animate({top: '-=150%'}, 2800);
    }
  });

  $(".about-me-button").click(function(){
    if( $(".about-me-button").hasClass('about-me-button-off') && ( $(".projects-button").hasClass('projects-button-off'))) {
      $(".title-button").hide(500);
      $(".body-name").animate({top: '-=16%'}, 700);
      $(".body-title").animate({top: '-=17%'}, 900);
      $(".about-me-button").animate({top: '-=60%'}, {queue: false, duration: 1100}).animate({fontSize: "4vw"}, { queue: false, duration: 1100 });
      $(".about-me-img").animate({left: '-=92%'}, 2000);
      $(".about-me-text").animate({left: '-=100%'}, 2000);
      $(".contact-info").animate({left: '-=79%'}, 2000);
      $(".about-me-button").removeClass("about-me-button-off").addClass("about-me-button-on")
    }
    else if( $(".about-me-button").hasClass('about-me-button-off') && ( $(".projects-button").hasClass('projects-button-on'))) {
      $(".about-me-button").animate({fontSize: '4vw'}, 1200);
      $(".projects-box").animate({top: '+=100%'}, 1000);
      $(".projects-button").animate({top: '+=59%'}, {queue: false, duration: 1000}).animate({fontSize: "3vw"}, { queue: false, duration: 1000 });
      $(".about-me-img").animate({left: '-=92%'}, 2000);
      $(".about-me-text").animate({left: '-=100%'}, 2000);
      $(".contact-info").animate({left: '-=79%'}, 2000);
      $(".about-me-button").removeClass("about-me-button-off").addClass("about-me-button-on");
      $(".projects-button").removeClass("projects-button-on").addClass("projects-button-off")
    }
    else {
      $(".body-name").animate({top: '+=16%'}, 1100);
      $(".body-title").animate({top: '+=17%'}, 900);
      $(".about-me-button").animate({top: '+=60%'}, {queue: false, duration: 900}).animate({fontSize: "3vw"}, { queue: false, duration: 700 });
      $(".about-me-img").hide(300);
      $(".about-me-img").animate({left: '+=92%'}, 200);
      $(".about-me-text").animate({left: '+=100%'}, 200);
      $(".contact-info").animate({left: '+=79%'}, 200);
      $(".about-me-img").show(500);
      $(".title-button").show(1500);
      $(".about-me-button").removeClass("about-me-button-on").addClass("about-me-button-off");
    }
  });

  $(".projects-button").click(function(){
    if( $(".projects-button").hasClass('projects-button-off') && ( $(".about-me-button").hasClass('about-me-button-off'))) {
      $(".title-button").hide(500);
      $(".body-name").animate({top: '-=16%'}, 700);
      $(".body-title").animate({top: '-=17%'}, 900);
      $(".about-me-button").animate({top: '-=60%'}, 1100);
      $(".projects-button").animate({top: '-=59%'}, {queue: false, duration: 1200}).animate({fontSize: "4vw"}, { queue: false, duration: 1200 });
      $(".projects-box").animate({top: '-=100%'}, 2000);
      $(".projects-button").removeClass("projects-button-off").addClass("projects-button-on")
    }
    else if( $(".projects-button").hasClass('projects-button-off') && ( $(".about-me-button").hasClass('about-me-button-on'))) {
      $(".about-me-button").animate({fontSize: '3vw'}, 1100);
      $(".projects-button").animate({top: '-=59%'}, {queue: false, duration: 1200}).animate({fontSize: "4vw"}, { queue: false, duration: 1200 });
      $(".projects-box").animate({top: '-=100%'}, 2000);
      $(".about-me-img").hide(300);
      $(".about-me-img").animate({left: '+=92%'}, 200);
      $(".about-me-text").animate({left: '+=100%'}, 200);
      $(".contact-info").animate({left: '+=79%'}, 200);
      $(".about-me-img").show(500);
      $(".about-me-button").removeClass("about-me-button-on").addClass("about-me-button-off");
      $(".projects-button").removeClass("projects-button-off").addClass("projects-button-on")
    }
    else {
      $(".projects-box").animate({top: '+=100%'}, 1000);
      $(".body-name").animate({top: '+=16%'}, 1200);
      $(".body-title").animate({top: '+=17%'}, 1100);
      $(".about-me-button").animate({top: '+=60%'}, 900);
      $(".projects-button").animate({top: '+=59%'}, {queue: false, duration: 700}).animate({fontSize: "3vw"}, { queue: false, duration: 700 });
      $(".title-button").show(1500);
      $(".projects-button").removeClass("projects-button-on").addClass("projects-button-off");
    }
  });

  $(".title-button-left").on('mouseenter', function(){
    $(".title-button-left").animate({width: '+=3%'});
  });
  $(".title-button-left").on('mouseout', function(){
    $(".title-button-left").animate({width: '-=3%'});
  });
  $(".title-button-center").on('mouseenter', function(){
    $(".title-button-center").animate({width: '+=3%'});
  });
  $(".title-button-center").on('mouseout', function(){
    $(".title-button-center").animate({width: '-=3%'});
  });
  $(".title-button-right").on('mouseenter', function(){
    $(".title-button-right").animate({width: '+=3%'});
  });
  $(".title-button-right").on('mouseout', function(){
    $(".title-button-right").animate({width: '-=3%'});
  });

  var i = 0;
  var srcArray = ['src/img/ttuSite1.png','src/img/ttuSite2.png','src/img/ttuSite3.png']
  window.setInterval(function(){
    if (i == 3) {
      i = 0;
    }
    $('.toggle-picture').attr('src',srcArray[i]);
    i++;
  }, 4000);

});






// end
