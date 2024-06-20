
import './App.css'
import CharacterGallery from "./components/CharacterGallery.tsx";
import {ChangeEvent, useState} from "react";
import {Character} from "./type/RickAndMortyCharacter.ts";
import {response} from "./data/CharactersData.ts";

function App() {

  const [characters, setCharacters] = useState<Character[]>(response.results);
  const [searchText, setSearchText] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value);
      setSearchText(event.target.value);
  }

  const filteredCharacters = characters.filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()));




  return (

    <>
      <input onChange={handleInputChange} placeholder="Search for a character"/>

      {/*<CharacterGallery characters={characters}/>*/}

      {/*<CharacterGallery characters={filteredCharacters}/>  */}

      {   filteredCharacters.length > 0 ?
          <CharacterGallery characters={filteredCharacters}/> :
          <p>ErrorMessage: This is a non-existent name</p>}  



    </>
  )
}

export default App
