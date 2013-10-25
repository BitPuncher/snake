(function (root) {
	var SnakeGame = root.SnakeGame = (root.SnakeGame || {})

	SnakeGame.includes = function (array, element) {
		for (var i = 0; i < array.length; i++) {
			if (array[i].equals(element)) {
				return true;
			}
		}
		return false;
	}

})(this)
