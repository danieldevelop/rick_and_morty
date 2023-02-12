/**
 * Información del proyecto, continuacion de la Integracion:
 *  Module 2: FT34a
 *  Lectures:
 *    06-React-Intro
 *    07-React-Estilos
 *    08-React-Estado-LifeCycle
 *    09-React-Rounting
 *    10-React-Forms
 *    12-React-Redux (No completado en esta app)
 */


import './App.css';
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import About from "./components/About/About";
import Error404 from "./components/Error/Error404";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";

function App () {
  const location = useLocation();
  const navigate = useNavigate();

  // estado local
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const usu = "informatica@test.com";
  const pass = "123456"; // Obligatorio tiene que ser con string

  const login = (userData) => {
    if (userData.username === usu && userData.password === pass) {
      setAccess(true);
      navigate('/home')
    } else {
      alert("Usuario y Contraseña incorrectas");
    }
  }


  useEffect(() => {
    !access && navigate('/')
  }, [access]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => { 
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No existe personaje con ese ID');
        }
    })
  }


  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  }

  const handleRandomPersonaje = () => {
    fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => {
      const random = Math.floor(Math.random() * data.results.length);
      setCharacters((oldChars) => [...oldChars, data.results[random]]);
    });
  }



  return (
    <> {/* si o si lo tengo que poner para segmentar el html */}
      { 
        location.pathname === '/' ? <Form login={login}/>
        : <header className="head">
            <div className='container'>
              <Nav onSearch={onSearch} handleRandomPersonaje={handleRandomPersonaje}/>
            </div>
          </header>
      }
      

      <main>
        <div className='container'>
          <section>
            <Routes>
              /* / es lo mismo que hacer /home */
              <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
              <Route path='/about' element={<About />}>Sobre mí</Route>
              <Route path='/detail/:detailId' element={<Detail />} /> // useParams

              <Route path=":error" element={<Error404 />}/>
            </Routes>
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
