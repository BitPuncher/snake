(function (root) {
	var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

	var collides = SnakeGame.collides = function (object, otherObject, callback) {
		var objects = _isOverlapping(object, otherObject);
		if (objects) {
			callback(objects[0], objects[1]);
		}
	}


	//expects any combination of Coords or arrays of Coords
	//returns true if any of either object/group are overlapping

	//needs to be adjusted to respond with the items that are overlapping if
	//any are, null if none are.
	var _isOverlapping = SnakeGame._isOverlapping = function(obj, otherObj) {
		if (Array.isArray(obj)) {
			for (var i = 0; i < obj.length; i++) {
				if (Array.isArray(otherObj)) {
					for (var j = 0; j < otherObj.length; j++) {
						if (obj[i].equals(otherObj[j])) {
							return [obj[i], otherObj[j]];
						}
					}
				} else {
					if (obj[i].equals(otherObj)) {
						return [obj[i], otherObj];
					}
				}
			}
		} else if (Array.isArray(otherObj)) {
			for (var i = 0; i < otherObj.length; i++) {
				if (otherObj[i].equals(obj)) {
					return [obj, otherObj[i]];
				}
			}
		} else {
			if (obj.equals(otherObj)) {
				return [obj, otherObj];
			}
		}
		return null;
	}
})(this);