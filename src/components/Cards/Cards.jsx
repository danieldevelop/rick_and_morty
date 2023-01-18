import Card from '../Card/Card';
import estilo from "./Cards.module.css";

const Cards = ({ characters, onClose }) => {
   return <div className={estilo.cards}>
      {
            characters.map(({id, name, species, gender, image}) => { // destructuring
            return <Card 
               key={id} // character.id 
               name={name} // character.name
               species={species}
               gender={gender}
               image={image}
               onClose={() => onClose(id)}
            />
         })
      }
   </div>;
}

export default Cards;