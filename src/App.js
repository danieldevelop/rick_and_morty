import './App.css';
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { useState } from 'react';

function App () {
  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => { 
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No existe personaje con ese ID');
        }
    });
  }

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  }


  return (
    <> {/* si o si lo tengo que poner para segmentar el html */}
      <header className="head">
        <div className='container'>
          <Nav onSearch={onSearch}/>
        </div>
      </header>


      <main>
        <div className='container'>
          <section>
            <Cards characters={characters} onClose={onClose} />
          </section>
        </div>
      </main>


      <footer>
        <p>Hecho con ❤️ por <a href="https://danieldevelop.github.io/" target="_blank">Daniel Gómez</a></p>
      </footer>
    </>
  )
}

export default App
