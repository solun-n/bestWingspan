let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-new-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".new__btn-next"
    }
  });