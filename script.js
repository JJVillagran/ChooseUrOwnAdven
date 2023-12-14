console.log("check");





let startScreen = document.querySelector(".startScreen");
console.log("startScreen");

let mournButton = document.querySelector(".mournButton"); 
console.log("mournButton");

mournButton.addEventListener("click", function() {
  mournScreen.style.display = "block";
  startScreen.style.display = "none";
});
                             
let copeButton = document.querySelector(".copeButton");
console.log("copeButton");

copeButton.addEventListener("click", function() {
  copeScreen.style.display = "block";
  startScreen.style.display = "none";
});





let mournScreen = document.querySelector(".mournScreen");
console.log("mournScreen");

let refuseDrinkScreen = document.querySelector(".refuseDrinkScreen");
console.log("refuseDrinkScreen");

let refuseDrinkButton = document.querySelector(".refuseDrinkButton");
console.log("refuseDrinkButton");

refuseDrinkButton.addEventListener("click", function() {
  mournScreen.style.display = "none";
  refuseDrinkScreen.style.display = "block";
});





let copeScreen = document.querySelector(".copeScreen");
console.log("copeScreen");

let refuseCoffeeScreen = document.querySelector(".refuseCoffeeScreen");
console.log("refuseCoffeeScreen");

let refuseCoffeeButton = document.querySelector(".refuseCoffeeButton");
console.log("refuseCoffeeButton");

refuseCoffeeButton.addEventListener("click", function() {
  refuseCoffeeScreen.style.display = "block";
  copeScreen.style.display = "none";
});





let acceptScreen = document.querySelector(".acceptScreen");
console.log("acceptScreen");

let acceptButton = document.querySelector(".acceptButton");
console.log("acceptButton");

acceptButton.addEventListener("click", function() {
  acceptScreen.style.display = "block";
  copeScreen.style.display = "none";
  mournScreen.style.display = "none";
});





let okScreen = document.querySelector(".okScreen");
console.log("okScreen");

let okButton = document.querySelector(".okButton");
console.log("okButton");

let h1 = document.querySelector("h1");
console.log("h1");

okButton.addEventListener("click", function() {
  h1.innerHTML = "Ẁ̷̨̛͍̹̎̔̇̀͌i̸̝̒́̂̌͑̄̅̾̓́̆͘͠t̸̳͋ḥ̸̛̼͉̠̲̖̗̹̺͐̌̅̓̐̓͛̈́̚͝͝͝͝ö̷̧̢̡̧̧̡͇̪̰̞̦̘̹͎̲̺̟̣͇̹̬͈̱͔͈̬̝̤͛̈́͆̃̈͗̉̉̒́̀̌́̅͋̒͌͋̓̅̈́͐͂̔̂̌̇̚͜͠ͅù̴̡̨̞͉͓̜͇͓̰̤̝̩͖̻̭̩̤̩͔̽̅̎́͆t̴̪̦̪͌͒̉̇̎̉̂́̇͋̿͊̅̈́̈́͐̏̓̒̿͌͘͘͜͝ ̸̨͙̜̘͕̰̣̣̻̮͍͕͕̲̝͈̪̥̉͂̚͜͝Y̵̨̨͖͙̤̘̦̻͙̪̱͎̲̲͍̍͗͂́͐̔͌̅̑̈̐̅͋̓́̚͝͝ͅͅo̵̺͕͉̘̦̯̭̔͊̈́̀͘ủ̶̘̟̳̭̯̩̜̱̋̈́̿̽́̆̿̄͋͐́͒̕͝͝͝";
  okScreen.style.display = "block";
  acceptScreen.style.display = "none";
});





let wrongScreen = document.querySelector(".wrongScreen");
console.log("wrongScreen");

let wrongButton = document.querySelector(".wrongButton");
console.log("wrongButton");

wrongButton.addEventListener("click", function() {
  wrongScreen.style.display = "block";
  acceptScreen.style.display = "none";
});





// let fnafMP3 = document.getElementById("fnafMP").autoplay;