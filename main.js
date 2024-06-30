let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container")
let turno=true;
const winpatterns=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,4,6],
  [2,5,8],
  [3,4,5,],
  [6,7,8],
  ];
  const resetgame = () => {
    turno=true;
    enableboxes();
    msgcontainer.classList.add("hide");
  }; 
  boxes.forEach((box)=> {
    box.addEventListener('click',()=> {
      console.log("box was clicked");
     if (turno) {
       box.innerText="o";
       turno=false;
       box.style.color="red";
     } else {
       box.innerText="x";
       turno=true;
       box.style.color="blue";
     }
     box.disabled=true;
     checkwinner();
    });
  });
  const disabledboxes=()=> {
    for (let box of boxes) {
      box.disabled=true;
    }
  };
  const enableboxes=()=> {
    for (let box of boxes) {
      box.disabled=false;
      box.innerText="";
    }
  };
  const showwinner = (winner)=> {
    alert(msg.innerText=`congratulation,winner is ${winner}`);
    msgcontainer.classList.remove("hide");
    disabledboxes();
};
const checkwinner=() => {
  for (let pattern of winpatterns) {
   let pos1val=boxes[pattern[0]].innerText;
   let pos2val=boxes[pattern[1]].innerText;
   let pos3val=boxes[pattern[2]].innerText;
   
   if (pos1val !="" && pos2val !="" && pos3val !="") {
     if (pos1val === pos2val && pos2val === pos3val) {
       console.log("Winner",pos1val);
       showwinner(pos1val);
     }
   }
  }
};
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
