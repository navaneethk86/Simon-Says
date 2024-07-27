let userStack =[];
let gameStack = [];
let started = false;
let LevelCount = 0;
let headder2 = document.querySelector("#headder2");
let div1 = document.querySelector(".orange");
let Color = ["orange","blue","red","violet"];
//div1.classList.add("flash");
// div1.classList.add("flash") ;
// div1.classList.add(".flash");

function flashButton( button){
   // alert("start");
    button.classList.add("flash");
    gameStack.push(button.getAttribute("id"));
    console.log(`game stack ${gameStack}`);
    setTimeout(()=>{
        button.classList.remove("flash");
    },400);
    
    }

    function userflash(button){
        button.classList.add("userflash");
        
        setTimeout(()=>{
            button.classList.remove("userflash");
        },400);
    }


    

function buttonPress(){
    if(started){
    console.log("button pressed...");
    userflash(this);
   
    userStack.push(this.getAttribute("id"));
    console.log(`user stack ${userStack}`);
    if(Result()){
        console.log("correct")
        if(userStack.length==gameStack.length){
        setTimeout(levelUp,1000);
        }
    }else{
        started=false;
        console.log("wrong")
        console.log(`game over.. saiman said ${gameStack[gameStack.length-1]} you said ${userStack[gameStack.length-1]}`);
       headder2.innerText ="game over press key to start the game";
        //allbutton=NaN;
        userStack=[];
        gameStack=[];
        LevelCount=0;
        started=false;
       // levelUp();
       let body1 = document.querySelector("#body1");
       body1.classList.add("errorDisplay");
       setTimeout(()=>{
           body1.classList.remove("errorDisplay");
       },150);
      

        
    }
    }
   
}

let levelUp = ()=>{
    headder2.innerText = `level ${LevelCount++}`; 
    let index = Math.floor(Math.random()*3)+1;
    let button1 = document.querySelector(`.${Color[index]}`);
  //  gameStack.push(Color[index]);
    flashButton(button1);
    userStack=[];
   
}

let allbutton = document.querySelectorAll(".btn");

for(Btn of allbutton){
    Btn.addEventListener("click",buttonPress);
}

function Result(){
    if(userStack[userStack.length-1] == gameStack[userStack.length-1]){
        return true;
    }
    return false;
}

//EVENT listner 1
document.addEventListener("click", function(){
    if(started==false){
    console.log("game is on");
    started=true;
    setTimeout(levelUp,1000);  
} 

});
