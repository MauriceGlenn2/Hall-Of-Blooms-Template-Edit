document.addEventListener('DOMContentLoaded', function() {
const image = document.querySelector(".scroll__image--container img");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const images = [
  "./img/galleryphotos/IMG_0158.jpg",
  "./img/galleryphotos/IMG_0185.jpg",
  "./img/galleryphotos/IMG_0193_jpg.jpg",
  "./img/galleryphotos/IMG_0203.jpg",
  "./img/galleryphotos/IMG_0210.jpg",
  "./img/galleryphotos/IMG_0597.jpg",
  "./img/galleryphotos/IMG_0625.jpg",
  "./img/galleryphotos/IMG_1137.jpg",
  "./img/galleryphotos/IMG_1171.jpg",
  "./img/galleryphotos/IMG_1434.jpg",
  "./img/galleryphotos/IMG_1952.jpg",
  "./img/galleryphotos/IMG_7396.jpg",
  "./img/galleryphotos/IMG_7410.jpeg",
  "./img/galleryphotos/IMG_7411.jpg",
  "./img/galleryphotos/IMG_8374.jpg",
  "./img/galleryphotos/IMG_8450_jpg.jpg",
  "./img/galleryphotos/IMG_9423_jpg.jpg",
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
