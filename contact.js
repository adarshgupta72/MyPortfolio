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
// Dark mode 
const toggle = document.getElementById("darkModeToggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}


const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { Accept: "application/json" }
  });

  if (response.ok) {
    alert("Your message has been sent successfully!");
    form.reset();
  } else {
    alert("Oops! Something went wrong. Please try again later.");
  }
});
