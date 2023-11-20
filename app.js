let gameseq=[];
let userseq=[];

let btns=['yello','green','red','purple'];

let started=false;
let level=0;
let h2=document.querySelector('h2');


document.addEventListener('keypress',function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelup();
    }
   
});
function gameFlash(btn){
btn.classList.add("flash")
setTimeout(function(){
    btn.classList.remove('flash');
},250)
}

function userFlash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove('userflash');
    },250)
    }

function levelup(){
    userseq=[];
level++;
h2.innerText=`Level  ${level}`;

let randIdx=Math.floor(Math.random()*3);
let randclr=btns[randIdx];
let randbtn=document.querySelector(`.${randclr}`);
gameseq.push(randclr);
console.log(gameseq);

gameFlash(randbtn);
}


function checkans(idx){
    // console.log("current level",level);
    
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
           setTimeout(levelup,1000);
        }
    }else{
      h2.innerHTML=`Game Over !your score is <b>${level}</b> <br> please enter any key to start again!.`
      document.querySelector("body").style.backgroundColor='red';
      setTimeout(function(){
        document.querySelector("body").style.backgroundColor='white';

      },250)
      reset();
    }
}

function btnpress(){
    let btn=this;
    userFlash(btn);

    usercolor=btn.getAttribute('id');
    console.log(usercolor);
    userseq.push(usercolor);
    checkans(userseq.length-1);
}


let allbtns=document.querySelectorAll('.btn');
for(btn of allbtns){
btn.addEventListener('click',btnpress);
}

function reset(){
    started=false;
    gameseq=[];
     userseq=[];
     level=0;
    
}