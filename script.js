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
  

  const cursor = document.querySelector('#cursor');

  document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
  })

  document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
      cursor.classList.remove("expand");
    }, 500)
  })