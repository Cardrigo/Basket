const menuBurger = document.querySelector(".header__navigation");
const menuBtn = document.querySelector(".nav__icon");
const body = document.body;
window.addEventListener("click", function (e) {
  if (e.target.classList.contains("nav__icon") || e.target.closest(".nav__icon")) {
    menuBurger.classList.toggle("active");
    if (body.classList.contains("lock")) {
      body.classList.remove("lock");
    } else {
      body.classList.add("lock");
    };
  }else if (e.target.classList.contains("link") && menuBurger.classList.contains("active")) {
    menuBurger.classList.remove("active");
    body.classList.remove("lock");
  };
});

window.addEventListener("click", function (e) {
  let data = e.target.dataset.action;
  let counter;
  if (data === "minus" || data === "plus") {
    const item = e.target.closest(".product__item");
    counter = item.querySelector("[data-counter]");
  }
  if (data === "minus") {
    if (counter.innerText > 0) {
      counter.innerText = --counter.innerText;
    }
  };
  if (data === "plus") {
    counter.innerText = ++counter.innerText;
  };
});

var menu = ['Для салата', 'Итальянское', 'Для мяса', 'Восточное']
var swiper1 = new Swiper(".header__swiper", {
  mouseboard: true,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (menu[index]) + '</span>';
    },
  },
  // keyboard: true,
});
var swiper2 = new Swiper(".header__cont", {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1500: {
      slidesPerView: 4,

    },
    1200: {
      slidesPerView: 3,

    },
    701: {
      slidesPerView: 2,

    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mouseboard: true,
  // keyboard: true,
});
var swiper2 = new Swiper(".reviews", {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1500: {
      slidesPerView: 3,

    },
    1400: {
      slidesPerView: 3.1,

    },
    900: {
      slidesPerView: 2.9,
    },
    720: {
      slidesPerView: 2.3,
    },
    520: {
      slidesPerView: 1.8,
    },
    401: {
      slidesPerView: 1.5,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mouseboard: true,
  // keyboard: true,
});


const anchors = document.querySelectorAll(".link");
anchors.forEach(anchor => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const blockID = anchor.getAttribute('href').substring(1);
    console.log(blockID);
    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  });
});