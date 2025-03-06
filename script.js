// Typing animation for skills
const skills = ['Full Stack Developer', 'Data Analyst', 'SEO Executive'];
let i = 0;
let j = 0;
let currentText = '';
let isDeleting = false;

function type() {
    const typingElement = document.getElementById('typing-text');
    if (isDeleting) {
        currentText = skills[i].substring(0, j - 1);
        j--;
    } else {
        currentText = skills[i].substring(0, j + 1);
        j++;
    }
    typingElement.textContent = currentText;

    if (!isDeleting && j === skills[i].length) {
        setTimeout(() => {
            isDeleting = true;
        }, 1000);
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % skills.length;
    }

    setTimeout(type, isDeleting ? 150 : 200);
}

type();

// Animation for Skills Bar
document.querySelectorAll('.skill').forEach(skill => {
    const bar = skill.querySelector('.bar');
    const skillValue = skill.getAttribute('data-skill');
    bar.style.width = skillValue + '%';
});

// Preloader Timeout
window.onload = () => {
    setTimeout(() => {
        document.getElementById('preloader').style.display = 'none';
    }, 2000);
};

// Navbar color change on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        document.getElementById('navbar').classList.add('scrolled');
    } else {
        document.getElementById('navbar').classList.remove('scrolled');
    }
});






// Initialize EmailJS
(function() {
    emailjs.init("ggVTIWrscXjdnfQx9"); // Replace with your EmailJS user ID
})();

// Handle form submission
document.getElementById("quote-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from reloading the page
    
    // Collect form data
    const formData = new FormData(this);
    const formValues = Object.fromEntries(formData);

    // Prepare the email parameters
    const emailParams = {
        name: formValues.name,
        email: formValues.email,
        phone: formValues.phone || "Not provided", // Use "Not provided" if phone is empty
        service: formValues.service,
        message: formValues.message
    };

    // Send email using EmailJS
    emailjs.send("service_YOUR_SERVICE_ID", "template_YOUR_TEMPLATE_ID", emailParams)
        .then(function(response) {
            // On success
            document.getElementById("response-message").textContent = "Thank you for your enquiry! We will get back to you soon.";
            document.getElementById("quote-form").reset();
        }, function(error) {
            // On error
            document.getElementById("response-message").textContent = "There was an error sending your enquiry. Please try again.";
        });
});


document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.createElement("button");
    toggleButton.classList.add("navbar-toggle");
    toggleButton.innerHTML = "☰"; // Hamburger icon

    const navbar = document.getElementById("navbar");
    navbar.prepend(toggleButton);

    const navMenu = navbar.querySelector("ul");

    toggleButton.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });
});
