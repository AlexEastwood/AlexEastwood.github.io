const introElement = document.getElementById("intro");
const lightbox = document.getElementById("lightbox")
const background = document.getElementById("lightbox-background")
const mobileCardsElement = document.getElementById("mobile-cards")
let opacity = 0;
let fadeIn = setInterval(() => {
    if (opacity >= 1) {
    clearInterval(fadeIn);
    }
    introElement.style.opacity = opacity;
    opacity += 0.01;
}, 30);

const cards = document.querySelectorAll(".card")

cards.forEach(e => {
    e.addEventListener("click", openOverlay)
});

introElement.addEventListener("click", e => {
    mobileCardsElement.scrollIntoView({
        behavior: "smooth"
    })
})

function openOverlay() {
    lightbox.innerHTML = this.innerHTML
    lightbox.style.display = "flex"
    background.style.display = "block"
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