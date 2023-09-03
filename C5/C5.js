const button = document.createElement('button')
button.innerHTML = "Click Me";
button.style.cssText = `
padding: 10px 20px;
font-size: 16px;
background-color: #3498db;
color: #ffffff;
border: none;
cursor: pointer;
`

document.body.appendChild(button);

button.addEventListener('click', () => {
    button.style.backgroundColor = "red";
    button.style.color = "white";
    const randomNumber = Math.round(Math.random() * 1000);
    button.innerHTML = `Clicked ${randomNumber}!`
})

// ---------------------------------------------

let header1 = document.createElement('h1');
header1.innerText = "Hello World!";
header1.style.border = "10px dotted green"

document.body.appendChild(header1);
document.addEventListener('keydown', (event) => {
    console.log("Key pressed:", event.key);
    switch (event.key) {
        case 'A':
        case 'a':
            header1.style.backgroundColor = "red";
            break;

        case 'S':
        case 's':
            header1.style.marginLeft = "10px";
            break;

        case 'D':
        case 'd':
            let par = document.createElement('p');
            par.innerText = `Key D was pressed!`;
            document.body.appendChild(par);
            break;

        case 'W':
        case 'w':
            if (header1.style.visibility = "visible") {
                header1.style.visibility = "hidden";
            }
            else if (header1.style.visibility = "hidden") {
                header1.style.visibility = "visible";
            }
            break;

        case ' ':
            header1.style.fontSize="80px";
            break;
    }
})

// ---------------------------------------------

