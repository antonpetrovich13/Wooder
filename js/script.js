
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
			const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

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
	burger.addEventListener('click', function () {
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



//АНИМАЦИЯ ПРИ СКРОЛЛЕ
/*const animItems = document.querySelectorAll('._anim-items');

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
	}, 300);
}
*/
/*
//ВЫПАДАЮЩЕЕ МЕНЮ
let user = document.querySelector(".user__wrapper");
let drop = document.querySelector(".drop-down");
user.addEventListener("click", function (e) {
	drop.classList.toggle("_active");
});

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.user')) {
		drop.classList.remove("_active");
	}
});
*/








/*
//СЛАЙДЕР QUOTES
let quotes = new Swiper('.quotes__slider', {
	speed: 800,
	loop: true,
	effect: 'flip',
	navigation: {
		nextEl: '.quotes__arrow',
	},
});

let anim = document.querySelector(".quotes__bottom");
anim.addEventListener("click", function () {
	let arrow = document.querySelector(".quotes__img");
	arrow.classList.add('_active');
})

anim.addEventListener("transitionend", function () {
	let arrow = document.querySelector(".quotes__img");
	arrow.classList.remove('_active');
})
*/


/*
// ВАЛИДАЦИЯ ФОРМЫ

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);
	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);
		let formData = new FormData(form);

		if (error === 0) {
			form.classList.add('_sending');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				alert(result.message);
				form.reset();
				form.classList.remove('_sending');
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		} else {
			alert('Заполните обязательные поля');
		}
	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);
			if (input.value === '') {
				formAddError(input);
				error++;
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}

	//Функция теста телефона
	function phoneTest(input) {
		return !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(input.value);
	}
});
*/

