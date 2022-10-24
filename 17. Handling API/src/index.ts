import fetch from "node-fetch";
import PokemonList from './interfaces/IPokemonList';

// fetch("https://pokeapiz.co/api/v2/pokemon")
//     .then((res) => res.json())
//     .then((data: PokemonList)=> {
//         fetch(data.results[0].url)
//         .then((res) => res.json())
//         .then((data) =>{
//             console.log(data.name);
//             console.log(data.stats);
//         })
// }).catch((err) =>{
//     console.log('Error');
// });


const getPokemonList = async (): Promise<PokemonList>=>{
    try{
        const listResponse = await fetch('https://pokeapi.co/api/v2/pokemon');
        const list: PokemonList = await listResponse.json();
        return list;
    }
    catch(err){
        throw(err);
    }

}

const logPokemon = async ():Promise<void> =>{
    console.log( await getPokemonList());
}

logPokemon();