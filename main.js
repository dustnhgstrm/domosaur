// 1. Change the span with the class `mess-with-me` to have a font size of 40px.

const spanning = document.querySelectorAll("span");
const firstOne = spanning[1];
firstOne.style.fontSize = "40px";

// 2. Change the paragraph with the class `mess-with-me` to have a background color of green.

const graphs = document.querySelectorAll("p");
const secondOne = graphs[1];
secondOne.style.backgroundColor = "green";

// 3. Hide the second dinosaur's image so that it's no longer visible, and so that the area below it moves up to take the space. If you're not sure of how to do this, look up the CSS rule for that!

const images = document.querySelectorAll("section");
const secondImg = images[0];
secondImg.style.position = "fixed";

// 4. Change the first dinosaur image so that the image's dimensions are 324 pixels wide.

const imgDinos = document.querySelectorAll("img");
const firstDino = imgDinos[0];
firstDino.style.width = "324px";

// 1. Add an event listener to the span with the class `mess-with-me` so that when it is clicked, the font color changes to orange.

function orangeChanger() {
  firstOne.style.color = "orange";
}
firstOne.addEventListener("click", orangeChanger);

// 2. Add an event listener to the first dinosaur so that when they are clicked, they receive a red border.

function redBorder() {
  firstDino.style.border = "red 2px solid";
}

firstDino.addEventListener("click", redBorder);

// 3. Add an event listener to the feathered dinosaur, so that when they are clicked, they become 50% transparent.

function transparentFun() {
  feathered.style.opacity = "0.5";
}

const feathered = imgDinos[3];
feathered.addEventListener("click", transparentFun);

// 4. Add an event listener to the "Switch Background Color" button so that when it is clicked, we switch the background color of the row of dinosaurs to a color of your choice.

function backgroundSwitch() {
  const body = document.querySelector("#row");
  body.style.backgroundColor = "#33DD33";
}

const thisButton = document.querySelector("#toggle");

thisButton.addEventListener("click", backgroundSwitch);

// 5. Add an event listener to the dinosaur with the id `biggify` that, when HOVERED, grows the image to 200 pixels wide. Note that this is a different event, and you'll likely need to do some research on what different string you'll need to pass. It's not gonna be `click`!

function makesBigger() {
  lastDino.style.width = "200px";
}

const lastDino = document.querySelector("#biggify");

lastDino.addEventListener("mouseover", makesBigger);
