import "../App.css";
import { Characters } from "../components/Characters";
import { useEffect, useState } from "react";
import {/*useLocation, useParams */ } from "react-router-dom";

export function Home() {

  /*
  const params = useParams();
  const location = useLocation();
  */

  const [characters, setCharacters] = useState([]); //Hooks
  const [paginationInfo, setPaginationInfo] = useState({}); // es como el getter y setter

  const handleButtonClick = (pagina) => {
    console.log("Ir a la pagina: ", pagina);
    if (pagina && pagina.length > 0) {
      // Parámetro no.página - paginación
      const paginaAmostrar = pagina.slice(pagina.lastIndexOf("=") + 1);

      console.log("paginaAmostrar: ", paginaAmostrar);

      consoleCharacters(paginaAmostrar);

      //navigate(`/home/${paginaAmostrar}`);
    }
  };
  /*
  Funciona sin propiedad info, solo con results
  function getCharacters(pageNumber =1){
    * Promesa para el Api *
    const res = fetch('https://rickandmortyapi.com/api/character/?page=1')
                .then(response => response.json()) //Lo combierte a json con json()
                //.then(({results, info}) => {return {results}}) //desestructurar (Se especifica el tipo de dato a recibir, en este caso un objeto con propiedad results e info)
                .then(({results}) => results) // solo devolver 'results'
                //.catch(() => {return []})
                .catch(() => []); // devolver un arreglo vacío en caso de error

                console.log('Res = ',res);
                return res;

  }
  */

  async function getCharacters(pagina) {
    // pageNumber = Object.keys(paramsData)[0].split("/")[1];
    /* Promesa para el Api */
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${pagina ? pagina : "1"}`
    )
      .then((response) => response.json()) //Lo combierte a json con json()
      //.then(({results, info}) => {return {results}}) //desestructurar (Se especifica el tipo de dato a recibir, en este caso un objeto con propiedad results e info)
      .then(({ results, info }) => {
        setPaginationInfo(info);
        return { results, info };
      }) // solo devolver 'results'
      //.catch(() => {return []})
      .catch(null); // devolver un arreglo vacío en caso de error

    console.log("Res = ", res);
    return res.results;
  }

  async function consoleCharacters(pagina) {
    const resp = await getCharacters(pagina);
    console.log("Resp = ", resp);

    console.log("paginationInfo = ", paginationInfo);

    setCharacters(resp); //usas el setter de la variable characters, para modificarla
  }

  //useEffect se pone abajo de la funcionalidad para facilitale al compilador , es como un ngOnInit
  useEffect(() => {
    //hook para el ciclo de vida de un componente, requiere una funcion flecha y sobre qué paso estamos
    consoleCharacters(null);
    // console.log("Nuevos parámetros:", params);
  }, []);

  return (
    <div className="App">
      <div className="Hero">
        <h2 className="Hero-title">Rick and Morty</h2>
        <h2 className="Hero-subtitle">See all the characters.</h2>
        <h2 className="Hero-subtitle">And more.</h2>
      </div>
      <main className="main">
        <h2 className="main-title">Characters List</h2>
        <hr className="custom-hr"></hr>
        <div className="card-container-rym">
          {
            characters &&
              characters.length > 0 &&
              characters.map((character) => (
                <Characters character={character} />
              )) //Siempre verificar que la variable existe
            // map ayuda a recorrer un arreglo, es más recomendable cuando nos regresan elementos html
          }
        </div>
      </main>

      <div className="pagination">
        <button
          className="prev-button"
          onClick={() => handleButtonClick(paginationInfo?.prev)}
          disabled={!(paginationInfo && paginationInfo.prev)}
        >
          {paginationInfo && paginationInfo.prev
            ? paginationInfo?.prev?.slice(
                paginationInfo?.prev?.lastIndexOf("=") + 1
              )
            : ""}
        </button>
        <p>
          {parseInt(
            paginationInfo?.next?.slice(
              paginationInfo?.next?.lastIndexOf("=") + 1
            )
          ) - 1}{" "}
          de {paginationInfo.pages}
        </p>
        <button
          className="next-button"
          onClick={() => handleButtonClick(paginationInfo?.next)}
          disabled={!(paginationInfo && paginationInfo.next)}
        >
          {paginationInfo && paginationInfo.next
            ? paginationInfo?.next?.slice(
                paginationInfo?.next?.lastIndexOf("=") + 1
              )
            : ""}
        </button>
      </div>
    </div>
  );
}
