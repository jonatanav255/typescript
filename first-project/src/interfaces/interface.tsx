export const urlPokemon: string =
  "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150";

export function counterReducer(state: any, action: any) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        data: action.payload,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        data: "error",
      };
    default:
      return state;
  }
}

export interface IpokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    id: string;
    name: string;
    url: number;
  }[];
}

export interface Ipokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

export const ACTION_TYPES = {
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
};
