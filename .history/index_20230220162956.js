
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelector('button').addEventListener("click", handleClick)

    function handleClick() {
        alert("I got clicked.")
    }
}
