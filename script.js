// script.js

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

$(document).ready(function () {
  const cursor = document.querySelector('.cursor');
  const cursorInner = document.querySelector('.cursor-inner');

  document.addEventListener('mousemove', function (e) {
    const x = e.clientX;
    const y = e.clientY;

    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';

    cursorInner.style.left = x + 'px';
    cursorInner.style.top = y + 'px';
  });

  const handleMouseEnter = function () {
    cursor.style.width = '48px';
    cursor.style.height = '48px';
    cursorInner.style.width = '24px';
    cursorInner.style.height = '24px';
  };

  const handleMouseLeave = function () {
    cursor.style.width = '32px';
    cursor.style.height = '32px';
    cursorInner.style.width = '16px';
    cursorInner.style.height = '16px';
  };

  const links = document.querySelectorAll('a, button');

  links.forEach(function (link) {
    link.addEventListener('mouseenter', handleMouseEnter);
    link.addEventListener('mouseleave', handleMouseLeave);
  });
});
