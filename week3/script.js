document.addEventListener("DOMContentLoaded", function(event) {
    let realCircle = document.querySelector('#real-circle');

    window.onscroll = function() {
        let scrollPercentage = calculateScrollPercentage();
        rotateCircle(realCircle, scrollPercentage);
    };
});

function calculateScrollPercentage() {
    let scrollTop =  document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return (scrollTop / scrollHeight) * 100;
}

function rotateCircle(element, percentage) {
    let rotationDegrees = (percentage / 100) * 360;
    element.style.transform = `rotate(${rotationDegrees}deg)`;
}