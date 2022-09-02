let prevScrollpos = window.pageYOffset;
const navBar = document.querySelector(".main_navbar--lower_section");

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos >= 100) {
        navBar.classList.add("navbar--fixed");
    }
    else {
        navBar.classList.remove("navbar--fixed");
        navBar.style.top = "0";
    }
    if (prevScrollpos >= 100) {
        if (prevScrollpos > currentScrollPos) {
            navBar.style.top = "-35px";
            navBar.style.visibility = "visible";
            navBar.style.opacity = "1";
        } else {
            navBar.style.top = "-250px";
            navBar.style.visibility = "hidden";
            navBar.style.opacity = "0";
        }
    }
    prevScrollpos = currentScrollPos;
}
const naviconcontainer = document.querySelectorAll(".main_navbar--lower_section-list_item");
const navicon = document.querySelectorAll(".fa-turn-down");
const contains = (parent, child) => {
    return parent !== child && parent.contains(child);
};

naviconcontainer.forEach((container) => {
    container.addEventListener("mouseenter", () => {
        navicon.forEach((icon) => {
            if (contains(container, icon)) {
                icon.classList.add("fa-shake");
            }
        })
    })
})
naviconcontainer.forEach((container) => {
    container.addEventListener("mouseleave", () => {
        navicon.forEach((icon) => {
            icon.classList.remove("fa-shake");
        })
    })
})
const openMenuButton = document.querySelector(".navbar_menu-button");
const closeMenuButton = document.querySelector(".close_button");
const menu = document.querySelector(".mobile_navbar");
const backdrop = document.querySelector(".backdrop");

openMenuButton.addEventListener("click", () => {
    menu.classList.add("show_navbar");
    backdrop.style.display = "block";
})
closeMenuButton.addEventListener("click", () => {
    menu.classList.remove("show_navbar");
    backdrop.style.display = "none";
})
document.addEventListener("click", (event) => {
    let menuButtonclicked = openMenuButton.contains(event.target);
    let menuclicked = menu.contains(event.target);
    if (!menuButtonclicked && !menuclicked) {
        menu.classList.remove("show_navbar");
        backdrop.style.display = "none";
    }
})
document.addEventListener("scroll", (event) => {
        menu.classList.remove("show_navbar");
        backdrop.style.display = "none";
})