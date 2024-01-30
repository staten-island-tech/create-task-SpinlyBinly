const DOMSelectors = {
  container: document.querySelector(".container"),
  buttons: document.querySelectorAll(".buttons"),
  button: document.querySelector("#button1"),
};

/* DOMSelectors.container.insertAdjacentHTML(
  "beforeend",
  `<div class=card>
  <h1>${a}</h1>
  <h1>${b}</h1>
  <h1>${c}</h1>
  </div>`
);
 */
function rgb() {
  let a = Math.round(Math.random() * 256);
  let b = Math.round(Math.random() * 256);
  let c = Math.round(Math.random() * 256);
  return { a, b, c };
}

event.preventDefault();
rgb();
button.style.backgroundColor = (a, b, c);

//store 1-4 in array and swap order
const array = [];
for (let i = 0; i <= 4; i++) {
  array.push(i);
}

console.log(array);
DOMSelectors.button.addEventListener("click", rgb);
