const phoneButton = document.getElementById("phoneButton");
const flipPhone = document.getElementById("flipPhone");

phoneButton.addEventListener("click", () => {
  flipPhone.classList.toggle("open");
});

function vibratePhone() {
  phoneButton.classList.add("vibrate");

  setTimeout(() => {
    phoneButton.classList.remove("vibrate");
  }, 1200);
}

setTimeout(vibratePhone, 1800);
