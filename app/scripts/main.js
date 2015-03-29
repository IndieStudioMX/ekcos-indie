'use strict';

(function () {
  $('.carousel').carousel({
      interval: 4000
  });

  $('#overlayl').on('mouseover', function(){
    $('.hidden-img-l').stop(true, false).animate({ width: '40%' }, 'slow');
  });

  $('#overlayl').on('mouseout', function(){
    $('.hidden-img-l').stop(true, false).animate({ width: '0%' }, 'slow');
  });

  $('#overlayr').on('mouseover', function(){
    $('.hidden-img-r').stop(true, false).animate({ width: '54%' }, 'slow');
  });

  $('#overlayr').on('mouseout', function(){
    $('.hidden-img-r').stop(true, false).animate({ width: '0%' }, 'slow');
  });
})();