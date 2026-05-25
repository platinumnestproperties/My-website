// Mobile menu toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
    navMenu.style.display =
        navMenu.style.display === "flex" ? "none" : "flex";
});

// Investor form handler
document.getElementById("investorForm").addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("formMessage").innerHTML =
        "<p style='color:green; margin-top:10px;'>Thank you! Your enquiry has been submitted.</p>";

    this.reset();
});
