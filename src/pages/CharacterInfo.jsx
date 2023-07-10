import { useCallback, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Loading } from "../components/Loading"
import { GetCharacterInfo } from "../api/GetCharacterInfo"
import { CharacterDescription } from "../components/CharacterDescription"

export function CharacterInfo() {
    const [ characterInfo, setCharacterInfo ] = useState()
    const [ loaded, setLoaded ] = useState(false);
    const navigate = useNavigate()
    const params = useParams()

    const fetchCharacter = useCallback(async () => {
        const response = await GetCharacterInfo(params.id)
        setCharacterInfo(response)
        setLoaded(true)
    }, [ params.id ])

    useEffect(() => {
        fetchCharacter()
    }, [ params.id ])

    return (
        <div className="characterinfo">
            {
                (characterInfo && loaded) ? (
                    <>
                        <div className="characterinfo-container">
                            <CharacterDescription
                                name={characterInfo.name}
                                image={characterInfo.image}
                                species={characterInfo.species}
                                gender={characterInfo.gender}
                                origin={characterInfo.origin}
                                location={characterInfo.location}
                                episode={characterInfo.episode}
                            />
                        </div>
                        <div className="characterinfo-footer">
                            <button
                                className="characterinfo-button"
                                onClick={() => navigate("/home")}
                            >
                                Return
                            </button>
                        </div>
                    </>
                ) : <Loading />
            }
        </div>
    )
}
