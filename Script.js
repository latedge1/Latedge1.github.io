/* global $, document*/ 

// var button = document.getElementById("clicky");
// button.addEventListener("click", function toggleText() {
//     var extras = document.getElementById("extras");
//     if (extras.style.display === "none") {
//         extras.style.display = "block";
//     } else {
//         extras.style.display = "none";
//     }
// });

function toggleText() {
    var extras = document.getElementById("extras");
    var extrass = document.getElementById("extrass");
    extras.classList.toggle("invisible");
    extrass.classList.toggle("invisible");
}
