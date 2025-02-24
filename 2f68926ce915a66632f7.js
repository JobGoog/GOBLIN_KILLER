function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import Goblin from "./Goblin";
import Score from "./Score";
import "./styles.css";
var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);
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
    this.goblin = new Goblin(this.gridContainer, this.GRID_SIZE, this.onGoblinClick.bind(this));
  }
  return _createClass(Game, [{
    key: "createGrid",
    value: function createGrid() {
      console.log("Creating grid...");
      for (var i = 0; i < this.GRID_SIZE; i++) {
        var cell = document.createElement("div");
        cell.classList.add("grid-cell");
        cell.dataset.index = i;
        this.gridContainer.appendChild(cell);
        console.log("Created cell ".concat(i));
      }
    }
  }, {
    key: "onGoblinClick",
    value: function onGoblinClick() {
      this.score.increment();
      this.goblin.hide();
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;
      this.createGrid();
      this.goblin.show();
      setInterval(function () {
        if (!_this.goblin.isClicked) {
          _this.missedCount++;
          if (_this.missedCount >= _this.maxMissed) {
            alert("Game Over");
            window.location.reload();
          }
        }
        _this.goblin.move();
      }, 1000);
    }
  }]);
}();
document.addEventListener("DOMContentLoaded", function () {
  var game = new Game();
  game.start();
});
export default Game;