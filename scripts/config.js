const openPlayerConfig = () => {
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
};

const closePlayerConfig = () => {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
};

const savePlayerConfig = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("playername").trim();

  if (!enteredPlayername) {
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }
};
