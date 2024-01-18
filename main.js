const DOMSelectors = {
  container: document.querySelector(".container"),
  buttons: document.querySelector(".buttons"),
};
/* const array = [];
for (let i = 0; i <= 255; i++) {
  array.push(i);
}
 */

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

function rgb() {
  let a = Math.round(Math.random() * 255);
  let b = Math.round(Math.random(1) * 255);
  let c = Math.round(Math.random(2) * 255);
  document.getElementsByClassName("buttons").style.backgroundColor = (a, b, c);
}
console.log(rgb());
DOMSelectors.container.addEventListener("click", function (e) {
  e.preventDefault();
  rgb();
});
