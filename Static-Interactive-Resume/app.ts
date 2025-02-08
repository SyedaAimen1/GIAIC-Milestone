// Get the switch and skills section elements
const skillsSwitch = document.getElementById("skills-switch") as HTMLInputElement;
const skillsSection = document.getElementById("skills") as HTMLElement;

// Initially hide the skills section (optional)
skillsSection.style.display = "block";

// Handle switch toggle
skillsSwitch.addEventListener("change", () => {
  if (skillsSwitch.checked) {
    skillsSection.style.display = "block";  // Show the skills section
  } else {
    skillsSection.style.display = "none";   // Hide the skills section
  }
});
