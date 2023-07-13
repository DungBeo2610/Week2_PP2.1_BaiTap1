let imgball = null;
imgball = document.getElementById('ball');
function init(){
    imgball=document.getElementById('ball');
    imgball.style.position = 'relative';
    imgball.style.left ='0px' ;
}
function moveRight(){
    imgball.style.left = parseInt(imgball.style.left) + 10 +'px';
}
window.onload = init;



