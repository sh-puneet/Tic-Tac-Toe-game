let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let win = document.querySelector("#winnerTag");
let msgDisplay = document.querySelector("#hide");

let turn0 = true;

// Winning Patterns
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

// Inserting values
boxes.forEach((box)=> {
    box.addEventListener("click", () =>{
        if(turn0)
        {
            box.innerText = "O";
            turn0 = false;
        }
        else
        {
            box.innerText = "X";
            turn0 = true;
        }
    box.disabled = true;
    checkWinner();
    });
});

// Function to show winner
let winPlayer;
const showWinner = (winPlayer)=>{
    win.innerText = `Congratulations, Winner is "${winPlayer}"`;
    disableButton();
    msgDisplay.style.display  = "block";
}
// Function to disable
const disableButton = ()=>{
    for(box of boxes)
    {
        box.disabled = true;
    }
}

// To check winner
const checkWinner = ()=>{
    for (let patterns of winPatterns)
    {
        let pos0 = boxes[patterns[0]].innerText;
        let pos1 = boxes[patterns[1]].innerText;
        let pos2 = boxes[patterns[2]].innerText;
        
        if(pos0 !== "" && pos1 !== "" && pos2 !== "")
        {
            if(pos0 === pos1 && pos1 === pos2)
            {
                showWinner(pos0);
            }
        }
    }
}

// Reset button
resetBtn.addEventListener("click", ()=>{
    msgDisplay.style.display  = "none";
    for(box of boxes)
    {
        box.innerText = "";
        box.disabled = false;
        turn0 = true;
    }
});
