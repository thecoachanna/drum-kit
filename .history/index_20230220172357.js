
var drumButtons = document.querySelectorAll(".drum");
 
for (var drumButton of drumButtons) {
  drumButton.addEventListener("click", function() {
      
      var buttonInnerHTML = this.innerHTML
      
      switch (buttonInnerHTML) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
audio.play();
            break;
      
        default:
            break;
      }
  });
}

