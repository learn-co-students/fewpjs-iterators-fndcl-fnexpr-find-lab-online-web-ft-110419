
function superbowlWin(array) {
  let win = array.find(function(y) { return y.result === "W"})
  if (win) {
    return win.year
  }
}
