// Get the switch and skills section elements
var skillsSwitch = document.getElementById("skills-switch");
var skillsSection = document.getElementById("skills");
// Initially hide the skills section (optional)
skillsSection.style.display = "block";
// Handle switch toggle
skillsSwitch.addEventListener("change", function () {
    if (skillsSwitch.checked) {
        skillsSection.style.display = "block"; // Show the skills section
    }
    else {
        skillsSection.style.display = "none"; // Hide the skills section
    }
});
