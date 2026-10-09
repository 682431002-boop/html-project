

/* Burger Menu */
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");

if (toggle && links) {
    toggle.addEventListener("click", function () {
        const isOpen = links.classList.toggle("open");

        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            links.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });
}

/* 2. Go to Top */
const goTopBtn = document.getElementById("goTopBtn");

window.addEventListener("scroll", () => {
    goTopBtn.style.display =
        window.scrollY > 200 ? "block" : "none";
});

goTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* 3. Contact Form: Validate, Sanitize and Store */
let contactName = "";
let contactEmail = "";
let contactPhone = "";
let contactMessage = "";

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", event => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    // Remove unwanted characters and trim whitespace
    const cleanText = value =>
        value.replace(/[<>]/g, "").trim();

    contactName = cleanText(
        document.getElementById("name").value
    );

    contactEmail = document.getElementById("email")
        .value.trim();

    contactPhone = document.getElementById("phone")
        .value.trim();

    contactMessage = cleanText(
        document.getElementById("message").value
    );

    // Display text safely without interpreting HTML
    formStatus.textContent =
        `Thank you, ${contactName}! Your form was processed.`;

    console.log("Name:", contactName);
    console.log("Email:", contactEmail);
    console.log("Phone:", contactPhone);
    console.log("Message:", contactMessage);

    contactForm.reset();
});


/* 4. Website Visitor Counter */
let visits = Number(localStorage.getItem("cvVisits") || 0);

visits++;

localStorage.setItem("cvVisits", visits);

document.getElementById("visitorCount").textContent = visits;


/* 5. Activities Carousel */
let slideIndex = 1;

function showSlides(n) {
    const slides = document.querySelectorAll(".mySlides");
    const dots = document.querySelectorAll(".slide-dot");

    if (slides.length === 0) return;

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[slideIndex - 1].style.display = "block";

    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add("active");
    }
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

showSlides(slideIndex);