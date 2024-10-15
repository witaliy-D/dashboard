(() => {
  // src/components/tab/tab.js
  var tabs = document.querySelectorAll(".tabs__btn");
  var tabsContent = document.querySelectorAll(".tabs__body");
  if (tabsContent.length > 0 || tabs.length > 0) {
    let hideTabContent = function() {
      tabsContent.forEach((item) => {
        item.classList.remove("active");
      });
      tabs.forEach((item) => {
        item.classList.remove("active");
      });
    }, showTabContent = function(i = 0) {
      tabsContent[i].classList.add("active");
      tabs[i].classList.add("active");
    };
    hideTabContent();
    showTabContent();
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        hideTabContent();
        showTabContent(index);
      });
    });
  }

  // src/template/header/header.js
  var navBurger = document.querySelector(".header__toggle");
  var nav = document.querySelector(".nav");
  var close = document.querySelector(".nav__close");
  navBurger.addEventListener("click", () => {
    nav.classList.add("nav--open");
  });
  nav.addEventListener("click", (e) => {
    if (nav.classList.contains("nav--open") && e.currentTarget === e.target) {
      nav.classList.remove("nav--open");
    }
  });
  close.addEventListener("click", () => {
    nav.classList.remove("nav--open");
  });
})();
