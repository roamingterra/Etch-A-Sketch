//Create a div element and give it an id name of etch-a-sketch
const etchASketch = document.createElement('div');
etchASketch.setAttribute('id', 'etchASketch');

//Append the main div element to the body of the html
document.body.appendChild(etchASketch);

//Create an array to contain all of the 16 div elements, and an array to contain all of the span elements
const rows = [];
const squares = [];
for(let i=0; i<16; i++){ //JavaScript doesn't have multi-dimentional arrays, but you can store objects/arrays in an array
    squares[i]=[];
}
//Create 16 div elements using a for loop. Give each element an ID of a number from 1-16
for(let i=0; i<16; i++){
    rows[i] = document.createElement('div');
    rows[i].setAttribute('id', `row`); //${i+1}
    etchASketch.appendChild(rows[i]);

    //Create 16 span elements per div element and place them in the div elements using a nested for loop
    for(let j=0; j<16; j++){
        squares[i][j] = document.createElement('span');
        squares[i][j].classList.add(`square`);
        squares[i][j].classList.add(`${i+1}X${j+1}`);
        //squares[i][j].textContent = "*"; //Placeholder text for now to display something in the page
        rows[i].appendChild(squares[i][j]);
    }
}

//Log to the console to see the tree of elements
//console.log(etchASketch);