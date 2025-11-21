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

let box = document.getElementById("box7");
let big = false;

box.onmouseenter = function() {
  box.style.borderRadius = "50%";
};

box.onmouseleave = function() {
  box.style.borderRadius = "0";
};

box.ondblclick = function() {
  if (big) {
    box.style.width = "100px";
    box.style.height = "100px";
  } else {
    box.style.width = "200px";
    box.style.height = "200px";
  }
  big = !big;
};

let input = document.getElementById("decoderInput");
let output = document.getElementById("decodedOutput");

input.oninput = function() {
  if (input.value.includes("x")) {
    output.textContent = "Forbidden letter detected.";
  } else {
    output.textContent = input.value;
  }
};

let title = document.getElementById("glitchTitle");

setTimeout(function() {
  title.textContent = "DOM Restored!";
  title.style.color = "red";
  title.style.fontSize = "40px";
}, 3000);
