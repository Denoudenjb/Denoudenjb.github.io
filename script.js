$(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop();
  
    $('.right-subdiv').each(function() {
      var top = $(this).offset().top,
          bottom = top + $(this).outerHeight();
  
      if (cur_pos >= top && cur_pos <= bottom) {
        $('#left-navdiv a').removeClass('active');
        $('#left-navdiv a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
    });
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll(".right-subdiv li");
    listItems.forEach(function(item) {
      item.addEventListener("click", function() {
        window.location.href = "https://www.airforce.com/careers/logistics-and-administration/knowledge-operations-management";
      });
    });
  });
  

  import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

  neonCursor({
    el: document.getElementById('app'),
    shaderPoints: 16,
    curvePoints: 80,
    curveLerp: 0.5,
    radius1: 5,
    radius2: 30,
    velocityTreshold: 10,
    sleepRadiusX: 100,
    sleepRadiusY: 100,
    sleepTimeCoefX: 0.0025,
    sleepTimeCoefY: 0.0025
  })