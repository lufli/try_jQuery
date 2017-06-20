$(document).ready(() => {
  const speed = 500;
  //console.log(speed);
  let autoswitch = true;
  const autoswitch_speed = 4000;

  $('.slide').first().addClass('active');

  $('.slide').hide();

  $('.active').show();

  $('#next').on('click', () => {
    $('.active').removeClass('active').addClass('oldActiv');
    $('.oldActiv').is(':last-child')? $('.slide').first().addClass('active') : $('.oldActiv').next().addClass('active');
    fadeOld();
  });

  $('#prev').on('click', () => {
    $('.active').removeClass('active').addClass('oldActiv');
    $('.oldActiv').is(':first-child')? $('.slide').last().addClass('active') : $('.oldActiv').prev().addClass('active');
    fadeOld();
  });

  if(autoswitch === true) {
    setInterval(() => {
      $('.active').removeClass('active').addClass('oldActiv');
      $('.oldActiv').is(':last-child')? $('.slide').first().addClass('active') : $('.oldActiv').next().addClass('active');
      fadeOld();
    }, autoswitch_speed);
  }

  function fadeOld() {
    $('.oldActiv').removeClass('oldActiv');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
  }
})
