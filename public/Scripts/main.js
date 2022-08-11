const toggleButton = document.getElementById("toggleButton");
const toggleIcon = document.getElementById("toggleIcon");
toggleButton.addEventListener("click", () => {
  toggleIcon.classList.toggle("fa-bars");
  toggleIcon.classList.toggle("fa-xmark");
});
