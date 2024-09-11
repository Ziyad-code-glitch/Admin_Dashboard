// Open & Close Menue-Btn
let aside = document.querySelector("aside");
let menueBtn = document.querySelector(".menue-btn");
let closeBtn = document.querySelector("#close-btn");

menueBtn.addEventListener("click", ()=>{

    aside.style.display = "block";

});

closeBtn.addEventListener("click", ()=>{

    aside.style.display = "none";

});


// Theme Toggler
let themeToggler = document.querySelector(".theme-toggler");

themeToggler.addEventListener("click", ()=>{

    document.body.classList.toggle("dark-theme");

    themeToggler.querySelector("i:nth-child(1)").classList.toggle("active");
    themeToggler.querySelector("i:nth-child(2)").classList.toggle("active");

});

