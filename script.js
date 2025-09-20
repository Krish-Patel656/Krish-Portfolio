function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const subject = "Portfolio Contact";
  const body = `Name: ${form[0].value}\nEmail: ${form[1].value}\nMessage: ${form[2].value}`;
  window.location.href = `mailto:krish.patel.060506@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
