const phoneButton = document.getElementById("phoneButton");
const flipPhone = document.getElementById("flipPhone");

phoneButton.addEventListener("click", () => {
  phoneButton.classList.add("hide");
  flipPhone.classList.add("open");
});

flipPhone.addEventListener("click", () => {
  flipPhone.classList.remove("open");
  phoneButton.classList.remove("hide");
});

function vibratePhone() {
  phoneButton.classList.add("vibrate");

  setTimeout(() => {
    phoneButton.classList.remove("vibrate");
  }, 1200);
}

setTimeout(vibratePhone, 1800);
