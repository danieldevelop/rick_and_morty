import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import estilo from "./Detail.module.css";

const Detail = () => {
	// obtenemos el id del personaje mediante useParams
	const { detailId } = useParams();
	// creamos un estado local con el nombre character
	const [character, setCharacter] = useState({}); // como no me dice el estado inicial, le doy un obj

	// useEffect => simula el ciclo de vida
	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
			.then((response) => response.json())
			.then((char) => { // Me trae toda la informacion en un objeto del personaje que me trae fetch
				// console.log(char);
				if (char.name) {
					setCharacter(char); // Guardo ese obj en character, para despues acceder a cada uno de sus propiedades
				} else {
					alert("No hay personajes con ese ID");
				}
			})
			.catch((err) => {
				alert("No hay personajes con ese ID");
			});
		return setCharacter({});
	}, [detailId])

	return(
		<div className={estilo.detailCharacter}>
			<div className={estilo.btnHomeGroup}>
				<button type="button" className={estilo.btnHome}>
					<Link to="/home" className={estilo.btnHome_enlace}>Home</Link>
				</button>
			</div>

			<article className={estilo.dataCharacter}>
				<div className={estilo.infoCharacter}>
					<h2>NOMBRE: {character.name}</h2>

					<h3>STATUS: {character.status}</h3>
					<h3>ESPECIE: {character.species}</h3>
					<h3>GENERO: {character.gender}</h3>
					<h3>ORIGIN: {character?.origin?.name}</h3> {/*? => condicional chaining, pregunta primero si tengo algo en mi estado */}
				</div>

				<div>
					<img src={character.image} alt={character.name} className={estilo.imgCharacter} />
				</div>
			</article>
		</div>
	)
}


export default Detail;