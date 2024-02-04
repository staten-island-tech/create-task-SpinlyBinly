const DOMSelectors = {
  container: document.querySelector(".container"),
  buttons: document.querySelectorAll(".buttons"),
  button1: document.querySelector("#button1"),
  button2: document.querySelector("#button2"),
  button3: document.querySelector("#button3"),
  button4: document.querySelector("#button4"),
};

function rgb() {
  let a = Math.round(Math.random() * 256);
  let b = Math.round(Math.random() * 256);
  let c = Math.round(Math.random() * 256);
  return { a, b, c };
}

function value(){
  const array = [1, 2, 3, 4]
let randomValue = array[Math.floor(Math.random() * array.length)];
return {randomValue};
}
let v = value();

function changeBackground(){
 for (let i = 1; i < 5; i++) {
  let w = rgb();
  DOMSelectors[`button${i}`].style.backgroundColor = `rgb(${w.a}, ${w.b}, ${w.c})`;
  if (i === v.randomValue){
   DOMSelectors.container.insertAdjacentHTML(
    "beforebegin",
    `<div class=card>
    <h1>${w.a},  &nbsp;</h1>
    <h1>${w.b},  &nbsp;</h1>
    <h1>${w.c}</h1>
    </div>`
  );
  }  
}

console.log(v)
}
changeBackground()

//DOMSelectors.incorrectButtons.addEventListener("click", function (event) {<h1>Sorry, try again.</h1>})
//DOMSelectors.correctButton.addEventListener("click", function (event) {<h1>Well done!</h1>})
/* DOMSelectors.button.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(changeBackground());
}); */