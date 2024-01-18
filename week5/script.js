document.addEventListener("DOMContentLoaded", function(event) {
    let circle2= document.querySelector('#circle-2');

    window.onscroll = function() {
        let scrollPercentage = calculateScrollPercentage();
        rotateCircle(circle2, scrollPercentage);
    };

    console.log("Hello visitor")

    let amogus = document.querySelector('#img-amogus');
    amogus.addEventListener('click', function(event) {
        alert('sus');
    });

    let colorChanger = document.querySelector('#color');
    loadColorChanger(colorChanger);
    loadColorChanger(amogus)
    
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
        'Lime': '#39FF14',
        'Cyan': 'cyan'
    }
    // Javascript Arrays
    const keys = Object.keys(colorsDict)
    // Javascript Variables, Let, Const & Data Types
    let index = 0

    // Javascript Events
    element.addEventListener('click', function(event) {
        // Javascript Operators, Assignment, Arithmetic & Math
        new_index = Math.floor(Math.random() * keys.length);

        if (new_index == index) {
            new_index = (new_index + 1) % keys.length;
        }
        index = new_index

        // Change Webpage Title
        const title = document.querySelector('title');
        title.innerHTML = keys[index] + ' Potato' // Javascript Strings

        // Change Title Name
        element.innerHTML = keys[index]

        // Change Website Color
        document.documentElement.style.setProperty('--highlight', colorsDict[keys[index]]);

        //
        const amogus = document.querySelector('#img-amogus');
        amogus.src = './media/sus-' + keys[index] + '.webp';
    });

};