// get the list of navigation links and sections
const navLinks = document.querySelectorAll('.Sidenavigation a');
const sections = document.querySelectorAll('.ContentSection');

// add event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    // prevent default link behavior
    event.preventDefault();

    // remove active class from all navigation links
    navLinks.forEach(link => link.classList.remove('active'));

    // add active class to clicked link
    this.classList.add('active');

    // get the href of the clicked link
    const href = this.getAttribute('href');

    // get the corresponding section using the href
    const section = document.querySelector(href);

    // scroll to the corresponding section
    section.scrollIntoView({
      behavior: 'smooth'
    });

    // update the URL with the current anchor
    history.pushState(null, null, href);
  });
});

// debounce function
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this,
      args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// create IntersectionObserver instance
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // remove active class from all navigation links
      navLinks.forEach(link => link.classList.remove('active'));

      // get the corresponding link using the ID
      const id = entry.target.getAttribute('id');
      const link = document.querySelector(`.Sidenavigation a[href="#${id}"]`);

      // add active class to corresponding link
      link.classList.add('active');

      // update the URL with the current anchor
      history.pushState(null, null, `#${id}`);
    }
  });
}, {
  rootMargin: '0px',
  threshold: 0.5
});

// observe each section
sections.forEach(section => {
  observer.observe(section);
});

// listen for scroll events on the window
window.addEventListener('scroll', debounce(() => {
  observer.disconnect();
  sections.forEach(section => {
    observer.observe(section);
  });
}));


/// / test test teste testestet