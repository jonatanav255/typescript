import CharactersList from "./CharactersList";
import App from "../App";

import { Routes, Route } from "react-router-dom";
import Character from "./Character";

export default function Graphql() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/:id" element={<Character />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </div>
  );
}
