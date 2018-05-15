const maze = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW"
];

let playerTop = 200;
let playerLeft = 200;

const drawBoard = () => {
    const theMaze = document.getElementById("wrapper")


    for (let column of maze) {
        let colElement = document.createElement("div");
        colElement.classList.add("colElement");
        theMaze.appendChild(colElement);
        

        for (let cell of column) {

            let cellElement = document.createElement("div")
            cellElement.classList.add("cell");

            colElement.appendChild(cellElement);

            if (cell === "W") {
                cellElement.classList.add("wall");
                cellElement.dataset.Cell = 1;

            }else if(cell === "S"){
                cellElement.classList.add("start")

            }else if(cell === "F"){
                cellElement.classList.add("end")
            }
        }
    }

}

const playerMove = () => {
    document.addEventListener('keydown', (event) => {

            switch (event.key) {
                case "ArrowDown":

                    playerTop += 8;
                    document.getElementById("player").style.top = playerTop + "px";

                    break;

                case "ArrowUp":

                    playerTop -= 8;
                    document.getElementById("player").style.top = playerTop + "px";


                    break;

                case "ArrowLeft":

                    playerLeft -= 8;
                    document.getElementById("player").style.left = playerLeft + "px";
                    break;

                case "ArrowRight":

                    playerLeft += 8;
                    document.getElementById("player").style.left = playerLeft + "px";


                    return;

            }
        }

    )
}


playerMove();
drawBoard();