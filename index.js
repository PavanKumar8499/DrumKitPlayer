// buttons mouse press
var buttons = document.querySelectorAll(".drum")

for (var i = 0; i < buttons.length; i++) {

   buttons[i].addEventListener("click", function () {

      var press1 = this.innerHTML;

      makeSound(press1);
   });
}

// detecting keyboard press
document.addEventListener("keypress", function (event) {

   makeSound(event.key);

});




function makeSound(key) {
   switch (key) {
      case "w":
         var audio1 = new Audio('crash.mp3')
         audio1.play();
         break;
      case "a":
         var audio2 = new Audio('kick-bass.mp3')
         audio2.play();
         break;
      case "s":
         var audio3 = new Audio('snare.mp3')
         audio3.play();
         break;
      case "d":
         var audio4 = new Audio('tom-1.mp3')
         audio4.play();
         break;
      case "j":
         var audio5 = new Audio('tom-2.mp3')
         audio5.play();
         break;
      case "k":
         var audio6 = new Audio('tom-3.mp3')
         audio6.play();
         break;
      case "l":
         var audio7 = new Audio('tom-4.mp3')
         audio7.play();
         break;

      default:
        
         break;
   }
}
