var hundredths=Math.floor((Math.random()*3)+1)*100;
var tens=Math.floor((Math.random()*3)+1)*10;
var ones=Math.floor((Math.random()*3)+1)*1;
var code = hundredths+tens+ones;
var timer = 7;
var current = 0;
var multiplier = 100;
let d = false;

const paragraph = document.getElementById('history');
const paragraph2 = document.getElementById('trial');
const paragraph3 = document.getElementById('timer');
const paragraph4 = document.getElementById('hint');
const buttons = document.querySelectorAll('button');

for(const button of buttons){
    button.addEventListener("click", attempt);
}


function attempt(x){
    paragraph3.textContent = timer;
   if(x.target.id=="clear"){
    paragraph2.textContent = "Guess: ";
    current = 0;
    multiplier = 100;
    if(d){
        newGame();
    }
    d=false;
   }
   if(x.target.id=="one"){
    paragraph2.textContent+="1";
    current += 1*multiplier;
    multiplier/=10;
    if(current%10 != 0){
        check();
       }
   }
   if(x.target.id=="two"){
    paragraph2.textContent+="2";
    current += 2*multiplier;
    multiplier/=10;
    if(current%10 != 0){
        check();
       }
   }
   if(x.target.id=="three"){
    paragraph2.textContent+="3";
    current += 3*multiplier;
    multiplier/=10;
    if(current%10 != 0){
        check();
       }
   }
}
function check(){
    paragraph.textContent += current + "\r\n";
    multiplier = 100;
    if(current==code){
        paragraph4.textContent = "Hint: "
        paragraph2.textContent = "Code is cracked! Click clear to start a new game";
        d= true;
    }else{
        timer--;
        paragraph3.textContent = timer;
        if(current<code){
            paragraph4.textContent ="Hint: Code is higher";
        }else if(current>code){
            paragraph4.textContent ="Hint: Code is lower";
        }
        current = 0;
        paragraph2.textContent ="Guess: ";
    }
    if(timer == 0){
        paragraph4.textContent = "Hint: "
        paragraph2.textContent ="Timers up! You were caught by police! Click Clear to start a new game"; 
        d= true;
    }
}

function newGame(){
    hundredths=Math.floor((Math.random()*3)+1)*100;
    tens=Math.floor((Math.random()*3)+1)*10;
    ones=Math.floor((Math.random()*3)+1)*1;
    code = hundredths+tens+ones;
    paragraph.textContent = "";
    paragraph2.textContent = "Guess: ";
    timer = 7;
    multiplier = 100;
    current = 0;
    paragraph4.textContent = "Hint: " 
}