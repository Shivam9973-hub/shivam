let userscore=0;
let compscore=0;
const message=document.getElementById("msg");
const score1=document.getElementById("comp-score");
const score2=document.getElementById("user-score");


const choices1=document.querySelectorAll(".choice");
const gencompchoice=()=>{
    const option=["rock","paper","scissor"];
    const index=Math.floor(Math.random()*3);
    return option[index];
}
const draw=()=>{
    message.innerText="game was draw";
    message.style.backgroundColor="black"
}
const playgame=(userchoice)=>{
   console.log("userchoice=",userchoice);
   const compchoice=gencompchoice();
   console.log("compchoice=",compchoice);
   if(compchoice===userchoice){
    console.log("game was draw")
    draw()
   }
   else if(userchoice==="rock"&&compchoice==="scissor"||userchoice==="paper"&&compchoice==="rock"||userchoice==="scissor"&&compchoice==="paper"){
  console.log("you win");
    userscore++;
    score2.innerText=userscore++
  message.innerText=`you win.${userchoice} beats ${compchoice}`
  message.style.backgroundColor="green"

   }
   else{
    console.log("you lose");
    compscore++;
    score1.innerText=compscore++
    message.innerText=`you lose.${compchoice} beats ${userchoice}`
  message.style.backgroundColor="red"
   }
}

choices1.forEach((choice)=>{
    choice.addEventListener("click",()=>{
     const userchoice=choice.getAttribute("id");
     playgame(userchoice)
   
    });
});
