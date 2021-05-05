// АНИМАЦИЯ ПРИ СКРОЛЛЕ ДЛЯ HEADER
$(document).scroll(function (e) {
	$(window).scrollTop() > 50 ? $('.header__wrapper').addClass('color') : $('.header__wrapper').removeClass('color');
});