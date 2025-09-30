// Accordion toggle
document.querySelectorAll(".accordion-header").forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    const content = button.nextElementSibling;
    if (button.classList.contains("active")) {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
});

