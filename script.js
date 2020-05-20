const container = document.querySelector('#container');
const refresh = document.getElementById('button');
generateGrid(16);

function generateGrid(side) {

    const gridLength = side * side;

    for (let i = 0; i < gridLength; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('id', 'square' + (i + 1));

        container.appendChild(square);

        square.addEventListener('mouseover', onSquareHover);
    }

    container.style.gridTemplateColumns = "repeat(" + side + "," + 960 / side + "px)";
    container.style.gridTemplateRows = "repeat(" + side + "," + 960 / side + "px)";

}


refresh.addEventListener('click', function (event) {
    const side = prompt('How many squares per side?');
    clearGrid();
    generateGrid(side);
})

function clearGrid() {
    container.innerHTML = "";
}

function onSquareHover(event) {
    event.target.style.backgroundColor = 'orange';
    setTimeout(function () {
        event.target.style.backgroundColor = "";
    }, 500);
}