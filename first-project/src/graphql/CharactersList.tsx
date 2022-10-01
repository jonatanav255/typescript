import { useQuery, gql } from "@apollo/client";
import charactersStyles from "./characters.module.css";

interface ICharacter {
  id: number;
  name: string;
  image: string;
}
interface ICharacterList {
  characters: { results: ICharacter[] };
}

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;
export default function CharactersList() {
  const { error, data, loading } = useQuery<ICharacterList, ICharacter>(
    GET_CHARACTERS
  );

  if (loading) {
    return <div style={{ fontSize: "50px" }}>loading... spinner</div>;
  }
  if (error) {
    return <div style={{ fontSize: "50px" }}>Error.... Happened</div>;
  }

  return (
    <div className={charactersStyles.mainDiv}>
      {data?.characters.results.map((character: ICharacter, i: number) => {
        return (
          <div key={i}>
            <img alt="imageCharacter" src={character.image} />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
