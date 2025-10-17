// Auto-update footer year
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer p");
  const year = new Date().getFullYear();
//   if (footer) {
//     footer.innerHTML = `&copy; ${year} Adarsh Kumar Gupta`;
//   }
});

// Alert on contact form submission
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); 
    alert("Thank you! Your message has been sent.");
    this.reset(); 
  });
}
// Dark mode toggle
const toggle = document.getElementById("darkModeToggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}