(function (root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

  var Board = SnakeGame.Board = function(snake, height, width) {
    this.snake = snake;
    this.height = height;
    this.width = width;
    this.apples = [];
    this.bounds = SnakeGame.Coord.Square(new SnakeGame.Coord(0, 0), height, width);
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

    for (var i = 0; i < this.bounds.length; i++) {
      boardState.push(["B", this.bounds[i]]);
    }

    return boardState;
  }



})(this);