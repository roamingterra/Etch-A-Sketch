# Etch-A-Sketch
Application with a game board. This game board starts out as a 16 by 16 board
with white pixels. When the user moves their cursor over the board, the pixels
are assigned a random colour. Every subsequent time the cursor passes over the
coloured pixel, the pixel colour darkens by 10%, until the pixel colour becomes
black after 10 passes after the original colour assignment. 

Main skill put into practice was more javascript. The newest skill in my arsenal
that I put into practice for this project was dom manipulation, event propagation,
and regex matching.

STEPS TO COMPLETE PROJECT:

1) The first step was to generate a playing board with the default size of 16X16. 

2) Next, I created an event listener for when the cursor passes over the squares to colour them.

3) gave the page an initial style through css.

4) I added an event listener for the new button to ask the user what resolution they wanted the 
   game board to be. See below for some notes regarding the dom manipulation.   

5) Next, I began preparing for the extra credit of this project. I assigned a random colour through
   the event listener by using a newly created randomColor function. A conditional statement was used
   to determine if there was no colour already designated

6) Now came the part of darkening the squares. The key to this was storing the original value of the
   assigned RGB colours in a new array. Then, when the cursor would pass over the coloured square
   again, the original colour could be retrieved, and an increment of darkening could be determined 
   and applied to the square. Regex played a crucial role in this, notes on regex found below. 

7) Finally, I applied some finalized styling to the page, fixed some positioning, and fixed the check
   on the user input.

NOTE DOM MANIPULATION AND EVENT PROPAGATION:
The squares found in the playing board are dynamically created. I learned that adding an event
listener to elements with a referenced class does not mean that the event listener is associated with
the class, it is associated to the element(s). When an element is deleted, and new elements are 
dynamically created, the event listener is gone. To solve this, you have to take advantage of event
propagation. Add the event listener to a statically created parent, and commit the event to the dynamic
children through the use of conditional statements.

NOTE ON REGEX MATCHING:
Regex matching was useful to me in this project because I was able to extract information
from the elements, manipulate that information, then commit changes to those elements.
This technique was used for the assignment and changing of the colours of the squares.
I realized through using this technique however that I need to take some time to properly
learn regex.

