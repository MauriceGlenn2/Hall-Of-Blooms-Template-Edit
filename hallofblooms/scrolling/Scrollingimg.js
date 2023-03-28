document.addEventListener('DOMContentLoaded', function() {
const image = document.querySelector(".scroll__image--container img");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const images = [
  "./img/ef2.jpg",
  "./img/ef3.jpg",
  "./img/ef4.jpg",
];
let index = 0;

function changeImage() {
  image.setAttribute("src", images[index]);
}

function showPreviousImage() {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  changeImage();
}

function showNextImage() {
  index++;
  if (index > images.length - 1) {
    index = 0;
  }
  changeImage();
}

leftArrow.addEventListener("click", showPreviousImage);
rightArrow.addEventListener("click", showNextImage);
})
