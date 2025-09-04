// Selectors in the DOM

/* 
    Selectors are methods used to select and manipulate HTML elements in the DOM. 
    Here are some commonly used selectors:

    document.SELECTOR("tag || class || id"); 
*/

// This code returns the first incident in the file
const h1Tag = document.querySelector("h1");
console.log(h1Tag); // <h1>JavaScript</h1>

const h2Tag = document.querySelector("h2");
console.log(h2Tag); // null

const oneP = document.querySelector("p");
console.log(oneP); /* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod ratione ex architecto accusantium. Ex tempore non excepturi, pariatur natus ipsum in praesentium eaque rem atque enim, voluptatum voluptates ipsa.
    </p> */


// But this *querySelectorAll* returns all incidences in 
// the file as a list (NodeList).
const allP = document.querySelectorAll("p");
console.log(allP); // NodeList(2) [p, p]


// It allows me to obtain an element by its ID
const sub01 = document.querySelector('#sub01');
console.log(sub01); // <h3 id="sub01">Es un lenguaje de programación</h3>

// This selector also returns a list nodes.
const textDesc = document.querySelectorAll('.text-desc');
console.log(textDesc); // NodeList(2) [p.text-desc, p.text-desc]

