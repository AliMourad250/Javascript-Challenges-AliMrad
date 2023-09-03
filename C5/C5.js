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

