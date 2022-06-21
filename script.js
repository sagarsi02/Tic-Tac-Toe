console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";
let isGameOver = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// Function to check for a win
const checkWin = () => {
        let boxtext = document.getElementsByClassName("boxtext");
        let wins = [
            [0, 1, 2, 2, 3, 0, 2, 10, 0],
            [3, 4, 5, 2, 10, 0, 2, 30, 0],
            [6, 7, 8, 2, 17, 0, 2, 50, 0],
            [0, 3, 6, -5, 10, 90, -17, 30, 90],
            [1, 4, 7, 2, 10, 90, 3, 30, 90],
            [2, 5, 8, 9, 10, 90, 23, 30, 90],
            [0, 4, 8, 2, 10, 45, 2, 29, 45],
            [2, 4, 6, 2, 10, 135, 2, 29, 135],
        ]
        wins.forEach(e => {
            if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && boxtext[e[2]].innerText === boxtext[e[1]].innerText && (boxtext[e[0]].innerText !== "")) {
                document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
                isGameOver = true;
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "250px";
                // music.play();
                // document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw)rotate(${e[5]}deg)`;
                // document.querySelector('.line').style.width = "17vw";

                function myFunction(x) {
                    if (x.matches) {
                        document.querySelector('.line').style.transform = `translate(${e[6]}vw, ${e[7]}vw)rotate(${e[8]}deg)`;
                        document.querySelector('.line').style.width = "55vw";
                    } else {
                        document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw)rotate(${e[5]}deg)`;
                        document.querySelector('.line').style.width = "17vw";
                    }
                }

                var x = window.matchMedia("(max-width: 700px)")
                myFunction(x)
                x.addListener(myFunction)

            }
        })
    }
    // music.play();

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
});

// Reset Listener Function

reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isGameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.line').style.width = "0vw";
    music.pause();
})