//your JS code here. If required.
let otpfield = [...document.getElementsByClassName("code")];
let current = 0;
let size = otpfield.length;

document.addEventListener("keydown", function (event) {
  let key = event.key;

  if (key == "Backspace") {
    if (current == 0) return;
  } else if (current == size - 1) return;

  otpfield[current].classList.remove("focused");

  current = key == "Backspace" ? (current -= 1) : (current += 1);

  otpfield[current].classList.add("focused");
  otpfield[current].focus();
});
