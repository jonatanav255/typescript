import { useEffect, useReducer } from "react";
import "./App.css";
import {
  urlPokemon,
  IpokemonList,
  ACTION_TYPES,
  counterReducer,
} from "./interfaces/interface";

function App() {
  const [state, dispatch] = useReducer(counterReducer, { data: [] });
  const getPokemonList = () => {
    fetch(urlPokemon)
      .then((res) => res.json())
      .then((res: IpokemonList) => {
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: res });
      })
      .catch((err) =>
        dispatch({ type: ACTION_TYPES.FETCH_ERROR, payload: err })
      );
  };

  useEffect(() => {
    getPokemonList();
  }, []);
  interface Iitem {
    name: string;
    url: string;
  }

  return (
    <div className="App">
      {state?.data?.results?.map((item: Iitem, Idx: number) => {
        return (
          <div key={Idx}>
            <label htmlFor="">{item.name}</label>
            <label htmlFor="">{item.url}</label>
          </div>
        );
      })}
    </div>
  );
}

export default App;
