const collapseButton = document.getElementById('collapseButton');
const collapseExample = document.getElementById('collapsableResult-1');
const sortbar = document.getElementById('sortbar');
collapseExample.addEventListener('shown.bs.collapse', function () {
    collapseButton.textContent = 'LESS FLIGHT COMBINATION';
});

collapseExample.addEventListener('hidden.bs.collapse', function () {
    collapseButton.textContent = '1 more flight combination';
});

// const collapseButtons = document.querySelectorAll('.collapse-button');
// const collapseExamples = document.querySelectorAll('.collapse-example');

// // Add event listeners for each expandable card
// collapseExamples.forEach((collapseExample, index) => {
//     collapseExample.addEventListener('shown.bs.collapse', function () {
//         collapseButtons[index].textContent = 'LESS FLIGHT COMBINATION';
//     });

//     collapseExample.addEventListener('hidden.bs.collapse', function () {
//         collapseButtons[index].textContent = '1 more flight combination';
//     });
// });





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