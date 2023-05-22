const submitButton = document.getElementById("submit-btn");
const getContainerDiv = document.getElementById("container");

const getName = document.getElementById("name");
const getEmail = document.getElementById("email");
const getHandle = document.getElementById("handle");

submitButton.addEventListener("click", () => {
  getContainerDiv.classList.remove("container");
  getContainerDiv.classList.add("change-bg");

  if (getContainerDiv.classList.contains("change-bg")) {
    submitButton.disabled = true;
    submitButton.classList.add("disabled");
    submitButton.textContent = "Submitted";
  }

  // setTimeout(() => {
  //   // Assuming API call is happening
  //   // Show alert when API call succeeds
  //   alert("Form submitted successfully");
  //   getContainerDiv.classList.remove("change-bg");
  //   submitButton.classList.remove("disabled");
  //   getContainerDiv.classList.add("container");
  //   submitButton.disabled = false;
  //   submitButton.textContent = "Submit";
  // }, 1500);

  // toggle functionality
  //   getContainerDiv.classList.toggle("container");
  //   getContainerDiv.classList.add("change-bg");
});
