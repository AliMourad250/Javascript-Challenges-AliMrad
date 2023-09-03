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

// ---------------------------------------------

let hoveredButton = document.createElement('button');
hoveredButton.innerHTML = "Hover over me"
hoveredButton.addEventListener('mouseover', () => {
    hoveredButton.style.color = "red";
});

hoveredButton.addEventListener('mouseout', () => {
    hoveredButton.style.color = "black";
});

document.body.appendChild(hoveredButton);

let buttonContainer = document.getElementById('buttonContainer');
for (let btn of buttonContainer.children) {
    btn.addEventListener('click', () => {
        console.log(btn.innerHTML);
    })
}

let form = document.createElement('form');

let nameField = document.createElement('input');
nameField.type = 'text';
nameField.placeholder = "Name here";

let emailField = document.createElement('input');
emailField.type = "email";

emailField.placeholder = "Email here";

let submit = document.createElement('button');
submit.innerText = 'Submit';

submit.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(`Name: ${nameField.value}\nEmail: ${emailField.value}`)
})

form.appendChild(nameField);
form.appendChild(emailField);
form.appendChild(submit);

document.body.appendChild(form);

// ---------------------------------------------

let originalDiv = document.getElementById('original');

let clonedDiv = originalDiv.cloneNode(true);
let clonedParagraph = clonedDiv.querySelector('p');
clonedParagraph.innerText = "Cloned";

document.body.appendChild(clonedDiv);

let isVisible = true;

let cloneBtn = document.getElementById('clone-btn');
cloneBtn.addEventListener('click', toggleDisplay);

function toggleDisplay() {
    if (isVisible) {
        clonedDiv.style.display = 'none';
    }
    else {
        clonedDiv.style.display = 'block';
    }
    isVisible = !isVisible;
}

let removeBtn = document.createElement('button');
removeBtn.innerText = "Click to remove header";
document.body.appendChild(removeBtn);

removeBtn.addEventListener('click', () => {
    header.parentNode.removeChild(header);
})