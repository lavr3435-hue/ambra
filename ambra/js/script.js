// ==========================
// AMBRA BEAUTY STUDIO
// script.js
// ==========================

// Плавное появление блоков при прокрутке
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll("section, .card, .photo").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

// Изменение прозрачности шапки при прокрутке
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 80) {
        header.style.background = "rgba(255,255,255,.96)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
    } else {
        header.style.background = "rgba(255,255,255,.70)";
        header.style.boxShadow = "none";
    }
});

// Кнопка "Наверх"
const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.className = "top-button";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("visible");

    } else {

        topButton.classList.remove("visible");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// Плавное увеличение фотографий
document.querySelectorAll(".photo").forEach(photo=>{

    photo.addEventListener("mouseenter",()=>{

        photo.style.transform="scale(1.05)";

    });

    photo.addEventListener("mouseleave",()=>{

        photo.style.transform="scale(1)";

    });

});

// Анимация логотипа
const logo=document.querySelector(".logo img");

logo.addEventListener("mouseenter",()=>{

    logo.style.transform="rotate(-3deg) scale(1.08)";

});

logo.addEventListener("mouseleave",()=>{

    logo.style.transform="rotate(0deg) scale(1)";

});