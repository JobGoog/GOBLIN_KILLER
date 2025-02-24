import Goblin from "./Goblin";
import Score from "./Score";
import "./styles.css";

class Game {
  constructor() {
    this.gridContainer = document.getElementById("grid");
    if (!this.gridContainer) {
      console.error("Element with id 'grid' not found");
      return;
    }
    this.GRID_SIZE = 16;
    this.currentCellIndex = null;
    this.missedCount = 0;
    this.maxMissed = 5;
    this.score = new Score();
    this.goblin = new Goblin(
      this.gridContainer,
      this.GRID_SIZE,
      this.onGoblinClick.bind(this),
    );
  }

  createGrid() {
    console.log("Creating grid...");
    for (let i = 0; i < this.GRID_SIZE; i++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      cell.dataset.index = i;
      this.gridContainer.appendChild(cell);
      console.log(`Created cell ${i}`);
    }
  }

  onGoblinClick() {
    this.score.increment();
    this.goblin.hide();
  }

  start() {
    this.createGrid();
    this.goblin.show();

    setInterval(() => {
      if (!this.goblin.isClicked) {
        this.missedCount++;
        if (this.missedCount >= this.maxMissed) {
          alert("Game Over");
          window.location.reload();
        }
      }
      this.goblin.move();
    }, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  game.start();
});

export default Game;
