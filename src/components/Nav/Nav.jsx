import SearchBar from '../SearchBar/SearchBar.jsx'
import estilo from './Nav.module.css';
import cloud_download from "../../cloud-download.svg";
import { Link } from 'react-router-dom';

const Nav = ({ onSearch, handleRandomPersonaje }) => {
    return (
        <nav className={estilo.head__content}>
            <div className={estilo.head__nav}>
                {/* Esta etiqueta h1 es el remplazo del Home */}
                <Link to="/" className={estilo.head__contentTitle_enlace}><h1 className={estilo.head__contentTitle}>Rick&Morty</h1></Link>
                <Link to="/about" className={estilo.head__contentAbout}>Sobre mí</Link>
            </div>

            <div className={estilo.head__group}>
                <button className={estilo.head__contentButton} onClick={handleRandomPersonaje}>
                    <img src={cloud_download} alt="icon bootstrap"/><i>Personaje</i>
                </button>
                <SearchBar onSearch={onSearch} />
            </div>
        </nav>
    );
}

export default Nav;