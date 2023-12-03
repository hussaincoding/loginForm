function myfunction() {
    let dropdown = document.getElementById("dropdown-content")
    dropdown.classList.toggle("live")
    gsap.from(".nav-items", {
    x: 100,
    duration:1
})
}
function closeMenu() {
    let dropdown = document.getElementById("dropdown-content");
    dropdown.classList.remove("live"); 
}
