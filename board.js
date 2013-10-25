(function (root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

  var Board = SnakeGame.Board = function(snake, height, width) {
    this.snake = snake;
    this.height = height;
    this.width = width;
  }

  // var newTile

  var render = Board.prototype.render = function() {
    var boardState = [];
    for (var i = 0; i < this.snake.segments.length; i++) {
      boardState.push(["S", this.snake.segments[i]]);
    }

    return boardState;
  }



})(this);