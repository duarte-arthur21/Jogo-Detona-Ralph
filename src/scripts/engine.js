const state = {
    view : {
        squares: document.querySelectorAll("square"),
        enemy : document.querySelectorAll(".enemy"),
        timeleft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },
    values: {
        timerId: null,
        gameVelocity: 1000,
    },
};
function randomSquare(){
    state.view.squares.forEach((square)=>{
        square.classList.remove("enemy");
    });

    let randomNumber = math.floor(Math.random() * 9);
    let randmSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
}

function moveEnemy(){
    state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);
}

function addListenerHitbox(){
    state.view.squares.forEach((square) => {
        // if(square.id === )
    });
}

function initialize() {
    moveEnemy()
}

initialize();