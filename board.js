(function (root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

  var Board = SnakeGame.Board = function(snake, height, width) {
    this.snake = snake;
    this.height = height;
    this.width = width;
    this.apples = [];
  }

  var placeApple = Board.prototype.placeApple = function(location) {
    this.apples.push(location);
  };

  var render = Board.prototype.render = function() {
    var boardState = [];
    for (var i = 0; i < this.snake.segments.length; i++) {
      boardState.push(["S", this.snake.segments[i]]);
    }

    for (var i = 0; i < this.apples.length; i++) {
      boardState.push(["A", this.apples[i]]);
    }

    return boardState;
  }



})(this);