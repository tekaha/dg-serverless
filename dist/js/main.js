const getRandomDadJoke = async () => {
    //return "Do you want a brief explanation of what an acorn is? In a nutshell, it's an oak tree.";
    const url = "https://icanhazdadjoke.com";
    const JokeStream = await fetch(url, {
        headers: {
            Accept: "application/json"
        }
    });
    const jsonJoke = await JokeStream.json();
    const joke = jsonJoke.joke;
    return joke;
}

const displayJoke = (joke) => {
    const h1 = document.querySelector("h1");
    h1.textContent = joke;
}

const refreshJoke = async () => {
    const joke = await getRandomDadJoke();
    displayJoke(joke);
}

// load 1st joke
refreshJoke();

setInterval(refreshJoke, 10000);