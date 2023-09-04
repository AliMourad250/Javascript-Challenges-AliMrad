function delay(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    })
}

console.log('Started!');

delay(2000)
    .then(() => {
        console.log('2 seconds have passed!')
    })
    .catch((error) => {
        console.error('Error occured: ', error);
    });

console.log('Finished!')

fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        return response.json();
    })
    .then((fact) => {
        console.log(`Fact: ${fact.text}`);
    })
    .catch((error) => {
        console.error("An error occured: ", error);
    })


async function factFetcher() {
    try {
        const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const fact = await response.json();

        console.log(`Fact: ${fact.text}`);
    }
    catch (error) {
        console.error("An error occured: ", error);
    }
}
factFetcher();