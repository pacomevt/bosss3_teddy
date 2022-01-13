var main_pos = document.querySelector("main").offsetTop - 100;

var body = document.querySelector("body");
window.addEventListener("scroll", function () {

    if (window.scrollY > main_pos ) {
        body.classList.add("scrolledat800");
    }
    else {
        body.classList.remove("scrolledat800");

    }
})
