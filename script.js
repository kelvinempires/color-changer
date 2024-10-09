colorBoxEl = document.getElementById("color-box");
changeColorBtnEl = document.getElementById("change-color-btn");
function getRandomColor() {
  // Random color in RGB format
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgbColor = `rgb(${r}, ${g}, ${b})`;

  // Random color in hexadecimal format
  let hexColor = `#${((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)
    .toUpperCase()}`;

  // Randomly choose between RGB and hexadecimal
  return Math.random() < 0.5 ? rgbColor : hexColor;
}
changeColorBtnEl.addEventListener("click", function () {
  colorBoxEl.style.backgroundColor = getRandomColor();
});
