var food = process.argv[2];

if (food === "steak") || (food === "pork chops") {
  console.log("Vegans Beware!");
}
else if (food === "fruit salad") || (food === "tofurkey") {
  console.log("This cuisine is Vegan friendly!");
}
else {
  console.log("This is not on the menu!");
}
