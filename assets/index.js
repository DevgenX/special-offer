const submitButton = document.getElementById("submit-btn");
const getContainerDiv = document.getElementById("container");

submitButton.addEventListener("click", () => {
  getContainerDiv.classList.remove("container");
  getContainerDiv.classList.add("change-bg");

  if (getContainerDiv.classList.contains("change-bg")) {
    submitButton.disabled = true;
    submitButton.classList.add("disabled");
    submitButton.textContent = "Submitted";
  }

  // toggle functionality
  //   getContainerDiv.classList.toggle("container");
  //   getContainerDiv.classList.add("change-bg");
});
