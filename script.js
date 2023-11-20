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
  

  function update(e){
    var x = e.clientX || e.touches[0].clientX;
    var y = e.clientY || e.touches[0].clientY;
  
    document.documentElement.style.setProperty('--cursorX', x + 'px');
    document.documentElement.style.setProperty('--cursorY', y + 'px');
  }
  
  document.addEventListener('mousemove', update);
  document.addEventListener('touchmove', update);
  