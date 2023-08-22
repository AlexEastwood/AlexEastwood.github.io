const introElement = document.getElementById("intro");
const lightbox = document.getElementById("lightbox");
const background = document.getElementById("lightbox-background");
const mobileCardsElement = document.getElementById("mobile-cards");
const desktopCardsElement = document.getElementById("desktop-carousel");

function openOverlay() {
    lightbox.innerHTML = this.innerHTML
    lightbox.style.display = "flex"
    background.style.display = "flex"
    if (window.innerWidth > 768) {
        lightbox.getElementsByClassName("overview")[0].style.display = "none";
    }


    lightbox.addEventListener("click", e => {
        e.stopPropagation()
    })
    background.addEventListener("click", closeOverlay)
}

function closeOverlay(e) {
    e.stopPropagation()
    lightbox.style.display = "none"
    background.style.display = "none"
}

window.addEventListener("load", function () {
    let opacity = 0;
    let fadeIn = setInterval(() => {
        if (opacity >= 1) {
        clearInterval(fadeIn);
        }
        introElement.style.opacity = opacity;
        opacity += 0.01;
    }, 20);
});




if (window.innerWidth < 768) {
    introElement.addEventListener("click", e => {
        mobileCardsElement.scrollIntoView({
            behavior: "smooth"
        });
    });

    const cards = document.querySelectorAll(".card");

    cards.forEach(e => {
        e.addEventListener("click", openOverlay);
});
} else {
    introElement.addEventListener("click", e => {
        desktopCardsElement.scrollIntoView({
            behavior: "smooth"
        });
    });

    const cards = document.querySelectorAll(".carousel-item");

    lightbox.style.padding = "1%"
    lightbox.style.width = "50vw"
    lightbox.style.height = "unset"

    cards.forEach(e => {
        e.addEventListener("click", openOverlay);
    });
}




