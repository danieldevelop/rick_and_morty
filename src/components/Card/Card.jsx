import estilo from './Card.module.css';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { addFavorite, deleteFavorite } from '../../redux/actions';


const Card = ({name, species, gender, image, onClose, id}) => {
   const dispatch = useDispatch();
   const favorites = useSelector(state => state.myFavorites);

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(deleteFavorite(id))
      } else {
         setIsFav(true);
         dispatch(addFavorite({name, species, gender, image, onClose, id}))
      }
   }

   // para mantener el estado favorito del personajes
   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id == id) {
            setIsFav(true);
         }
      });
   }, [favorites]);


   return (
      <div className={estilo.card}>
         {
            isFav ? (
               <button className={estilo.card__fav} onClick={handleFavorite} title="Quitar favorito">♥</button>
            ) : (
               <button className={estilo.card__fav} onClick={handleFavorite} title="Agregar favorito">♡</button>
            )
         }

         <section className={estilo.card__head}>
            <Link to={`/detail/${id}`}> {/* si borro el / no funciona, esto va junto con el /home*/}
               <p className={estilo.card__headName}>{name}</p>
            </Link>
            <button className={estilo.card__headBoton} onClick={onClose}>X</button>
         </section>

         <section>
            <img  src={image} alt={name} className={estilo.card__peopleIMG}/>
         </section>

         <section className={estilo.card__info}>
            <p className={estilo.card__infoSpecies}>Species: {species}</p>
            <p className={estilo.card__infoGender}>Gender: {gender}</p>
         </section>
      </div>
   );
}

export default Card;