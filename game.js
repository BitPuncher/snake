(function (root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

  var Game = SnakeGame.Game = function () {
    this.snake = new SnakeGame.Snake("N", 30, 30);
    this.board = new SnakeGame.Board(this.snake, 60, 60);
    this.gameOver = false;
  }

  var step = Game.prototype.step = function () {
    this.snake.move()
  }

  var checkCollisions = Game.prototype.checkCollisions = function () {
		that = this;

  	SnakeGame.collides(this.snake.segments, this.snake.segments, function() {
  		this.gameOver = true;
  	});

  	SnakeGame.collides(that.board.apples, that.snake.segments,
  		function (apple, _) {
  			that.board.apples = that.board.apples.filter(function(element) {
  			 return !apple.equals(element) 
  			}, that.board.apples);

  			that.board.snake.grow += 3;
  			 
  		});
  }
})(this);