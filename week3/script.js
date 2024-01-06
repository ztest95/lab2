// document.addEventListener("DOMContentLoaded", function(event) {
//     let section3 = document.querySelector('#section-3');

//     window.onscroll = function() {
//         let scrollPercentage = calculateScrollPercentage();
//         rotateCircle(section3, scrollPercentage);
//     };
// });

// function calculateScrollPercentage() {
//     let scrollTop =  document.documentElement.scrollTop;
//     let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     return (scrollTop / scrollHeight) * 100;
// }

// function rotateCircle(element, percentage) {
//     let rotationDegrees = (percentage / 100) * 360;
//     element.style.setProperty('--rotation', rotationDegrees + 'deg');
// }