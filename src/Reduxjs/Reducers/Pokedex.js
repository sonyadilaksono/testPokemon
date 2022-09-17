import { types } from '../../Constants/Pokedex';

const initialState = {
   pokedex: {
      loading: false,
      loadMore: false,
      data: [],
      offset: 0,
      error: '',
   },
};

const pokedex = (state = initialState.pokedex, action) => {
   switch (action.type) {
      case types.POKEDEX_LOADING:
         return {
            ...state,
            loading: true,
         };
      case types.POKEDEX_SUCCESS:
         return {
            ...state,
            loading: false,
            data: action.data,
         };
      case types.POKEDEX_FAILED:
         return {
            ...state,
            loading: false,
            error: action.message,
         };

      case types.POKEDEX_MORE_LOADING:
         return {
            ...state,
            loadMore: true,
         };
      case types.POKEDEX_MORE_SUCCESS:
         return {
            ...state,
            loadMore: false,
            offset: state.offset + 10,
            data: [...state.data, ...action.data],
         };
      case types.POKEDEX_MORE_FAILED:
         return {
            ...state,
            loadMore: false,
            error: action.message,
         };

      default:
         return state;
   }
};

export default pokedex;
