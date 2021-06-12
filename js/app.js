// Change image on click
function imgSlider(anything) {
    document.querySelector('.fruits').src = anything;
}

// Change background color
function changeBgColor(color) {
    const bg = document.querySelector('.bg');
    bg.style.background = color;
}

// Add active class in selected thumbails

let el = document.querySelectorAll('.thumb li');

for (let i = 0; i < el.length; i++) {
    el[i].onclick = () => {
        let c = 0;
        while (c < el.length) {
            el[c++].className = 'check';
        }
        el[i].className = 'check active';
    }
}