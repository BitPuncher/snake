(function (root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

  var UI = SnakeGame.UI = function (gameContainer) {
    this.container = gameContainer;
    this.game = new SnakeGame.Game();
    this.lastRender = this.game.board.render();
  }

  var initUI = UI.prototype.initUI = function () {
    for (var i = 0; i < this.game.board.height; i++) {
      var row = $("<div class='row'></div>");
      for (var j = 0; j < this.game.board.width; j++) {
        row.append($("<div class='E'></div>"));
      }
      this.container.append(row);
    }

  }

  var draw = UI.prototype.draw = function () {
    var thisRender = this.game.board.render();    

    for (var i = 0; i < this.lastRender.length; i++) {
      row = this.lastRender[i][1].yPos;
      col = this.lastRender[i][1].xPos;
      className = this.lastRender[i][0];
      cell = this.container.children().eq(row).children().eq(col);

      cell.toggleClass(className, false);
    }

    for (var i = 0; i < thisRender.length; i++) {
      row = thisRender[i][1].yPos;
      col = thisRender[i][1].xPos;
      className = thisRender[i][0];
      cell = this.container.children().eq(row).children().eq(col);

      cell.toggleClass(className, true);
    }

    this.lastRender = thisRender;
  }

  var bindKeys = UI.prototype.bindKeys = function () {
    var snake = this.game.snake;
    key('up', function() { snake.turn("N") });
    key('right', function() { snake.turn("E") });
    key('down', function() { snake.turn("S") });
    key('left', function() { snake.turn("W") });
  }

  var startGame = UI.prototype.startGame = function() {
    var that = this;
    this.bindKeys();
    this.initUI();
    this.mainTimer = window.setInterval(function () {
      that.game.step();
      that.draw();
      that.game.checkCollisions();
      if (that.game.gameOver) {
        stopGame();
      }

    }, (1000/15));

    this.appleTimer = window.setInterval(function () {
      var height = that.game.board.height;
      var width = that.game.board.width
      var location = SnakeGame.Coord.Random(width, height);

      while (SnakeGame.includes(that.game.board.snake.segments, location)) {
        location = SnakeGame.Coord.Random(width, height);
      }

      
      if (that.game.board.apples.length < 5) {
        that.game.board.placeApple(location);
      }
    }, (1000));
  }

  var stopGame = UI.prototype.stopGame = function() {
    window.clearInterval(this.mainTimer);
    window.clearInterval(this.appleTimer);
  }


})(this);