

const showNav = document.getElementById("show-nav")
const hideNav = document.getElementById("hide-nav")
const nav = document.getElementById("nav-component")

// On clicking on showNav, show or hide nav depending on its current state


showNav.addEventListener("click", () => {
    if (nav.classList.contains("active")) {
        nav.classList.remove("active");
        showNav.innerHTML = '<img src="/images/menu.svg" alt="">'
    } else {
        nav.classList.add("active");
        showNav.innerHTML = `
            <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>Close Icon</title>
                <line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `
    }
});

// Reset nav location on bigger screens
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        nav.style.margin = "0 0 0 0"
    } else {
        nav.style.margin = "0 200% 0 0"
    }
});