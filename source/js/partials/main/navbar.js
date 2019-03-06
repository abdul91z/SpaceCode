// Navbar's sidebar toggler button
// These elements gets hidden if the user clicks outside of them
$(document).on('mouseup', function(event) {
  if ($('#navbarSupportedContent').hasClass('show')) {
    // The mobile version of Bootstrap's Navbar Dropdown
    var navbarToggler = $('.navbar-toggler');
    if (!navbarToggler.is(event.target) && navbarToggler.has(event.target).length === 0) {
      navbarToggler.trigger('click');
    }
  }
});

// Triggers the second style of the navbar if the user scrolls down
$(window).on('scroll', function() {
  var navbar = '#navbar';
  if ($(navbar).offset().top > 75) {
    $(navbar).addClass('scrolled');
  } else {
    $(navbar).removeClass('scrolled');
  }
});

// Scrolling animation if the user clicks on a Hash link that has 'data-scroll' attribute
$(document).on('click', 'a[data-scroll][href^="#"]', function(e) {
  var navbarHeight = $('#navbar').height();
  var id = $(this).attr('href');
  var $id = $(id);
  if ($id.length === 0) {
    return;
  }
  e.preventDefault();
  $('body, html').animate({
    scrollTop: $id.offset().top - navbarHeight
  }, 750);
});
// Navbar Scrollspy
$('#navbar').onePageNav({
  currentClass: 'active',
  navItems: '.nav-item > .nav-link',
  scrollSpeed: 500, // Scroll speed
  scrollThreshold: 0.5, // Scroll speed when nearing the beginning or end of the section
  easing: 'swing'
});