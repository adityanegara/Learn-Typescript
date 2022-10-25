fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res) => res.json())
    .then((data) => {
    fetch(data.results[0].url)
        .then((res) => res.json())
        .then((data) => {
        console.log(data.name);
        console.log(data.stats);
    });
});
export {};
