function isMobile() {
    return window.innerWidth <= 768;
}

const carrosselContainer = document.querySelector(".carrossel");

function nextSlide() {
    carrosselContainer.appendChild(
        carrosselContainer.firstElementChild.cloneNode(true)
    );
    carrosselContainer.removeChild(carrosselContainer.firstElementChild);

    const carrosselItems = document.querySelectorAll(
        ".carrossel1, .carrossel11, .carrossel111"
    );
    carrosselItems.forEach((item, index) => {
        if (index === 0) {
            item.style.left = "0";
            item.style.display = "flex";
        } else {
            item.style.left = `${index * 100}%`;
            item.style.display = "none";
        }
    });
}

if (isMobile()) {
    setInterval(nextSlide, 2300);
}   
