
var drumButtons = document.querySelectorAll(".drum");
 
for (var drumButton of drumButtons) {
  drumButton.addEventListener("click", function() {
      
      var buttonInnerHTML = this.innerHTML
      
      switch (buttonInnerHTML) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
              break;
        case "w":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom1.play();
            break;
      
        default:
            break;
      }
  });
}


