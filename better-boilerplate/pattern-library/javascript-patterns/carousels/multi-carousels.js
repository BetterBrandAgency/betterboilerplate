// Multi Carousel
	const multiCarousels = $('.js-multi-carousel');

	// Generate Slider Objects
		$(multiCarousels).each(function() {

			var currentSlide = 0;

			// Init Sliders and set options
				const carousel = new Siema({
					selector: this,
					duration: 200,
					easing: 'ease-out',
					perPage: 1,
					startIndex: 0,
					draggable: true,
					threshold: 20,
					loop: true,
  					perPage: {
  						800: 1,
  						1200: 2,
  						1600: 3
  					}
				});

			// Next and Previous Navigation
				const carousel_prev = $(this).parent().find('.js-carousel__prev');
				const carousel_next = $(this).parent().find('.js-carousel__next');

				$(carousel_prev).click(function() {
					carousel.prev();
				});

				$(carousel_next).click(function() {
					carousel.next();
				});

		});