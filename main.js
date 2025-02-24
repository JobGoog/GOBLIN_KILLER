/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/

// UNUSED EXPORTS: default

;// ./src/assets/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "5089de856a7e39c47fa7.png";
;// ./src/Goblin.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Goblin = /*#__PURE__*/function () {
  function Goblin(gridContainer, gridSize, onClick) {
    var _this = this;
    _classCallCheck(this, Goblin);
    this.gridContainer = gridContainer;
    this.gridSize = gridSize;
    this.currentCellIndex = null;
    this.onClick = onClick;
    this.isClicked = false;
    this.img = document.createElement("img");
    this.img.src = goblin_namespaceObject;
    this.img.alt = "Персонаж";
    this.img.addEventListener("click", function () {
      _this.isClicked = true;
      _this.onClick();
    });
  }
  return _createClass(Goblin, [{
    key: "getRandomIndex",
    value: function getRandomIndex(excludeIndex) {
      var randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * this.gridSize);
      } while (randomIndex === excludeIndex);
      return randomIndex;
    }
  }, {
    key: "show",
    value: function show() {
      this.currentCellIndex = this.getRandomIndex(null);
      var currentCell = this.gridContainer.querySelector("[data-index=\"".concat(this.currentCellIndex, "\"]"));
      currentCell.appendChild(this.img);
    }
  }, {
    key: "move",
    value: function move() {
      this.isClicked = false;
      var newIndex = this.getRandomIndex(this.currentCellIndex);
      var newCell = this.gridContainer.querySelector("[data-index=\"".concat(newIndex, "\"]"));
      newCell.appendChild(this.img);
      this.currentCellIndex = newIndex;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.img.remove();
    }
  }]);
}();
/* harmony default export */ const src_Goblin = (Goblin);
;// ./src/Score.js
function Score_typeof(o) { "@babel/helpers - typeof"; return Score_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Score_typeof(o); }
function Score_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function Score_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Score_toPropertyKey(o.key), o); } }
function Score_createClass(e, r, t) { return r && Score_defineProperties(e.prototype, r), t && Score_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function Score_toPropertyKey(t) { var i = Score_toPrimitive(t, "string"); return "symbol" == Score_typeof(i) ? i : i + ""; }
function Score_toPrimitive(t, r) { if ("object" != Score_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Score_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Score = /*#__PURE__*/function () {
  function Score() {
    Score_classCallCheck(this, Score);
    this.score = 0;
    this.scoreElement = document.getElementById("score");
    this.updateScore();
  }
  return Score_createClass(Score, [{
    key: "increment",
    value: function increment() {
      this.score++;
      this.updateScore();
    }
  }, {
    key: "updateScore",
    value: function updateScore() {
      this.scoreElement.textContent = "Score: ".concat(this.score);
    }
  }]);
}();
/* harmony default export */ const src_Score = (Score);
;// ./src/index.js
function src_typeof(o) { "@babel/helpers - typeof"; return src_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, src_typeof(o); }
function src_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function src_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, src_toPropertyKey(o.key), o); } }
function src_createClass(e, r, t) { return r && src_defineProperties(e.prototype, r), t && src_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function src_toPropertyKey(t) { var i = src_toPrimitive(t, "string"); return "symbol" == src_typeof(i) ? i : i + ""; }
function src_toPrimitive(t, r) { if ("object" != src_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != src_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var Game = /*#__PURE__*/function () {
  function Game() {
    src_classCallCheck(this, Game);
    this.gridContainer = document.getElementById("grid");
    if (!this.gridContainer) {
      console.error("Element with id 'grid' not found");
      return;
    }
    this.GRID_SIZE = 16;
    this.currentCellIndex = null;
    this.missedCount = 0;
    this.maxMissed = 5;
    this.score = new src_Score();
    this.goblin = new src_Goblin(this.gridContainer, this.GRID_SIZE, this.onGoblinClick.bind(this));
  }
  return src_createClass(Game, [{
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
/* harmony default export */ const src = ((/* unused pure expression or super */ null && (Game)));
/******/ })()
;