var allButtons = document.querySelectorAll(".drum");
var noOfDrums = document.querySelectorAll(".drum").length;


for(var i=0 ; i < noOfDrums; i++){
   allButtons[i].addEventListener("click" , function()
   {
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
   });
}


document.addEventListener("keypress" , function(event)
{
    var key =  event.key;
    makeSound(key);
    buttonAnimation(key);
});

function makeSound(key)
{
  switch (key) {

    case "a":
           var tom1 = new Audio("sounds/tom-1.mp3")
           tom1.play();
      break;

    case "s":
           var tom2 = new Audio("sounds/tom-2.mp3")
           tom2.play();
      break;

    case "d":
          var tom3 = new Audio("sounds/tom-3.mp3")
          tom3.play();
          break;

    case "f":
          var tom4 = new Audio("sounds/tom-4.mp3")
          tom4.play();
          break;

    case "j":
          var kick = new Audio("sounds/kick-bass.mp3")
          kick.play();
            break;

    case "l":
           var crash = new Audio("sounds/crash.mp3")
           crash.play();
           break;

    case "k":
          var snare = new Audio("sounds/snare.mp3")
          snare.play();
          break;

   default: console.log(buttonInnerHTML);
     break;
  }
}

function buttonAnimation(key)
{
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function() {

    activeButton.classList.remove("pressed");} , 100);

}
