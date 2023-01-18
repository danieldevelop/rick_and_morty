import estilo from './Card.module.css';

const Card = (props) => {
   const {
      name, 
      species, 
      gender, 
      image, 
      onClose
   } = props // destructuring

   return (
      <div className={estilo.card}>
         <section className={estilo.card__head}>
            <p className={estilo.card__headName}>{name}</p>
            <button className={estilo.card__headBoton} onClick={onClose}>X</button>
         </section>

         <section>
            <img  src={image} alt="rick and martin" className={estilo.card__peopleIMG}/>
         </section>

         <section className={estilo.card__info}>
            <p className={estilo.card__infoSpecies}>Species: {species}</p>
            <p className={estilo.card__infoGender}>Gender: {gender}</p>
         </section>
      </div>
   );
}

export default Card;