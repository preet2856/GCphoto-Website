var menu = document.querySelector(".menu");
var close = document.querySelector(".ri-close-line");
var nav = document.querySelector(".responsive-nav");

menu.addEventListener("click", function () {
	nav.style.right = "0%";
})

close.addEventListener("click", function () {
	nav.style.right = "-100%";
})

var swiper = new Swiper(".mySwiper", {
	effect: "cards",
	grabCursor: true,
	pagination: {
		el: ".swiper-pagination",
	},
	navigation: {
		nextEl: ".swiper-button-n",
		prevEl: ".swiper-button-p",
	},
});
