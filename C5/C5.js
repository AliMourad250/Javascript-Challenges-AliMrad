let header = document.querySelector('header');
let footer = document.querySelector('footer');
let menu = document.querySelector('.menu');


for (let child of header.children) {
    console.log(child)
}

for (let child of footer.children) {
    console.log(child)
}

for (let child of menu.children) {
    console.log(child)
}

let container = document.createElement('div')
container.className = "container";

let containerParagraph = document.createElement('p');
containerParagraph.innerText = "Hello, World!";
container.appendChild(containerParagraph);
document.body.appendChild(container);

container.style.cssText = `
background-color: blue;
color: white
`;


containerParagraph.style.cssText = `
font-size: 24px;
font-family: Helvetica;
border: 1px solid black;
`;

let h1s = document.querySelectorAll('h1');

for (let h1 of h1s) {
    h1.style.fontStyle = "italic";
}