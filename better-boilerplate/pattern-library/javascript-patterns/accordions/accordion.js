// Accordions
    var accordion__title = '.js-accordion__title';
    var accordion__content = '.js-accordion__content';

    $(accordion__content).slideUp();
    $('.is-active').parent().find(accordion__content).slideDown();

    $(accordion__title).click( function () {
	$(this).toggleClass('is-active');
	$(this).next(accordion__content).slideToggle();

	console.log($(this).hasClass('is-active'));

	if($(this).hasClass('is-active')) {
	    $(this).attr('aria-expanded', 'true');
	} else {
	    $(this).attr('aria-expanded', 'false');
	}

	return false;
    });
