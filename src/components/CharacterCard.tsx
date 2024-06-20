import {Character} from "../type/RickAndMortyCharacter.ts";
import "./CharacterCard.css";

type CharacterCardProps = {
    character: Character;
}

export default function CharacterCard(props: Readonly<CharacterCardProps>){

    return(
        <div className="character-card">
            <img src={props.character.image} alt={props.character.name}/>
            <div>
                <h5>{props.character.name}</h5>
                <p>ID: {props.character.id}</p>
                <p>Species: {props.character.species}</p>
                <p>Status: {props.character.status}</p>
            </div>

        </div>



    )
}

