// Carousels
	const carousels = $('.js-carousel');

	// Generate Slider Objects
		$(carousels).each(function() {

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
					onInit: activePagination,
  					onChange: activePagination
				});

			// Slider autoplay
				setInterval(() => carousel.next(), 5000);

			// Next and Previous Navigation
				const carousel_prev = $(this).parent().find('.js-carousel__prev');
				const carousel_next = $(this).parent().find('.js-carousel__next');

				$(carousel_prev).click(function() {
					carousel.prev();
				});

				$(carousel_next).click(function() {
					carousel.next();
				});

			// Pagiation
				Siema.prototype.addPagination = function() {

					const pagination_container = $(this).parent().find('.js-carousel-pagination');

					for (let i = 0; i < carousel.innerElements.length; i++) {
						const button = document.createElement('button');
						button.className = 'carousel__pagination-button carousel__pagination-button--' + i;
						button.textContent = i + 1;

						if(i === 0) {
							button.className ='carousel__pagination-button carousel__pagination-button--' + i + ' is-active';
						}

						$(button).click(function() {
							carousel.goTo(i);
							currentSlide = i;
							$(this).parent().find('.carousel__pagination-button').removeClass('is-active');
							$(this).parent().find('.carousel__pagination-button--' + currentSlide).addClass('is-active');
						});

						this.selector.parentElement.lastElementChild.appendChild(button);

					}
				}

			// Active States for Pagination
				function activePagination() {

					currentSlide = this.currentSlide;
					$(this.selector).parent().find('.carousel__pagination-button').removeClass('is-active');
					$(this.selector).parent().find('.carousel__pagination-button--' + currentSlide).addClass('is-active');

				}

			// Trigger pagination creator
				carousel.addPagination();

		});