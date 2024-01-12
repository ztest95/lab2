document.addEventListener("DOMContentLoaded", function(event) {
    let circle2= document.querySelector('#circle-2');

    window.onscroll = function() {
        let scrollPercentage = calculateScrollPercentage();
        rotateCircle(circle2, scrollPercentage);
    };

    console.log("Hello visitor")

    let amogus = document.querySelector('#amogusyellow');
    amogus.addEventListener('click', function(event) {
        alert('sus');
    });

    let colorChanger = document.querySelector('#color');
    loadColorChanger(colorChanger);
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

function loadColorChanger(element) {
    
    const colorsDict = {
        'Yellow': '#fff01f',
        'Green': '#39FF14',
        'Cyan': 'cyan'
    }
    // Javascript Arrays
    const keys = Object.keys(colorsDict)
    // Javascript Variables, Let, Const & Data Types
    let index = 0



};