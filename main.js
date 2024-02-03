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
  if (i === v){
   DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class=card>
    <h1>${i.a}</h1>
    <h1>${i.b}</h1>
    <h1>${i.c}</h1>
    </div>`
  );
  }
}

console.log(v)
}
changeBackground()


/* function switchButtonOrder() {}
console.log(array);
DOMSelectors.button.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(changeBackground());
});
 */