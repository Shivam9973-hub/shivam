let string="";
let buttons=document.querySelectorAll(".button");

buttons.forEach((button)=>{
   button.addEventListener("click",(e)=>{
    // console.log(e.target)
    if(e.target.innerHTML==="c"){
        string=""
        document.querySelector("input").value=string
    }
    else if(e.target.innerHTML==="="){
        string=eval(string);
        document.querySelector("input").value=string
    }
    else{
    string=string+e.target.innerHTML;
    document.querySelector("input").value=string;
    }
   })
})