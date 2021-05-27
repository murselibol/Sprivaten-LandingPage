$('.icon-menu-switch').on('click', function () {
  if ($('.navigation').is('.menu-show')) {
    $('.navigation').removeClass('menu-show')

    $('.hero').removeClass('hero-color-ebony')

    $('html, body').css({
      overflow: 'auto',
      height: 'auto'
    })
  } else {
    $('.navigation').addClass('menu-show')

    $('.hero').addClass('hero-color-ebony')

    $('html, body').css({
      overflow: 'hidden',
      height: '100%'
    })
  }
})
