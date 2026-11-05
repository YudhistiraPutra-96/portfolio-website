const hamburger = document.querySelector(".hamburger")
let navLinks = document.querySelector(".nav-links")

hamburger.addEventListener("click", function () { 
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("active");
});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(item) {
    item.addEventListener("click", function() {
        navLinks.classList.remove("open");
    });
});





let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode','active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode',null)
}

if(darkmode==="active")enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})






const aosElements = document.querySelectorAll('[data-aos]');
const aosObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.1
});

aosElements.forEach(el => {
    aosObserver.observe(el);
});