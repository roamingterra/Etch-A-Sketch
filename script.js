function generateEtchASketch(size){
    //Populate the arrays based on the chosen resolution
    for(let i=0; i<size; i++){ //JavaScript doesn't have multi-dimentional arrays, but you can store objects/arrays in an array
        squares[i]=[];
        colors[i]=[];
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
            squares[i][j].classList.add(`${i}X${j}`); //`${i+1}X${j+1}`
            //squares[i][j].textContent = "*"; //Placeholder text for now to display something in the page
            rows[i].appendChild(squares[i][j]);
        }
    }
}

function randomRGB (){
    let num = Math.floor(Math.random()*256); //RBG has values between 0 and 256
    return num;
}

function divideByTen (num){ //Used for the gradual darkening of each square
    return (Math.ceil(num/10));
}

//Statically created element in the html file
let etchASketch = document.querySelector('#etch-a-sketch');

//Create an array to contain all of the div elements, and an array to contain all of the span elements
let rows = [];
let squares = [];

//Create array to keep track of random RGB colour assigned to square, and two variables to keep track of position in array
colors = [];
let i = 0;
let j = 0;

//Initialize variables for red, green, and blue to find the number to reduce from the original rgb colours
let red = 0;
let green = 0;
let blue = 0;

//Call on function to generate the Etch-A-Sketch game
generateEtchASketch(16);

//Event listener for when the button is pressed. User will be prompted to change the pixel size to a max of 100X100
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    let size; //The board starts at a 16X16 resolution
    size = parseInt(prompt('What do you want the resolution to be?\n The default resolution is 16X16, and the max is 100X100', 16));
    console.log(isNaN(size));
    if (isNaN(size)||size>100||size<=0){
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
etchASketch.addEventListener('mouseover', (event) => {
    if(event.target.matches('.square')){
        if(event.target.style.backgroundColor===""){ //Square will only be given a new colour if it's white
            event.target.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`; //Assign square random colour

            i = event.target.className.match('[0-9]');
            j = event.target.className.match('(?<=X)[0-9]');

            colors[i][j] = event.target.style.backgroundColor; //Save randomly assigned square colour in memory

            console.log(event.target);
        }
        else{
            //Get the RGB colour from the array, divide each number by ten, then take that number and subtract it from the element's current number
            i = event.target.className.match('[0-9]'); //Match first dimension of array from class name and store in temp variable
            j = event.target.className.match('(?<=X)[0-9]'); //Match second dimension of array from class name and store in temp variable

            red = event.target.style.backgroundColor.match('[0-9]+?(?=,)') //Match rgb red number from square element, and store in temp variable
            green = event.target.style.backgroundColor.match('(?<=, )[0-9]*?(?=,)');//Match rgb green number from square element, and store in temp variable
            blue = event.target.style.backgroundColor.match('(?<=, )[0-9]*?(?=[)])');//Match rgb blue number from square element, and store in temp variable

            red = red - (divideByTen(colors[i][j].match('[0-9]+?(?=,)'))); //New red becomes old red minus dividing number obtained from original red
            green = green - (divideByTen(colors[i][j].match('(?<=, )[0-9]*?(?=,)'))); //New green becomes old green minus dividing number obtained from original green
            blue = blue - (divideByTen(colors[i][j].match('(?<=, )[0-9]*?(?=[)])'))); //New blue becomes old blue minus dividing number obtained from original blue

            event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; //update square colour

            console.log(event.target);
        }
    }
})

