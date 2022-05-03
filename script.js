const paletteEl = document.querySelector(".palette");
const gridPromptBtn = document.querySelector(".grid-prompt");

gridPromptBtn.addEventListener("click", () => {
  let size = Number.parseInt(prompt("Enter the grid size(4-64):"));

  let child = paletteEl.lastElementChild;
  while (child) {
    paletteEl.removeChild(child);
    child = paletteEl.lastElementChild;
  }

  for (let i = 0; i < size * size; i++) {
    const divEl = document.createElement("div");
    divEl.classList.add("box");
    divEl.style.width = 560 / size - 2 + "px";
    paletteEl.appendChild(divEl);
  }
  const boxListEl = document.querySelectorAll(".box");
  boxListEl.forEach((box) => {
    box.addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )})`;
    });
  });
});
