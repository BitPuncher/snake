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


    for (var i = 0; i < thisRender.length; i++){
      for (var j = 0; j < this.lastRender.length; j++) {
        if (thisRender[i] && this.lastRender[j] && thisRender[i][1].equals(this.lastRender[j][1])) {
          thisRender[i] = null;
          this.lastRender[j] = null;
        }
      }
    }

    for (var i = 0; i < thisRender.length; i++) {
      row = thisRender[i][1].yPos;
      col = thisRender[i][1].xPos;
      className = thisRender[i][0];
      cell = this.container.children().eq(row).children().eq(col);

      console.log(cell);

      cell.toggleClass(className, true);
    }

    for (var i = 0; i < this.lastRender.length; i++) {
      row = this.lastRender[i][1].yPos;
      col = this.lastRender[i][1].xPos;
      className = this.lastRender[i][0];
      cell = this.container.children().eq(row).children().eq(col);

      console.log(cell);

      cell.toggleClass(className, false);
    }

    this.lastRender = thisRender;
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
    this.initUI();
    this.timer = window.setInterval(function () {
      that.game.step();
      that.draw();
    }, (1000/15))
  }

  var stopGame = UI.prototype.stopGame = function() {
    window.clearInterval(this.timer);
  }


})(this);