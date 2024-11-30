let pos = 0;
let gal = document.querySelector(".gal");
let right = document.querySelector(".right");
let left = document.querySelector(".left");


// gal pos with li btns
function galPos(pos){
    gal.style.left= pos +"%";
    

}


// move right slider:
function moveRight(){
    if(pos > -300){
        pos = pos - 100;
        gal.style.left = pos + "%";
    }
    else {
        pos = 0;
        gal.style.left = pos + "%";
    }
    selector(pos/-100);
}

// move left slider:
function moveLeft(){
    if(pos < 0){
        pos = pos + 100;
        gal.style.left = pos + "%";
    }
    selector(pos/-100);

}

// add selected class:
li = document.querySelectorAll("ul.go li");
function selector(i){

    for(s=0; s<=3; s++)li[s].className= "";
    li[i].className = "selected";

    pos= i*-100;
    galPos(pos);
}

// slider timer
function galTimer(){
    moveRight(pos);
    selector(pos/-100);
}

var start;
play();
gal.addEventListener("mouseover", function(){
    pause();
})

function play(){
    start = setInterval("galTimer()", 3000);
}

gal.addEventListener("mouseout", function(){
    play();
    
})

function pause(){
    clearInterval(start);
}

