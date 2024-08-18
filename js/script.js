var swiper = new Swiper(".promo__swiper", {
    cssMode: true,
    navigation: {
        nextEl: ".promo__swiper-button-next",
        prevEl: ".promo__swiper-button-prev",
    },
    pagination: {
        el: ".promo__swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,autoplay: {
        delay: 5000,
    },
    breakpoints: {
        991: {
            autoplay: false,
        },
    },
});

var swiper = new Swiper(".services__swiper", {
    slidesPerView: "auto",
    loopFillGroupWithBlank: false,
});

var swiper = new Swiper(".specialists__swiper", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loopFillGroupWithBlank: false,
});

var swiper = new Swiper(".clients__swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
        nextEl: ".clients__swiper-button-next",
        prevEl: ".clients__swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        630: {
            slidesPerView: "auto",
        },
        1200: {
            slidesPerView: 2,
        },
    },
});

var swiper = new Swiper(".materials__swiper", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loopFillGroupWithBlank: false,
});

var open = document.querySelector("#open");
var close = document.querySelector("#close");
var burger = document.querySelector("#burger");
var html = document.querySelector("html");


open.addEventListener("click", ()=> {
    burger.style.left = "0";
    html.style.overflow = 'hidden';
})

close.addEventListener("click", ()=> {
    burger.style.left = "-100%";
    html.style.overflow = 'scroll';
})