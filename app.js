const carouselArray = [...document.querySelectorAll(".carousel-img")];
const carouselArrayDesktop = [
  ...document.querySelectorAll(".carousel-img-desktop"),
];
//console.log(carouselArrayDesktop);
const thumbnailArray = [...document.querySelectorAll(".thumbnails img")];
console.log(thumbnailArray);

const prevBtn = document.querySelector(".prev-btn");
//console.log(prevBtn);
const nextBtn = prevBtn.nextElementSibling;
const hamburgerBtn = document.querySelector(".hamburger-icon");
const main = document.querySelector("main");
const imageContainerDesktop = document.querySelector(
  ".image-container-desktop"
);
const xBtn = document.querySelector(".x-btn");
const navDropdown = document.querySelector(".nav-dropdown");
const navLinksDesktop = [
  ...document.querySelectorAll(".nav-bar-desktop .nav-links li a"),
];
const atcOverlay = document.querySelector(".add-to-cart-overlay");
//console.log(atcOverlay);
const cartEmptyOverlay = document.querySelector(".cart-empty");
const atcBtn = document.querySelector(".add-to-cart-btn");
const cartNumberM = document.querySelector(".cart-number-btn-m");
const cartNumberD = document.querySelector(".cart-number-btn-d");
const cartOverlayNumber = document.querySelector(".cart-overlay-number");
const atcContentBox = document.querySelector(".atc-content-box");
const checkoutBtn = document.querySelector(".checkout-btn");
//console.log(navLinksDesktop);
const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const numberOfGoods = document.querySelector(".number");
const lightbox = document.getElementById("lightbox");
//console.log(lightbox);
const lightboxCarouselArray = [
  ...document.querySelectorAll(".carousel-img-lightbox"),
];
//console.log(lightboxCarouselArray);
const xBtnWhite = document.querySelector(".x-btn-white");
//console.log(xBtnWhite);
const lightboxPrevBtn = document.querySelector(".lightbox-prev-btn");
//console.log(prevBtn);
const lightboxNextBtn = lightboxPrevBtn.nextElementSibling;
const overlay = document.querySelector(".overlay");

let index = 0;
let lightboxIndex = 0;
let counter = 0;

//  FUNCTIONS
const showImgsMobile = () => {
  carouselArray.forEach((img) => {
    img.classList.remove("active");
  });
  carouselArray[index].classList.add("active");
};

const showImgsLightbox = () => {
  lightboxCarouselArray.forEach((img) => {
    //img.classList.remove("active");
    img.style.display = "block";
  });
  lightboxCarouselArray[lightboxIndex].style.display = "none";
};

//  EVENT LISTENERS

//these must change the number in the basket in the nav
plusBtn.addEventListener("click", () => {
  //if the "your cart is empty note is up - remove it"
  if ((cartEmptyOverlay.style.display = "block")) {
    cartEmptyOverlay.style.display = "none";
  }

  if (counter >= 0) {
    counter++;
    atcOverlay.style.display = "block";
    cartNumberM.classList.add("active");
    cartNumberD.classList.add("active");
    cartNumberD.innerHTML = counter;
    cartNumberM.innerHTML = counter;
  }
  //leave this in
  numberOfGoods.innerHTML = counter;
  cartNumberD.innerHTML = counter;
  cartNumberM.innerHTML = counter;
  cartOverlayNumber.innerHTML = counter;

  //BUT IF THE USED COMES BACK TO ADD AN ITEM AGAIN IT GOES TO 2
  //INSTEAD OF 1   FIX THIS!!!
});

minusBtn.addEventListener("click", () => {
  //if the counter is <=0 remove the content-box and
  //do innerHTML of Your cart is empty.
  if (counter <= 1) {
    numberOfGoods.innerHTML = "0";
    cartNumberD.classList.remove("active");
    cartNumberM.classList.remove("active");
    atcContentBox.classList.remove("active");

    atcContentBox.innerHTML = "Your cart is empty.";
    checkoutBtn.style.display = "none";
    atcContentBox.style.margin = "5rem auto";
    //location.reload(); no b/c then it there are items in the cart
    //the atc gets removed and reset
  } else {
    counter = counter - 1;
    cartNumberD.classList.add("active");
    cartNumberM.classList.add("active");
    cartNumberD.innerHTML = counter;
    cartNumberM.innerHTML = counter;
    numberOfGoods.innerHTML = counter;
    cartOverlayNumber.innerHTML = counter;
  }
});

atcBtn.addEventListener("click", () => {
  //if counter is 0 display - your cart is empty
  console.log(counter);
  if (counter === 0) {
    cartEmptyOverlay.style.display = "block";
  } else if ((cartEmptyOverlay.style.display = "block")) {
    cartEmptyOverlay.style.display = "none";
  } else {
    atcOverlay.style.display = "block";
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
});

console.log(overlay);

thumbnailArray.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    //if the overlay is already block - make it none
    /* if ((overlay.style.display = "block")) {
      overlay.style.display = "none";
    }*/
    //if the lightbox is already block - make it none
    /*if ((lightbox.style.display = "block")) {
      lightbox.style.display = "none";
    }*/
    lightbox.style.display = "block";
    overlay.style.display = "block";
  });
});

xBtnWhite.addEventListener("click", () => {
  //remove the  lightbox overlay
  lightbox.style.display = "none";
  overlay.style.backgroundColor = "transparent"; //none didn't work here
  //location.reload(); no b/c then it there are items in the cart
  //the atc gets removed and reset
});

hamburgerBtn.addEventListener("click", () => {
  navDropdown.style.display = "block";
  overlay.style.display = "block";
});

xBtn.addEventListener("click", () => {
  navDropdown.style.display = "none";
  overlay.style.display = "none";
});

nextBtn.addEventListener("click", () => {
  //we want to make the next index of the array - active
  nextBtn.style.color = "hsl(26, 100%, 55%)";
  prevBtn.style.color = "grey";
  index++;
  if (index >= carouselArray.length) {
    index = 0;
  }
  showImgsMobile();
});

prevBtn.addEventListener("click", () => {
  prevBtn.style.color = "hsl(26, 100%, 55%)";
  nextBtn.style.color = "grey";
  index--;
  if (index < 0) {
    index = carouselArray.length - 1;
  }
  showImgsMobile();
});

lightboxNextBtn.addEventListener("click", () => {
  //we want to make the next index of the array - active/display: block

  lightboxNextBtn.style.color = "hsl(26, 100%, 55%)";
  lightboxPrevBtn.style.color = "grey";
  lightboxIndex++;
  //console.log(lightboxIndex);
  if (lightboxIndex >= lightboxCarouselArray.length) {
    lightboxIndex = 0;
  }
  showImgsLightbox();
});

lightboxPrevBtn.addEventListener("click", () => {
  lightboxPrevBtn.style.color = "hsl(26, 100%, 55%)";
  lightboxNextBtn.style.color = "grey";
  lightboxIndex--;
  if (lightboxIndex < 0) {
    lightboxIndex = lightboxCarouselArray.length - 1;
  }
  showImgsLightbox();
});

//THINGS TO FIX:

//when user retries plus btn after clicking atc it gives 2 instead of 1
//maybe do a reset?
