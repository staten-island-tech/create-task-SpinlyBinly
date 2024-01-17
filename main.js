const DOMSelectors = {
  container: document.querySelector(".container"),
};
const array = [];
for (let i = 0; i <= 255; i++) {
  array.push(i);
}

console.log(array);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
Math.round(Math.random() * 255);

DOMSelectors.container.insertAdjacentHTML(
  "beforeend",
  `<div class=card>
  <h1>${Math.round(Math.random() * 255)}</h1>
  <h1>${Math.round(Math.random(1) * 255)}</h1>
  <h1>${Math.round(Math.random(2) * 255)}</h1>
  </div>`
);

function rgbt() {
  let a = Math.round(Math.random() * 255);
  let b = Math.round(Math.random(1) * 255);
  let c = Math.round(Math.random(2) * 255);
  document.body.style.backgroundColor = (a, b, c);
}
console.log(rgbt());
DOMSelectors.container.addEventListener("click", function (e) {
  e.preventDefault();
  rgbt();
});
