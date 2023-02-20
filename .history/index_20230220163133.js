
var numberOfDrumButtons = document.querySelectorAll(".drum").length

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelector('button')[i].addEventListener("click", handleClick)

    function handleClick() {
        alert("I got clicked.")
    }
}
