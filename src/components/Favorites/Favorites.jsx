import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import estilo from '../Card/Card.module.css'; // reutilizamos mismos estilos para la card

const Favorites = () => {
    const { myFavorites } = useSelector(state => state);

    return (
        <div className={estilo.card}>
            {
                myFavorites.map((character) => {
                    return (
                        <>
                            <section className={estilo.card__head}>
                                <Link to={`/detail/${character.id}`}> {/* si borro el / no funciona, esto va junto con el /home*/}
                                <p className={estilo.card__headName}>{character.name}</p>
                                </Link>
                            </section>

                            <section>
                                <img  src={character.image} alt={character.name} className={estilo.card__peopleIMG}/>
                            </section>

                            <section className={estilo.card__info}>
                                <p className={estilo.card__infoSpecies}>Species: {character.species}</p>
                                <p className={estilo.card__infoGender}>Gender: {character.gender}</p>
                            </section>
                        </>
                    )
                })
            }
        </div>
    )
}


export default Favorites;