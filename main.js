var elMenuBtn = document.querySelector(".js-menu-btn");
var elSiteHeader = document.querySelector(".site-header");
var elLogenWrapper = document.querySelector(".site-header__logen-wrapper");
console.log();

elMenuBtn.addEventListener("click", function(){
  elSiteHeader.classList.toggle("open-menu");
  document.body.classList.toggle("unscrollbody");
  elLogenWrapper.classList.toggle("logen-wrapper");
});