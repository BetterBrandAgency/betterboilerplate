$(document).ready(function() {

	// Select Menus
		$('select').niceSelect();

	// Carousel
		const carousels = $('.js-carousel');

		$(carousels).each(function() {

			// Init Sliders
				const carousel = new Siema({
					selector: this,
					duration: 200,
					easing: 'ease-out',
					perPage: 1,
					startIndex: 0,
					draggable: true,
					threshold: 20,
					loop: true
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

			// Pagiation
				const pagiation_count = $(this).children().children().length;

				for (let i = 0; i < pagiation_count; i++) {

					const pagination_container = $(this).parent().find('.js-carousel-pagiation');

					const button = document.createElement('button');

					$(button).html(i + 1);

					$(button).click(function() {
						carousel.goTo(i);
					});

					$(pagination_container).append(button);

				}

				// Add a function that generates pagination to prototype

				// Siema.prototype.addPagination = function() {
				// 	var _this = this;

				// 	for (let i = 0; i < this.innerElements.length; i++) {
				// 		const btn = document.createElement('button');
				// 		btn.textContent = i;
				// 			console.log(i);
				// 		btn.addEventListener('click', function () {


				// 	      return _this.goTo(i);
				// 	    });

				// 		this.selector.appendChild(btn);
				// 	}
				// }

				// // Trigger pagination creator
				// carousel.addPagination();

		});

});