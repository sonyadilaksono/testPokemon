import { message } from 'antd';
import axios from 'axios';
import { types, URL_POKEDEX } from '../../Constants/Pokedex';

export function fetchPokemons(params) {
   return (dispatch) => {
      dispatch({ type: types.POKEDEX_LOADING });
      axios
         .get(URL_POKEDEX + `${params}`)
         .then((response) => {
            const { results } = response.data;
            dispatch({ type: types.POKEDEX_SUCCESS, data: results });
         })
         .catch((error) => {
            message.error(error?.message);
            dispatch({
               type: types.POKEDEX_FAILED,
               message: error.message,
            });
         });
   };
}

export function fetchMorePokemons(params) {
   return (dispatch) => {
      dispatch({ type: types.POKEDEX_MORE_LOADING });
      axios
         .get(URL_POKEDEX + `${params}`)
         .then((response) => {
            const { results } = response.data;
            dispatch({ type: types.POKEDEX_MORE_SUCCESS, data: results });
         })
         .catch((error) => {
            message.error(error?.message);
            dispatch({
               type: types.POKEDEX_MORE_FAILED,
               message: error.message,
            });
         });
   };
}
