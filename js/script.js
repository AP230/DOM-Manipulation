
let msg = document.getElementById("secretText991");
msg.style.visibility = "visible";
msg.textContent = "You found me using the DOM!";

let patch = document.querySelector(".colorPatch-z9");
let btn = document.getElementById("weirdButtonX");
let count = 0;

btn.onclick = function() {
  count++;
  patch.style.backgroundColor = "pink";
  btn.textContent = count;
};
