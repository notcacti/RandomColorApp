window.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const colorText = document.getElementById("color");

  const letters = "0123456789ABCDEF";

  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  body.style.backgroundColor = `${color}`;

  colorText.innerText = `${color}`;
});
