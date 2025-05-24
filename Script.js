for (let i = 0; i < 100; i++) {
  let flake = document.createElement("div");
  flake.classList.add("snowflake");
  flake.style.left = Math.random() * 100 + "vw";
  flake.style.animationDuration = (Math.random() * 5 + 5) + "s";
  document.body.appendChild(flake);
}