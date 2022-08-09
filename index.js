                    onload = () => {


                    let playerstateTitleElement = document.getElementById('playerStateTitle');
                    playerstateTitleElement.innerHTML = "its player 1's turn";
                    let cellsResults = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                    cellsElements = document.getElementsByTagName('td');
                    let p1 = 'X';
                    let p2 = 'O';
                    let defaultValue = p1;
                    for (let cellPosition in cellsElements) {
                    cellsElements[cellPosition].onclick = function () {
                    this.innerHTML = defaultValue;
                    cellsResults[cellPosition] = defaultValue;
                    defaultValue = (defaultValue == p1) ? p2 : p1;

                    if (defaultValue == 'X') {
                    cellsElements[cellPosition].style.color = 'red';
                    playerstateTitleElement.innerHTML = "its player 1's turn";

                    }
                    else {
                    cellsElements[cellPosition].style.color = 'blueviolet';
                    playerstateTitleElement.innerHTML = "its player 2's turn";
                    }

                    this.onclick = null;
                    let result = checkWinner();
                    if (result == 'O') {

                    gameEnd('player 2 won!');
                    }
                    else if (result == '') {
                    gameEnd('draw');
                    }

                    else if (result == 'X') {
                    gameEnd('player 1 won!');

                    }
                    }
                    }



                    function checkWinner() {
                    console.log(cellsResults);
                    for (let i = 0, symbol = 'X'; i < 2; i++, symbol = 'O') {

                    if (cellsResults[0] == symbol && cellsResults[1] == symbol && cellsResults[2] == symbol) {
                    return symbol;
                    }
                    else if (cellsResults[3] == symbol && cellsResults[4] == symbol && cellsResults[5] == symbol) {
                    return symbol;
                    }

                    else if (cellsResults[1] == symbol && cellsResults[4] == symbol && cellsResults[7] == symbol) {
                    return symbol;
                    }
                    else if (cellsResults[6] == symbol && cellsResults[7] == symbol && cellsResults[8] == symbol) {
                    return symbol;
                    }
                    else if (cellsResults[0] == symbol && cellsResults[3] == symbol && cellsResults[6] == symbol) {
                    return symbol;
                    }
                    else if (cellsResults[2] == symbol && cellsResults[5] == symbol && cellsResults[8] == symbol) {
                    return symbol;
                    }
                    else if (cellsResults[6] == symbol && cellsResults[4] == symbol && cellsResults[2] == symbol) {
                    return symbol;
                    }
                    else if (cellsResults[0] == symbol && cellsResults[4] == symbol && cellsResults[8] == symbol) {

                    return symbol;
                    }


                    }

                    if (!cellsResults.includes(0))
                    return '';


                    }
                    function gameEnd(result) {

                    let resetButton = document.getElementById('reset');
                    setTimeout(() => {
                    alert(result);
                    playerstateTitleElement.innerHTML = result;
                    resetButton.style.visibility = 'visible';
                    }, 200);

                    for (let cellElement of cellsElements) {
                    cellElement.onclick = null;
                    }


                    resetButton.onclick = function () {
                    resetGame();
                    this.style.visibility = 'hidden';

                    }
                       }

                    function resetGame() {

                    for (let cellElement of cellsElements) {
                    cellElement.innerHTML = '';

                    }
                    onload();
                    }

                    }

