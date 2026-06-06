const phoneButton = document.getElementById("phoneButton");
const flipPhone = document.getElementById("flipPhone");

const appButtons = document.querySelectorAll(".phone-app-btn");
const phoneAppTitle = document.getElementById("phoneAppTitle");
const phoneAppText = document.getElementById("phoneAppText");

phoneButton.addEventListener("click", () => {
  phoneButton.classList.add("hide");
  flipPhone.classList.add("open");
});

flipPhone.addEventListener("click", () => {
  flipPhone.classList.remove("open");
  phoneButton.classList.remove("hide");
});

appButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();

    const app = button.dataset.app;

    if (app === "phone") {
      phoneAppTitle.textContent = "Phone";
      phoneAppText.textContent = "No missed calls. Just quiet little things.";
    }

    if (app === "messages") {
      phoneAppTitle.textContent = "Messages";
      phoneAppText.textContent = "Firebase chat will live here later.";
    }

    if (app === "notices") {
      phoneAppTitle.textContent = "Notices";
      phoneAppText.textContent = "A new entry has been posted.";
    }
  });
});

function vibratePhone() {
  phoneButton.classList.add("vibrate");

  setTimeout(() => {
    phoneButton.classList.remove("vibrate");
  }, 1200);
}

setTimeout(vibratePhone, 1800);
