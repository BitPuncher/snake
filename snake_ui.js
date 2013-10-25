(function (root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

  var UI = SnakeGame.UI = function (gameContainer) {
    this.container = gameContainer;
    this.game = new SnakeGame.Game();
    this.lastRender = this.game.render();
    this.thisRender = null;
  }

  var initUI = UI.prototype.initUI = function (string) {
    this.container.empty();
    var width = this.game.board.width
    for(var i = 0; i < string.length / width; i++) {
      var row = $("<div class='row'></div>");
      for (var j = 0; j < width; j++) {
        row.append($("<div class='cell'></div>"));
      }
      this.container.append(row);
    }

  }

  var draw = UI.prototype.draw = function () {
    a) compare lastRender to new Render
    b) revert things that are no longer the same
    c) change things that are new


  }

  var bindKeys = UI.prototype.bindKeys = function () {
    var snake = this.game.snake;
    key('up', function() { snake.turn.bind(snake, "N") });
    key('right', function() { snake.turn.bind(snake, "E") });
    key('down', function() { snake.turn.bind(snake, "S") });
    key('left', function() { snake.turn.bind(snake, "W") });
  }

  var startGame = UI.prototype.startGame = function() {
    var that = this;
    this.bindKeys();
    this.timer = window.setInterval(function () {
      that.game.step();
      that.draw(that.game.board.render());
    }, (1000/15))
  }

  var stopGame = UI.prototype.stopGame = function() {
    window.clearInterval(this.timer);
  }


})(this);