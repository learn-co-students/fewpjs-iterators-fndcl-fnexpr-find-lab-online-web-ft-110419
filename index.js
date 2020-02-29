const testVar = {}

function testFunc() {
  return "hi"
}

// function superbowlWin(arr){
//   let wins = [];
//   let i = 0;
//   for (i=0; i < arr.length; i++){
//     if (arr[i].result === "W")
//     wins.push(arr[i].year)
//   };
//   if (wins.length === 0) {
//     return undefined
//   } else {
//     return wins };
// }

const record = [{ year: "1969", result: "W"},
      { year: "1968", result: "N/A"},
      { year: "1967", result: "N/A"},
      { year: "1966", result: "L"}];

function superbowlWin(arr){
  let bigW = arr.find(e => e.result === "W");
  if (bigW){ 
    return bigW.year;
  } else {
    undefined
  };
};