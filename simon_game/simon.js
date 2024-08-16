let gameseq = [];
let userSeq = [];

let h4=document.querySelector("h4");
h4.innerText=`High score= ${JSON.parse(localStorage.getItem('user'))}`;
h4.style.marginLeft="900px";


let user=[];
let btns = ["red","orange","blue","purple"];

let start=false;
let lvl=0;
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(start==false){
    console.log("game started");
    levelup();
    start=true;
    }
})

function flash(btn){
btn.classList.add("flash");
setTimeout(() => {
    btn.classList.remove("flash");
}, 250);


}

function levelup(){
    userSeq=[];
    lvl++;
    h3.innerText=`Level ${lvl}`;
    let rnd=Math.floor(Math.random()*3);
    let rndcolor=btns[rnd];
    gameseq.push(rndcolor);
    let rndbtn=document.querySelector(`.${rndcolor}`);
    flash(rndbtn);
}
function checkans(idx){
    if(userSeq[idx]===gameseq[idx]){
        if(userSeq.length==gameseq.length){
          setTimeout(levelup,750);
        }
    }
    else{
        h3.innerText=`Game Over! press any key to restart \n score: ${lvl*10}`;
        let score=JSON.parse(localStorage.getItem('user'));
        console.log(score)
        if(lvl*10>score)
        localStorage.setItem("user",lvl*10);
        restart();
    }

}

function press(){
    let btn=this;
    flash(btn)
    let userbtn=btn.getAttribute("id");
    userSeq.push(userbtn);

    checkans(userSeq.length-1)

}

let allbnts=document.querySelectorAll(".btn")
for(btn of allbnts){
    btn.addEventListener("click",press);
}

function restart(){
    gameseq=[];
    userSeq=[];
    start=false;
    lvl=0;
}