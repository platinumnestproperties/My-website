document.getElementById("investorForm").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("investorMessage").textContent =
        "Your enquiry has been submitted. We will contact you shortly.";
    this.reset();
});
