(function (root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

  var Game = SnakeGame.Game = function () {
    this.snake = new SnakeGame.Snake("N", 30, 30);
    this.board = new SnakeGame.Board(this.snake, 60, 60);
    this.gameOver = false;
    this.score = 0;
  }

  var step = Game.prototype.step = function () {
    this.snake.move()
  }

  var checkCollisions = Game.prototype.checkCollisions = function () {
		that = this;

  	SnakeGame.collides(that.snake.segments[0], 
      that.snake.segments.slice(1, that.snake.segments.length), 
      function(objects) {
      var segment = that.snake.segments.pop();
      var head = that.snake.segments[0];
      while (!segment.equals(head)){
        that.board.bounds.push(segment);
        segment = that.snake.segments.pop();
      }
  	});

  	SnakeGame.collides(that.board.apples, that.snake.segments[0],
  		function (apple, _) {
  			that.board.apples = that.board.apples.filter(function(element) {
  			 return !apple.equals(element) 
  			}, that.board.apples);

  			that.score += 1;
        console.log(that.score);
  		});

    SnakeGame.collides(that.snake.segments[0], that.board.bounds, function() {
      that.gameOver = true;
    })
  }
})(this);