window.addEventListener("DOMContentLoaded", () => {
   const menuBtn = document.querySelector(".menuBtn");
   const navMenu = document.querySelector("#menu");
   const logo = document.querySelector(".nav_logo");
   const topNavSwitch = document.querySelector(".topNavSwitch");
   const scrollDown = document.querySelector(".scrollDown");
   const main = document.querySelector("main");

   const save = topNavSwitch.innerHTML;
   menuBtn.addEventListener("click", () => {
      if (!menuBtn.classList.contains("open")) {
         menuBtn.classList.add("open");
         navMenu.classList.add("active_nav");
         document.body.classList.add("lock");
         topNavSwitch.innerHTML = "";
         topNavSwitch.insertAdjacentHTML("afterbegin", logo.innerHTML)
      } else {
         menuBtn.classList.remove("open");
         navMenu.removeAttribute("class");
         document.body.classList.remove("lock");
         topNavSwitch.innerHTML = "";
         topNavSwitch.insertAdjacentHTML("afterbegin", save);
      }
   })

   try {
      scrollDown.addEventListener("click", () => {
         window.scrollTo({
            behavior: "smooth",
            top: main.offsetTop
         });
      });
   } catch {}

   try {
      new Swiper('.our_team__slider.swiper-container', {
         navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
         },
         loop: true,

         breakpoints: {
            0: {
               slidesPerView: 1,
               spaceBetween: 20,
            },
            600: {
               slidesPerView: 2,
               spaceBetween: 20
            },
            1024: {
               slidesPerView: 3,
               spaceBetween: 35
            }
         }
      });
   } catch {}

   try {

      const tabBtns = document.querySelectorAll(".tab_header__btn")
      const tabContents = document.querySelectorAll(".tab_body__content")

      function tabs(tabBtn, tabContent) {
         tabBtn[0].classList.add("tab_header__btn-active")
         tabContent[0].classList.add("tab_body__content-active")

         for (let i = 0; i < tabBtn.length; i++) {
            tabBtn[i].addEventListener("click", () => {
               for (let j = 0; j < tabBtn.length; j++) {
                  tabBtn[j].classList.remove("tab_header__btn-active")
                  tabContent[j].classList.remove("tab_body__content-active")
               }
               tabBtn[i].classList.add("tab_header__btn-active")
               tabContent[i].classList.add("tab_body__content-active")
            })
         }
      }

      tabs(tabBtns, tabContents)
      // const tabBtns = document.querySelectorAll(".tab_header__btn")
      // const tabContents = document.querySelectorAll(".tab_body__content")

      // tabBtns[0].classList.add("tab_header__btn-active");
      // tabContents[0].classList.add("tab_body__content-active");

      // for (let i = 0; i < tabBtns.length; i++) {
      //    tabBtns[i].addEventListener("click", () => {
      //       for (let j = 0; j < tabBtns.length; j++) {
      //          tabBtns[j].classList.remove("tab_header__btn-active");
      //          tabContents[j].classList.remove("tab_body__content-active")
      //       }
      //       tabBtns[i].classList.add("tab_header__btn-active");
      //       tabContents[i].classList.add("tab_body__content-active")

      //    })
      // }
   } catch {}
})