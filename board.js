(function (root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

  var Board = SnakeGame.Board = function(snake, height, width) {
    this.snake = snake;
    this.height = height;
    this.width = width;
  }

  var newTile

  var render = Board.render = function() {
    var gridString = "";
    for (var i = 0; i < height; i++) {
      for (var j = 0; j < width; j++) {
        if (this.snake.occupiesCoord([i, j]) {
          gridString += "S";
        } else {
          gridString += ".";
        }
      }
    }
    return gridString;
  }



})(this);