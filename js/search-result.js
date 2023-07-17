const collapseButton = document.getElementById('collapseButton');
const collapseExample = document.getElementById('collapsableResult-1');
const dropdownHidden = document.querySelectorAll(".dropdown-hidden");
const dropdowns = document.querySelectorAll(".dropdown");
const sortbar = document.getElementById('sortbar');

// handle expanded filter dropdown
dropdownHidden.forEach((dropdown) => {
    const dropdownBtn = dropdown.querySelector(".dropdown-btn-hidden");
    const dropdownContent = dropdown.querySelector(".dropdown-content");
    const arrowIcon = dropdown.querySelector(".icon"); // Select the icon element

    if (dropdownBtn && dropdownContent) {
        dropdownBtn.addEventListener("click", function (event) {
            event.stopPropagation();

            const isTargetDropdown = dropdownBtn === event.target;
            const isOpen = dropdownContent.classList.contains("show");

            if (!isTargetDropdown && isOpen) {
                return;
            }
            dropdownContent.classList.toggle("show");
            if (arrowIcon) {
                arrowIcon.classList.toggle("rotate");
            }
        });
    }
});

// handle hidden filter dropdown
dropdowns.forEach((dropdown) => {
    const dropdownBtn = dropdown.querySelector(".dropdown-btn");
    const dropdownContent = dropdown.querySelector(".dropdown-content");
    const arrowIcon = dropdown.querySelector(".icon");

    if (dropdownBtn && dropdownContent) {
        dropdownBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            const isTargetDropdown = dropdownBtn === event.target;
            const isOpen = dropdownContent.classList.contains("show");

            if (!isTargetDropdown && isOpen) {
                return;
            }
            dropdownContent.classList.toggle("show");
            if (arrowIcon) {
                arrowIcon.classList.toggle("rotate");
            }
            if (dropdownBtn.innerText === 'Show arrival time') {
                dropdownBtn.textContent = 'Hide arrival time';
            } else if (dropdownBtn.innerText === 'Hide arrival time') {
                dropdownBtn.textContent = 'Show arrival time';
            }
        });
    }
});

// show more show less
function toggleContent(containerId, buttonId) {
    const content = document.getElementById(containerId);
    const btn = document.getElementById(buttonId);

    if (content.classList.contains('show')) {
        content.classList.remove('show');
        btn.innerHTML = '<i class="fa fa-plus" aria-hidden="true"></i> Show More ';
    } else {
        content.classList.add('show');
        btn.innerHTML = '<i class="fa fa-minus" aria-hidden="true"></i> Show Less';
    }
}

document.getElementById('showMoreBtn1').addEventListener('click', function () {
    toggleContent('content1', 'showMoreBtn1');
});

document.getElementById('showMoreBtn2').addEventListener('click', function () {
    toggleContent('content2', 'showMoreBtn2');
});

// handle collapsable and expand button name
collapseExample.addEventListener('shown.bs.collapse', function () {
    collapseButton.textContent = 'LESS FLIGHT COMBINATION';
});

collapseExample.addEventListener('hidden.bs.collapse', function () {
    collapseButton.textContent = '1 more flight combination';
});

// handle search result sortbar active color
const handleSelectedSortbar = (buttonNumber) => {
    if (buttonNumber === 0) {
        sortbar.children[1].style.borderBottom = '';
        sortbar.children[2].style.borderBottom = '';
        sortbar.children[buttonNumber].style.borderBottom = '2px solid #21a024';
    } else if (buttonNumber === 1) {
        sortbar.children[0].style.borderBottom = '';
        sortbar.children[2].style.borderBottom = '';
        sortbar.children[buttonNumber].style.borderBottom = '2px solid #21a024';
    } else {
        sortbar.children[0].style.borderBottom = '';
        sortbar.children[1].style.borderBottom = '';
        sortbar.children[buttonNumber].style.borderBottom = '2px solid #21a024';
    }
}