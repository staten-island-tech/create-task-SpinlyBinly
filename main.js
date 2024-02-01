const DOMSelectors = {
  container: document.querySelector(".container"),
  buttons: document.querySelectorAll(".buttons"),
  button: document.querySelector("#button1"),
};

function rgb() {
  let a = Math.round(Math.random() * 256);
  let b = Math.round(Math.random() * 256);
  let c = Math.round(Math.random() * 256);
  return { a, b, c };
}

console.log(DOMSelectors.button);
function changeBackground() {
  let x = rgb();
  DOMSelectors.button.style.backgroundColor = (x.a, x.b, x.c);
  document.querySelector(".guess").style.backgroundColor = (x.a, x.b, x.c);
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class=card>
    <h1>${x.a}</h1>
    <h1>${x.b}</h1>
    <h1>${x.c}</h1>
    </div>`
  );
}
changeBackground();
//store 1-4 in array and swap order
const array = [];
for (let i = 1; i <= 4; i++) {
  array.push(i);
}

/* function switchButtonOrder() {}
console.log(array);
DOMSelectors.button.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(changeBackground());
});
 */