function generateEtchASketch(size){
    //Populate the arrays based on the chosen resolution
    for(let i=0; i<size; i++){ //JavaScript doesn't have multi-dimentional arrays, but you can store objects/arrays in an array
        squares[i]=[];
    }
    //Create 16 div elements using a for loop. Give each element an ID of a number from 1-16
    for(let i=0; i<size; i++){
        rows[i] = document.createElement('div');
        rows[i].setAttribute('id', `row`); 
        etchASketch.appendChild(rows[i]);

        //Create 16 span elements per div element and place them in the div elements using a nested for loop
        for(let j=0; j<size; j++){
            squares[i][j] = document.createElement('span');
            squares[i][j].classList.add(`square`);
            squares[i][j].classList.add(`${i+1}X${j+1}`);
            //squares[i][j].textContent = "*"; //Placeholder text for now to display something in the page
            rows[i].appendChild(squares[i][j]);
        }
    }
}

//Statically created element in the html file
let etchASketch = document.querySelector('#etch-a-sketch');

//Create an array to contain all of the 16 div elements, and an array to contain all of the span elements
let rows = [];
let squares = [];

//Call on function to generate the Etch-A-Sketch game
generateEtchASketch(16);

//Event listener for when the button is pressed. User will be prompted to change the pixel size to a max of 100X100
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    let size = 16;
    size = parseInt(prompt('How big do you want the pixels to be?\n The default resolution is 16X16, and the max is 100X100'));
    if (size>100||size<0||size===""||size===null||size===undefined){
        alert('Sorry, that is an invalid value');
    }
    else {
        etchASketch.textContent = ""; //dismantles the dom tree that makes the game board
        rows = []; //clear these arrays to then be populated by the new desired amount of elements
        squares = [];
        generateEtchASketch(size);
    }
})

//Event listener for when mouse hovers over the square, to then change the colour of the square
//NOTE: The squares found in the playing board are dynamically created. I learned that adding an event
//listener to elements with a referenced class does not mean that the event listener is associated with
//the class, it is associated to the element(s). When an element is deleted, and new elements are 
//dynamically created, the event listener is gone. To solve this, you have to take advantage of event
//propagation. Add the event listener to a statically created parent, and commit the event to the dynamic
//children through the use of conditional statements.

etchASketch.addEventListener('mouseover', (event) => {
    if(event.target.matches('.square')){
        event.target.style.backgroundColor = 'black';
        console.log(event.target);
    }
})
