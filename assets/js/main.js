const imageWidth = 300;
let scrollPosition = 0;

function scrollLeft() {
    if (scrollPosition > 0) {
        scrollPosition -= imageWidth;
        document.querySelector(".carousel").style.transform = `translateX(-${scrollPosition}px)`;
    }
}

function scrollRight () {

    const carousel = document.querySelector(".carousel");
    const maxScrollPosition = carousel.scrollWidth - carousel.clientHeight;

    if (scrollPosition < maxScrollPosition) {
        scrollPosition += imageWidth;
        document.querySelector(".carousel").style.transform = `translateX(-${scrollPosition}px)`;
    }
}

document.getElementById("leftButton").addEventListener('click', scrollLeft);
document.getElementById("rightButton").addEventListener('click', scrollRight);