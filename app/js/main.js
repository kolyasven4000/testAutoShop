var slide1 = document.querySelector(".slide-1");
var slide2 = document.querySelector(".slide-2");
var slideTextContent = document.querySelector(".slide__product_content");
var slideProductButton = document.querySelector(".slide__product_button");

var arrowLeft = document.querySelector(".slider__arrow-left");
var arrowRight = document.querySelector(".slider__arrow-right");

var menu = document.querySelector(".mobile-menu");
var menuShow = document.querySelector(".header__menu-toggle");


var subMenu = menu.querySelector(".sub-menu");
var subMenuShow = menu.querySelector(".mobile-menu__item--drop");
var subMenuLink = menu.querySelector(".mobile-menu__link-drop");


(function(){
arrowLeft.addEventListener("click", function(event){
		event.preventDefault();
		slide1.classList.toggle("slide-hidden");
		slide2.classList.toggle("slide-hidden");

		
});
arrowRight.addEventListener("click", function(event){
		event.preventDefault();
		slide1.classList.toggle("slide-hidden");
		slide2.classList.toggle("slide-hidden");	
});

subMenuShow.addEventListener("click", function(event){
		event.preventDefault();
		subMenu.classList.toggle("menu-show");	
});

menuShow.addEventListener("click", function(event){
		event.preventDefault();
		menu.classList.toggle("menu-show");	
});

subMenuShow.addEventListener("click", function(event){
		event.preventDefault();
		subMenuLink.classList.toggle("mobile-menu__link--active");	
});

slideProductButton.addEventListener("click", function(event){
		event.preventDefault();
		slideTextContent.classList.toggle("show");	
			
});
})();
(function(){
var mql = window.matchMedia("(min-width: 768px)");
//убираю ненужные классы на мидл ширине окна
function delForWidth(mql){
  if (mql.matches) {
	  menu.classList.remove("menu-show");
	  
	}
}
mql.addListener(delForWidth);
})();