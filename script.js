const reveals = document.querySelectorAll(".reveal");

function revealSections() {
  reveals.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);