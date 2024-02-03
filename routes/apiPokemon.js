import  express  from "express";
const pokemon = express();
import { getpokemon,
         postpokemon,
         putpokemon,
         deletepokemon
         } from "../controller/pokemonController.js";


         pokemon.get('', getpokemon);


         pokemon.post('', postpokemon)


         pokemon.put('/:id', putpokemon)


         pokemon.delete('/:id', deletepokemon)

export { pokemon }