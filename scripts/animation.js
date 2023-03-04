const values = document.querySelectorAll(".our_value");

const valuesAnimation = () => {
    values.forEach((value) => {
        boundingBox = value.getBoundingClientRect();
        if (boundingBox.top > -200 && boundingBox.top < window.innerHeight) {
            value.classList.add("swing_in_top_fwd");
            value.style.opcaity = "1";
        }
        else {
            value.classList.remove("swing_in_top_fwd");
            value.style.opacity = "0";
        }
    })
}
window.addEventListener("scroll", valuesAnimation);