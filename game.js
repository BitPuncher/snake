(function (root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

  var Game = SnakeGame.Game = function () {
    this.snake = new SnakeGame.Snake("N", 30, 30);
    this.board = new SnakeGame.Board(this.snake, 60, 60);
  }

  var step = Game.prototype.step = function () {
    this.snake.move()
  }


})(this);