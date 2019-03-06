/*!
 * Item: Plex
 * Description: Responsive One Page Template
 * Author/Developer: Exill
 * Author/Developer URL: https://themeforest.net/user/exill
 * Version: v1.0.1
 * License: Themeforest Standard Licenses: http://themeforest.net/licenses
 */

(function($) {
  'use strict';
  /*=========================================
  =            Table of Contents            =
  =========================================*/
  /**
   * Preloader
   * Navbar
   * Home
   * About
   * Portfolio
   * Testimonials
   * Contact
   */

  /*=================================
  =            Preloader            =
  =================================*/
  $(window).on('load', function() {
    $('.preloader-icon').fadeOut(400);
    $('.preloader').delay(500).fadeOut('slow');
  });

  /*==============================
  =            Navbar            =
  ==============================*/
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

  /*============================
  =            Home            =
  ============================*/
  /* Variant manager */

  // If Video variant
  if ($('.home-area').hasClass('video-variant')) {
    $('#homeVideo').YTPlayer();
  }

  // If particles variant
  else if ($('.home-area').hasClass('particles-variant')) {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 50,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#999999"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#888888"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.7,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 3,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#999999",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }

  // If galaxy variant
  else if ($('.home-area').hasClass('galaxy-variant')) {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 100,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 4,
            "size_min": 0.3,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 600
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "bubble"
          },
          "onclick": {
            "enable": false,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 250,
            "size": 0,
            "duration": 2,
            "opacity": 0,
            "speed": 3
          },
          "repulse": {
            "distance": 400,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }

  // If snow variant
  else if ($('.home-area').hasClass('snow-variant')) {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 50,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#fff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 8,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 500,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 2
        },
        "move": {
          "enable": true,
          "speed": 3,
          "direction": "bottom",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "bubble"
          },
          "onclick": {
            "enable": false,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 0.5
            }
          },
          "bubble": {
            "distance": 400,
            "size": 4,
            "duration": 0.3,
            "opacity": 1,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }

  // If bubble variant
  else if ($('.home-area').hasClass('bubble-variant')) {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 4,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000"
          },
          "polygon": {
            "nb_sides": 6
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.2,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 90,
          "random": false,
          "anim": {
            "enable": true,
            "speed": 10,
            "size_min": 40,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 200,
          "color": "#ffffff",
          "opacity": 1,
          "width": 2
        },
        "move": {
          "enable": true,
          "speed": 8,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "grab"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }

  /* Animated heading text */

  // Set animation timing
  var animationDelay = 2500,
    // Clip effect 
    revealDuration = 660,
    revealAnimationDelay = 1500;

  initHeadline();

  function initHeadline() {
    // Initialise headline animation
    animateHeadline($('.cd-headline'));
  }

  function animateHeadline($headlines) {
    var duration = animationDelay;
    $headlines.each(function() {
      var headline = $(this);
      if (headline.hasClass('clip')) {
        var spanWrapper = headline.find('.cd-words-wrapper'),
          newWidth = spanWrapper.width() + 10;
        spanWrapper.css('width', newWidth);
      }

      //trigger animation
      setTimeout(function() {
        hideWord(headline.find('.is-visible').eq(0));
      }, duration);
    });
  }

  function hideWord($word) {
    var nextWord = takeNext($word);

    if ($word.parents('.cd-headline').hasClass('clip')) {
      $word.parents('.cd-words-wrapper').animate({
        width: '2px'
      }, revealDuration, function() {
        switchWord($word, nextWord);
        showWord(nextWord);
      });

    }
  }

  function showWord($word, $duration) {
    if ($word.parents('.cd-headline').hasClass('clip')) {
      $word.parents('.cd-words-wrapper').animate({
        'width': $word.width() + 10
      }, revealDuration, function() {
        setTimeout(function() {
          hideWord($word);
        }, revealAnimationDelay);
      });
    }
  }


  function takeNext($word) {
    return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
  }

  function takePrev($word) {
    return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
  }

  function switchWord($oldWord, $newWord) {
    $oldWord.removeClass('is-visible').addClass('is-hidden');
    $newWord.removeClass('is-hidden').addClass('is-visible');
  }


  /*=============================
  =            About            =
  =============================*/
  $('.about-area .about-video .video-part .media-lightbox').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-scale',
    removalDelay: 200,
    preloader: false,
    fixedContentPos: false
  });

  /*=================================
  =            Portfolio            =
  =================================*/
  /* Portfolio filter setup */

  var Shuffle = window.Shuffle;

  var shufflejs = function(element) {
    this.element = element;

    this.shuffle = new Shuffle(element, {
      itemSelector: '.js-item',
      sizer: element.querySelector('.sizer-element'),
    });

    this._activeFilters = [];

    this.addFilterButtons();
  };

  shufflejs.prototype.addFilterButtons = function() {
    var options = document.querySelector('.filter-control');

    if (!options) {
      return;
    }

    var filterButtons = Array.from(options.children);

    filterButtons.forEach(function(button) {
      button.addEventListener('click', this._handleFilterClick.bind(this), false);
    }, this);
  };

  shufflejs.prototype._handleFilterClick = function(evt) {
    var btn = evt.currentTarget;
    var btnGroup = btn.getAttribute('data-group');
    this.shuffle.filter(btnGroup);
  };


  window.shufflejs = new shufflejs(document.getElementById('shufflejs'));

  // Filter nav
  $('.portfolio-area .filter-control li').on('click', function() {
    $(this).addClass('tab-active').siblings().removeClass('tab-active');
  });

  // Portfolio item popup
  $('.portfolio-popup').magnificPopup({
    mainClass: 'mfp-scale-portfolio mfp-portfolio',
    type: 'inline',
    removalDelay: 120,
    overflowY: 'scroll',
    preloader: false,
    fixedContentPos: true,
    callbacks: {
      open: function() {
        $('.navbar.fixed-top').css('overflow-y', 'scroll');
        $('.lightbox-gallery').owlCarousel({
          loop: true,
          margin: 10,
          nav: false,
          items: 1,
          smartSpeed: 400
        });

      },
      close: function() {
        $('.navbar.fixed-top').css('overflow-y', 'hidden');
        $('.lightbox-gallery').trigger('destroy.owl.carousel');
      }
    }
  });

  /*====================================
  =            Testimonials            =
  ====================================*/
  $('.testimonials-area .owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
    smartSpeed: 400
  });

  /*===============================
  =            Contact            =
  ===============================*/
  $('#contact-form').on('submit', function(event) {
    var form = $(this);
    var submitBtn = form.find('#contact-submit');
    var feedbackErr = form.find('.feedback-error');
    event.preventDefault();
    // Waiting for the response from the server
    submitBtn.html('Wait...').addClass('wait').prop('disabled', true);
    setTimeout(function() {
      // Posts the Form's data to the server using Ajax
      $.ajax({
          url: form.attr('action'),
          type: 'POST',
          data: form.serialize(),
        })
        // Getting a response from the server
        .done(function(response) {
          // If the PHP file succeed sending the message
          if (response == 'success') {
            // Feedback to the user
            submitBtn.removeClass('wait').html('Success').addClass('success');
            setTimeout(function() {
              submitBtn.html('Submit').removeClass('success').prop('disabled', false);
            }, 6000);
            // Clears the Form
            form[0].reset();
            // If something is wrong
          } else {
            // Feedback to the user
            submitBtn.removeClass('wait').html('Error').addClass('error');
            feedbackErr.fadeIn(200);
            setTimeout(function() {
              submitBtn.html('Submit').removeClass('error').prop('disabled', false);
              feedbackErr.fadeOut(200);
            }, 6000);
          }
        });
    }, 1000);
  });

}(jQuery));