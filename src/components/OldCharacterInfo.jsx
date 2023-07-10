import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EpisodeList } from "./EpisodeList";

export function CharacterInfo({character}){
    const [characterInfo, setCharacterInfo] = useState();
    const params = useParams();

    
  async function getCharacter(){
    /* Promesa para el Api */
    /*
    const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
                .then(response => response.json()) //Lo combierte a json con json()
                .then(result => {return result})
                .catch(null); // devolver un arreglo vacío en caso de error
                console.log('Res = ',res);
        return res;
*/
        if (params.id) {
            const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
                .then(response => response.json())
                .then(result => result)
                .catch(error => {
                    console.log(error);
                    return [];
                });
            console.log('Res = ', res);
            return res;
        }
        

  }

  

  async function consoleCharacters(){
    const resp = await  getCharacter();
    console.log('Resp = ',resp);
    setCharacterInfo(resp); //usas el setter de la variable characters, para modificarla
  }

    useEffect(()=>{
        consoleCharacters(); 
    }, [params])
    
    return(
        <div> 
        {
            characterInfo && (
                <>
                <div>{characterInfo.name}</div>
                <EpisodeList episodes={characterInfo.episode}/>
                </>
            )
        }
        </div>
       
    )
}