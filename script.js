document.querySelector("button").addEventListener("click", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    alert("Welcome to Guilty of Desire 😈");
    document.body.style.opacity = "1";
  }, 500);
});