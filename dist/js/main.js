const getRandomDadJoke = async () => {
    //return "Do you want a brief explanation of what an acorn is? In a nutshell, it's an oak tree.";
    /* const url = "https://icanhazdadjoke.com";
    const jokeStream = await fetch(url, {
        headers: {
            Accept: "application/json"
        }
    }); */
    const url = "/.netlify/functions/jokes";
    const jokeStream = await fetch(url);

    const jsonJoke = await jokeStream.json();
    const joke = jsonJoke.joke;
    return joke;
}

const displayJoke = (joke) => {
    const h1 = document.querySelector("h1");
    h1.textContent = joke;
}

const refreshJoke = async () => {
    const joke = await getRandomDadJoke();
    console.log('joke', joke)
    displayJoke(joke);
}

// load 1st joke
refreshJoke();

setInterval(refreshJoke, 10000);