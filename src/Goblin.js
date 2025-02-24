import characterImage from "./assets/goblin.png";

class Goblin {
  constructor(gridContainer, gridSize, onClick) {
    this.gridContainer = gridContainer;
    this.gridSize = gridSize;
    this.currentCellIndex = null;
    this.onClick = onClick;
    this.isClicked = false;

    this.img = document.createElement("img");
    this.img.src = characterImage;
    this.img.alt = "Персонаж";
    this.img.addEventListener("click", () => {
      this.isClicked = true;
      this.onClick();
    });
  }

  getRandomIndex(excludeIndex) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * this.gridSize);
    } while (randomIndex === excludeIndex);
    return randomIndex;
  }

  show() {
    this.currentCellIndex = this.getRandomIndex(null);
    const currentCell = this.gridContainer.querySelector(
      `[data-index="${this.currentCellIndex}"]`,
    );
    currentCell.appendChild(this.img);
  }

  move() {
    this.isClicked = false;
    const newIndex = this.getRandomIndex(this.currentCellIndex);
    const newCell = this.gridContainer.querySelector(
      `[data-index="${newIndex}"]`,
    );
    newCell.appendChild(this.img);
    this.currentCellIndex = newIndex;
  }

  hide() {
    this.img.remove();
  }
}

export default Goblin;
