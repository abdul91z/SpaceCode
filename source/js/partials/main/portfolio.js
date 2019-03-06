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