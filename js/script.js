!function () { "use strict"; function o() { var o = window, t = document; if (!("scrollBehavior" in t.documentElement.style && !0 !== o.__forceSmoothScrollPolyfill__)) { var l, e = o.HTMLElement || o.Element, r = 468, i = { scroll: o.scroll || o.scrollTo, scrollBy: o.scrollBy, elementScroll: e.prototype.scroll || n, scrollIntoView: e.prototype.scrollIntoView }, s = o.performance && o.performance.now ? o.performance.now.bind(o.performance) : Date.now, c = (l = o.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(l) ? 1 : 0); o.scroll = o.scrollTo = function () { void 0 !== arguments[0] && (!0 !== f(arguments[0]) ? h.call(o, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : o.scrollX || o.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : o.scrollY || o.pageYOffset) : i.scroll.call(o, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : o.scrollX || o.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : o.scrollY || o.pageYOffset)) }, o.scrollBy = function () { void 0 !== arguments[0] && (f(arguments[0]) ? i.scrollBy.call(o, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : h.call(o, t.body, ~~arguments[0].left + (o.scrollX || o.pageXOffset), ~~arguments[0].top + (o.scrollY || o.pageYOffset))) }, e.prototype.scroll = e.prototype.scrollTo = function () { if (void 0 !== arguments[0]) if (!0 !== f(arguments[0])) { var o = arguments[0].left, t = arguments[0].top; h.call(this, this, void 0 === o ? this.scrollLeft : ~~o, void 0 === t ? this.scrollTop : ~~t) } else { if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted"); i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop) } }, e.prototype.scrollBy = function () { void 0 !== arguments[0] && (!0 !== f(arguments[0]) ? this.scroll({ left: ~~arguments[0].left + this.scrollLeft, top: ~~arguments[0].top + this.scrollTop, behavior: arguments[0].behavior }) : i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop)) }, e.prototype.scrollIntoView = function () { if (!0 !== f(arguments[0])) { var l = function (o) { for (; o !== t.body && !1 === (e = p(l = o, "Y") && a(l, "Y"), r = p(l, "X") && a(l, "X"), e || r);)o = o.parentNode || o.host; var l, e, r; return o }(this), e = l.getBoundingClientRect(), r = this.getBoundingClientRect(); l !== t.body ? (h.call(this, l, l.scrollLeft + r.left - e.left, l.scrollTop + r.top - e.top), "fixed" !== o.getComputedStyle(l).position && o.scrollBy({ left: e.left, top: e.top, behavior: "smooth" })) : o.scrollBy({ left: r.left, top: r.top, behavior: "smooth" }) } else i.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]) } } function n(o, t) { this.scrollLeft = o, this.scrollTop = t } function f(o) { if (null === o || "object" != typeof o || void 0 === o.behavior || "auto" === o.behavior || "instant" === o.behavior) return !0; if ("object" == typeof o && "smooth" === o.behavior) return !1; throw new TypeError("behavior member of ScrollOptions " + o.behavior + " is not a valid value for enumeration ScrollBehavior.") } function p(o, t) { return "Y" === t ? o.clientHeight + c < o.scrollHeight : "X" === t ? o.clientWidth + c < o.scrollWidth : void 0 } function a(t, l) { var e = o.getComputedStyle(t, null)["overflow" + l]; return "auto" === e || "scroll" === e } function d(t) { var l, e, i, c, n = (s() - t.startTime) / r; c = n = n > 1 ? 1 : n, l = .5 * (1 - Math.cos(Math.PI * c)), e = t.startX + (t.x - t.startX) * l, i = t.startY + (t.y - t.startY) * l, t.method.call(t.scrollable, e, i), e === t.x && i === t.y || o.requestAnimationFrame(d.bind(o, t)) } function h(l, e, r) { var c, f, p, a, h = s(); l === t.body ? (c = o, f = o.scrollX || o.pageXOffset, p = o.scrollY || o.pageYOffset, a = i.scroll) : (c = l, f = l.scrollLeft, p = l.scrollTop, a = n), d({ scrollable: c, method: a, startTime: h, startX: f, startY: p, x: e, y: r }) } } "object" == typeof exports && "undefined" != typeof module ? module.exports = { polyfill: o } : o() }();

//НАВИГАЦИЯ
const menuLinks = document.querySelectorAll(".lnk");
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const goToBlock = document.querySelector(menuLink.dataset.goto);
			const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__wrapper').offsetHeight;

			if (burger.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				burger.classList.remove('_active');
				menu.classList.remove('_active');
			}

			window.scrollTo({
				top: goToBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

//МЕНЮ-БУРГЕР
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const text = document.querySelector('.header__text');
if (burger) {
	burger.addEventListener('click', function (event) {
		document.body.classList.toggle('_lock');
		burger.classList.toggle('_active');
		menu.classList.toggle('_active');
	});
	text.addEventListener('click', function () {
		document.body.classList.toggle('_lock');
		burger.classList.toggle('_active');
		menu.classList.toggle('_active');
	})
}


//ЗАКРЫТИЕ БУРГЕРА ПРИ КЛИКЕ ЗА ЕГО ПРЕДЕЛАМИ
document.addEventListener('click', function (event) {
	if (burger.className.includes('_active')) {
		closeBurgerMenu();
	}

	function closeBurgerMenu() {
		if (event.target != burger && event.target != text && event.target != menu) {
			burger.classList.toggle('_active');
			menu.classList.toggle('_active');
			document.body.classList.toggle('_lock');
		}
	};
})


//ПОКАЗ ПЛАШКИ ДЛЯ HEADER
document.addEventListener('scroll', function (event) {
	const headerElement = document.querySelector('.header__wrapper');

	if (window.pageYOffset > headerElement.offsetHeight) {
		headerElement.classList.add('_color');
	} else {
		headerElement.classList.remove('_color');
	}
})


//СЛАЙДЕР MAIN
let swiper = new Swiper('.main__slider', {
	speed: 800,
	direction: 'vertical',
	autoplay: true,
	mousewheel: true,
	loop: true,
	pagination: {
		el: ".main__pagination",
		clickable: true,
	},
});


//ИЗМЕНЕНИЕ BACKGROUND ДЛЯ ИНФОРМАЦИОННОЙ ИКОНКИ
const infoElement = document.querySelector('.header__info-text');
const mainElement = document.querySelector('.main');

document.addEventListener('scroll', function (event) {
	if (window.pageYOffset > mainElement.offsetHeight - (document.querySelector('.header').offsetHeight * 2)) {
		infoElement.lastElementChild.style.background = '#6d5d41';
	} else {
		infoElement.lastElementChild.style.background = '';
	}
})


//СМЕНА ЯЗЫКА
document.addEventListener('click', function (event) {

	if (event.target.className === 'select__option') {
		activeLink(event.target);
	}

	function activeLink(elem) {
		if (elem.getAttribute('data-value') == 'ru') {
			window.location.href = 'index_ru.html'
		} else {
			window.location.href = 'index.html'
		}
	}

})

//СМЕНА ЦИФРЫ ПРИ СМЕНЕ СЛАЙДА СЛАЙДЕРА
const mainSlide = document.querySelectorAll('.main__slide');
const mainNumber = document.querySelector('.main__number');

for (let slide of mainSlide) {

	setInterval(function () {
		if (slide.className.includes('active')) {

			let imageNumber = slide.getAttribute('data-swiper-slide-index');

			if (imageNumber < 10) {
				mainNumber.innerHTML = '0' + ++imageNumber;
			} else {
				mainNumber.innerHTML = imageNumber;
			}
		}
	}, 1)
}

//ОТМЕНА ПЕРЕХОДА ПО ССЫЛКЕ ПРИ КОПИРОВАНИИ URL
const mainShare = document.querySelector('.main__share');

mainShare.onclick = function (event) {
	event.preventDefault();
}

//АНИМАЦИЯ ПРИ СКРОЛЛЕ
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_animation');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_animation');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 500);
}

















