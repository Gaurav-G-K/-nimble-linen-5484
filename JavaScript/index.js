const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imageContainerEl = document.querySelector(".slider-images");
let currentImg = 1;
let timeout;
nextEl.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});
prevEl.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});
updateImg();
function updateImg() {
  if (currentImg > 3) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgsEl.length;
  }
  imageContainerEl.style.transform = `translateX(-${(currentImg - 1) *36}%)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}
