const slider = document.querySelector(".slider");
const items = document.querySelectorAll(".item");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let currentIndex = 0;

function updateSlider() {
  items.forEach((item, index) => {
    item.style.opacity = index === currentIndex ? "1" : "0";
  });
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateSlider();
});

// Auto-slide every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  updateSlider();
}, 5000);

updateSlider(); // Initialize the slider
