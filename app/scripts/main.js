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

  var toggles = document.querySelectorAll(".cmn-toggle-switch");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");

      if(this.classList.contains('active') === true) {
        $('.mobile-submenu').css({
          left: 0 + 'vw',
          transition: '.4s ease-in'
        });
      }
      else {
        $('.mobile-submenu').css({
          left: -88 + 'vw'
        });
      }
    });
  }
})();