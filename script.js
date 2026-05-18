// 🚀 Message de bienvenue
window.addEventListener("load", () => {
  console.log("Bienvenue sur le site YAC IT 🚀");
});

// ✨ Effet simple au scroll (animation des sections)
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const height = window.innerHeight;

    if (top < height - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
});

// 🎯 Animation de départ des sections
sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.6s ease-in-out";
});
