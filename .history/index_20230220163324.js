
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelector("")[i].addEventListener("click", function () {
        alert("I got clicked!")
    })
}
