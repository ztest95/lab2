document.addEventListener("DOMContentLoaded", function(event) {
    let circle2= document.querySelector('#circle-2');

    window.onscroll = function() {
        let scrollPercentage = calculateScrollPercentage();
        rotateCircle(circle2, scrollPercentage);
    };
});

function calculateScrollPercentage() {
    let scrollTop =  document.documentElement.scrollTop; // distance from top of page to top of viewport
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; // total height of page
    return (scrollTop / scrollHeight) * 100; // how much of the page is scrolled
}

function rotateCircle(element, percentage) {
    let rotationDegrees = (percentage / 100) * 360;
    element.style.setProperty('--rotation', rotationDegrees + 'deg'); // sets css variable '--rotation' to rotationDegrees
}