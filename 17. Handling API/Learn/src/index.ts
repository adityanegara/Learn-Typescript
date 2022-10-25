import fetch from "node-fetch";
import PokemonList from './interfaces/IPokemonList';
import Pokemon from "./interfaces/IPokemon";
import  PromisePool  from "../node_modules/@supercharge/promise-pool/dist/promise-pool";

const fetchPokemonUsingThen = () =>{
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then((res) => res.json())
        .then((data: PokemonList)=> {
            fetch(data.results[0].url)
            .then((res) => res.json())
            .then((data) =>{
                console.log(data.name);
                console.log(data.stats);
            })
    }).catch((err) =>{
        console.log(err);
    });
}

const getBulbasaurPromise = async (): Promise<Pokemon> =>{
    return new Promise(async (resolve, reject) =>{
        try{
            console.log('getting bulbasaur in a promsie');
            const pokemonList:PokemonList = await getPokemonList();
            resolve(await getPokemon(pokemonList.results[0].url));
        }catch(error){
            reject(error)
        }
    })
}

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

const getPokemon = async (url:string): Promise<Pokemon> =>{
    try{
        const response = await fetch(url);
        const pokemon: Pokemon = await response.json();
        return pokemon;
    }catch(err){
        throw(err);
    }
}

const getPokemonNamePromiseAll = async ():Promise<void> =>
{
    try{
        const pokemonList = await getPokemonList();
        const data = Promise.all(pokemonList.results.map((pokemon) => getPokemon(pokemon.url)));
        console.log(data);
    }catch(e){
        console.log(e);
    }
    
}

const getPokemonNameReduce = async ():Promise<void> => 
{
    try{
        const list = await getPokemonList();
        list.results.reduce<Promise<unknown>>(async (promise, pokemon) => {
            await promise;
            return getPokemon(pokemon.url)
            .then(p => console.log(p.name));
        }, Promise.resolve(undefined))
    }catch(e){
        console.log(e);
    }
}


const getPokemonNameForEach = async ():Promise<void>  =>{
    try{
        const pokemonList = await getPokemonList();
        pokemonList.results.forEach( async (item)=>{
            const pokemon = await getPokemon(item.url);
            console.log(pokemon.name);
        })
    }
    catch(err){
        throw(err);
    }
}

const getPokemonNameFor = async ():Promise<void>  =>{
    try{
        const pokemonList = await getPokemonList();
        for(const list of pokemonList.results){
            const pokemon = await getPokemon(list.url);
            console.log(pokemon.name);
        }
    }
    catch(err){
        throw(err);
    }
}

const printPokemon = async ():Promise<void> =>{
    const bulbasaur = await getBulbasaurPromise();
    const bulbasaurTwo = await getBulbasaurPromise();
    console.log(bulbasaur.name);
    console.log(bulbasaurTwo.name);
    // const {stats, name, id} = await getPokemon(pokemonList.results[0].url);
    // const bulbasaur = {stats, name, id};
    // console.log(bulbasaur);
}



// fetchPokemonUsingThen();
// printPokemon();
// getPokemonNameForEach();
// getPokemonNameFor();
// getPokemonNameReduce();
