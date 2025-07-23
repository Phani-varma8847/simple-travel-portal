function generatePalette() {
  const palette = document.getElementById("palette");
  palette.innerHTML = "";

  for (let i = 0; i < 6; i++) {
    const color = getRandomColor();
    const colorBox = document.createElement("div");
    colorBox.className = "color-box";
    colorBox.style.backgroundColor = color;
    colorBox.textContent = color;

    colorBox.addEventListener("click", () => {
      navigator.clipboard.writeText(color);
      const copied = document.createElement("div");
      copied.className = "copied";
      copied.textContent = "Copied!";
      colorBox.appendChild(copied);
      setTimeout(() => copied.remove(), 1000);
    });

    palette.appendChild(colorBox);
  }
}

function getRandomColor() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
  return `#${hex}`;
}

// Generate on page load
generatePalette();
