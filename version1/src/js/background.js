$( document ).ready(function() {
  var today = new Date();
  var date = today.getMonth()+1+'-'+today.getDate();
  // valentines
  if (date == '2-14') {
    $("body").css({
      'background': 'linear-gradient(101deg, #B61A3A, #E24767, #E48397, #E4CDD3)',
      'background-size': '1000% 1000%',
      'animation': 'defaultGradient 25s ease infinite',
      '-webkit-animation': 'defaultGradient 25 ease infinite',
      '-moz-animation': 'defaultGradient 25 ease infinite',
    });
  }
  // st patricks
  else if (date == '3-17') {
    $("body").css({
      'background': 'linear-gradient(101deg, #009A49, #009A49, #ffffff, #FF7900, #FF7900)',
      'background-size': '1000% 1000%',
      'animation': 'defaultGradient 30s ease infinite',
      '-webkit-animation': 'defaultGradient 30s ease infinite',
      '-moz-animation': 'defaultGradient 30s ease infinite',
    });
  }
  // 4th of july
  else if (date == '7-3') {
    $("body").css({
      'background': 'linear-gradient(101deg, #c40000, #c40000, #ffffff, #000299, #000299)',
      'background-size': '1000% 1000%',
      'animation': 'defaultGradient 30s ease infinite',
      '-webkit-animation': 'defaultGradient 30s ease infinite',
      '-moz-animation': 'defaultGradient 30s ease infinite',
    });
  }
  // halloween
  else if (date == '10-31') {
    $("body").css({
      'background': 'linear-gradient(101deg, #e57200, #7528d3, #33c651)',
      'background-size': '1000% 1000%',
      'animation': 'defaultGradient 30s ease infinite',
      '-webkit-animation': 'defaultGradient 30s ease infinite',
      '-moz-animation': 'defaultGradient 30s ease infinite',
    });
  }
  // christmas
  else if (date == '12-25') {
    $("body").css({
      'background': 'linear-gradient(101deg, #B3000C, #DC3D2A, #0DEF42, #00B32C)',
      'background-size': '1000% 1000%',
      'animation': 'defaultGradient 25s ease infinite',
      '-webkit-animation': 'defaultGradient 25s ease infinite',
      '-moz-animation': 'defaultGradient 25s ease infinite',
    });
  }
});







// end
