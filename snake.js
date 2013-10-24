(function (root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

  var Snake = SnakeGame.Snake = function (dir, xPos, yPos) {
    this.dir = dir;
    this.segments = [new SnakeGame.Coord(xPos, yPos)];
  }

  var DIR_VECS = { "N": [0, -1], "E": [1, 0], "S": [0, 1], "W": [-1, 0] };

  var move = Snake.prototype.move = function () {
    head = this.segments[0];
    this.segments.shift(head.plus(DIR_VECS[this.dir]));
    this.segments.pop();
  }

  var turn = Snake.prototype.turn = function (newDir) {
    this.dir = newDir;
  }

  var occupiesCoord = Snake.occupiesCoord = function (coord) {
    var occupied = false;
    for (i = 0; i < this.segments.length; i++) {
      occupied = occupied || this.segments[i].equals(coord);
    }
    return occupied;
  }

  var Coord = SnakeGame.Coord = function (xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
  }

  var plus = Coord.prototype.plus = function (vector) {
    return new Coord(this.xPos + vector[0], this.yPos + vector[1]);
  }

  var equals = Coord.prototype.equals = function (otherCoord) {
    return (this.xPos === otherCoord[0] && this.yPos === otherCoord[1]);
  }



})(this);