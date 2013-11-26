(function (root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

  var Snake = SnakeGame.Snake = function (dir, xPos, yPos) {
    this.dir = dir;
    this.segments = [new SnakeGame.Coord(xPos, yPos)];
    this.grow = 5;
    this.DIR_VECS = { "N": [0, -1], "E": [1, 0], "S": [0, 1], "W": [-1, 0] };
    this.DIRS = ["N", "E", "S", "W"];
  }

  var move = Snake.prototype.move = function () {
    var head = this.segments[0];
    this.segments.unshift(head.plus(this.DIR_VECS[this.dir]));
    if (this.grow > 0) {
      this.grow -= 1;
    } else {
      this.segments.pop();  
    }
  }

  var turn = Snake.prototype.turn = function (newDir) {
    var oppositeDir = this.DIRS[(this.DIRS.indexOf(this.dir) + 2) % 4];
    if (oppositeDir != newDir) {
      this.dir = newDir;
    }
  }

  var occupiesCoord = Snake.prototype.occupiesCoord = function (coord) {
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
    return (this.xPos === otherCoord.xPos && this.yPos === otherCoord.yPos);
  }

  var Random = Coord.Random = function (width, height) {
    return new Coord(Math.floor(Math.random() * width), 
      Math.floor(Math.random() * height));
  }

  var Square = Coord.Square = function (origin, width, height) {
    var coordinates = [];
    for (var x = 0; x < width; x++){
      coordinates.push(new Coord(x + origin.xPos, origin.yPos));
      coordinates.push(new Coord(x + origin.xPos, origin.yPos + height - 1));
    }

    for (var y = 0; y < height; y++){
      coordinates.push(new Coord(origin.xPos, y + origin.yPos));
      coordinates.push(new Coord(origin.xPos + width - 1, y + origin.yPos));
    }
    return coordinates;
  }

})(this);