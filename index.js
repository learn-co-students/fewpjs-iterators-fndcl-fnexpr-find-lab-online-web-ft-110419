const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(objects) {
  let win = objects.find(function(e) { return e.result === "W"})
  if (win) {
    return win.year
  }
}
