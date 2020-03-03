function superbowlWin(superbowls){
  let win = superbowls.find(superbowl => superbowl.result === "W")
  return win ? win.year : undefined;
}