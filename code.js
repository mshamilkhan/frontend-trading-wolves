var menu = document.getElementById('menu')
mobnav.style.left = "-60rem"
menu.addEventListener('click', function () {
    if (mobnav.style.left === "-60rem") {
        mobnav.style.left = "0rem";
    }
    else {
        mobnav.style.left = "-60rem"
    }
});

const numberElement = document.getElementById('million');
const targetNumber = 6000000; // The number you want to reach
const animationSpeed = 50; // Milliseconds delay between number increments

function increaseNumber() {
    for (let currentNumber = 0; currentNumber <= targetNumber; currentNumber += 100) {
        setTimeout(() => {
            numberElement.textContent = currentNumber;
        }, animationSpeed / currentNumber);
    }
}

increaseNumber();




const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
},
    { threshold: 0.4, }
);

cards.forEach(card => {
    observer.observe(card)
})



const cardsx = document.querySelectorAll(".cardx");
const observerx = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("showx", entry.isIntersecting)
    })
},
    { threshold: 0.4, }
);

cardsx.forEach(cardx => {
    observerx.observe(cardx)
})


const cardsY = document.querySelectorAll(".cardY");
const observerY = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("showY", entry.isIntersecting)
    })
},
    { threshold: 0.4, }
);

cardsY.forEach(cardY => {
    observerY.observe(cardY)


})


// SLIDER 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});