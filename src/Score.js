class Score {
  constructor() {
    this.score = 0;
    this.scoreElement = document.getElementById("score");
    this.updateScore();
  }

  increment() {
    this.score++;
    this.updateScore();
  }

  updateScore() {
    this.scoreElement.textContent = `Score: ${this.score}`;
  }
}
export default Score;
