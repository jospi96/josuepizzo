
let presentation = document.querySelector(".presentation")
document.addEventListener("DOMContentLoaded", function () {
    menu();
});
window.addEventListener("resize", function () {
    menu()
});
presentation.addEventListener("click", function () {
    menu();
});
document.addEventListener("scroll", function () {
    menu();
});

function menu() {
    let details = document.querySelector('details');
    let width = document.documentElement.clientWidth;
    if (width < 960 || width === 960) {
    
        details.removeAttribute("open", false);
    
    } else if (width > 960) {
        details.open = true;
    }
}
