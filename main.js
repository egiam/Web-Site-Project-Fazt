document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
    // document.querySelector(".nav-menu").className = "nav-menu show";
    //Si tiene show, lo elimina, si no tiene, lo agrega
});

//Reveal

ScrollReveal().reveal(".showcase");
ScrollReveal().reveal(".news-cards", { delay: 500 });
ScrollReveal().reveal(".cards-banner-one", { delay: 500 });
ScrollReveal().reveal(".cards-banner-two", { delay: 500 });

//