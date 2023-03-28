const images = [
  "./img/bobar2.JPG",
  "./img/bobar3.jpg",
  "./img/bobar7.jpg",
  "./img/bobar6.jpg"
];

let currentIndex = 0;

function scrollImages() {
  const laughingImg = document.querySelector(".laughingimg");
  laughingImg.src = images[currentIndex];
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
}

setInterval(scrollImages, 3000);
