const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
	let game = array.find(game => game.result === "W")
	if (game) {
		return game.year
	}
	else {
		return undefined
	}
}