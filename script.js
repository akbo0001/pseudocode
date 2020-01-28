//PART 1

function multiply (num1, num2/*, num3*/) {
  return num1 * num2/* + num3*/;
}

console.log(multiply(2, 3));
/*console.log(multiply(148, 30000001, 4));

console.log(2 * 3);*/

//PART 2

/*let light = false;

function lightToggle () {
  return light = !light;
}

if (light) {
  console.log("Let there ve light!");
}

else {
  console.log("God's away come back later!");
}*/

//PART 3

let light = false;
function sleep (a) {
  /*if (a) {
    console.log("It's true");
  }

  else {
    console.log("It's false");
  }*/

  return (a ? "It's true" : "It's false");
}

console.log(sleep(light));