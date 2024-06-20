import {Character} from "../type/RickAndMortyCharacter.ts";
import CharacterCard from "./CharacterCard.tsx";
import "./CharacterGallery.css";

type CharacterGalleryProps = {
    characters: Character[]
}

export default function CharacterGallery(props: Readonly<CharacterGalleryProps>){
    const cards = props.characters.map((character) => <CharacterCard character={character} key={character.name} />);
    return (
        <div className="character-gallery">
            {cards}
        </div>

    )

}