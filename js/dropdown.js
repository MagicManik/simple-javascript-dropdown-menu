// Get all the dropdowns on the page
const dropdowns = document.querySelectorAll(".dropdown");

// Add event listeners to toggle the dropdowns
dropdowns.forEach((dropdown) => {
    const dropdownBtn = dropdown.querySelector(".dropdown-btn");
    const dropdownContent = dropdown.querySelector(".dropdown-content");

    // Check if dropdownBtn and dropdownContent exist before adding event listeners
    if (dropdownBtn && dropdownContent) {
        dropdownBtn.addEventListener("click", function () {
            dropdownContent.classList.toggle("show");
            const arrowIcon = dropdownBtn.querySelector(".icon");
            console.log(arrowIcon)
            if (arrowIcon) {
                arrowIcon.classList.toggle("rotate");
            }
        });
        window.addEventListener("click", function (event) {
            if (!dropdownBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
                dropdownContent.classList.remove("show");
                const arrowIcon = dropdownBtn.querySelector(".icon");
                if (arrowIcon) {
                    arrowIcon.classList.remove("rotate");
                }
            }
        });
    }
});
