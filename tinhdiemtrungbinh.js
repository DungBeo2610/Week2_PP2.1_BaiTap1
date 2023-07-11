inputSience = prompt("enter the Sience");
inputLiterature = prompt("enter the Literature");
inputPhysic = prompt("enter the Physic");
let Sience = parseInt(inputSience);
let Literatre = parseInt(inputLiterature);
let Physic = parseInt(inputPhysic);
let Average = (Physic+Literatre+Sience)/3;
document.write("Average=" +Average);
