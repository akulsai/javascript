let great = ["Anand", "Rahul"];

function Game(a) {
  if (a.length == 0) {
    return "akul";
  } else if (a.length == 1) {
    return "Dual";
  } else {
    return "Solo";
  }
}

console.log(Game(great));