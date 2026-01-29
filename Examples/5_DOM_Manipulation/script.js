const title = document.getElementById("title");
const button = document.getElementById("changeBtn");

button.addEventListener("click", () => {
  title.textContent = "Text wurde geändert!";
});