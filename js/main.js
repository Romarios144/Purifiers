// Slider goods
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 118,

  navigation: {
    nextEl: ".custom__arrow-next",
    prevEl: ".custom__arrow-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 118,
    },
  },
});

// Slider reviews

const reviewsSlider = new Swiper(".reviews__slider", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 68,

  navigation: {
    nextEl: ".reviews__arrow-next",
    prevEl: ".reviews__arrow-prev",
  },

  breakpoints: {
    0: {
      spaceBetween: 15,
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 68,
    },
  },
});

// Accordion

document.querySelectorAll(".reviews__question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const currentItem = btn.closest(".reviews__item");

    document.querySelectorAll(".reviews__item").forEach((item) => {
      if (item !== currentItem) item.classList.remove("active");
    });

    currentItem.classList.toggle("active");
  });
});

// Input animation

const inputs = document.querySelectorAll(".request__form-input");

inputs.forEach((input) => {
  const field = input.parentElement;
  const defaultWidth = field.getAttribute("data-underline-width");

  function updateUnderline() {
    const value = input.value.trim();
    if (value) {
      field.style.setProperty("--underline-width", "80%");
    } else {
      field.style.setProperty("--underline-width", defaultWidth);
    }
  }

  input.addEventListener("input", updateUnderline);
  updateUnderline();
});
