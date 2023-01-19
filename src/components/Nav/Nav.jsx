import SearchBar from '../SearchBar/SearchBar.jsx'
import estilo from './Nav.module.css';
import cloud_download from "../../cloud-download.svg";

const Nav = ({ onSearch }) => {
    return (
        <nav className={estilo.head__content}>
            <h1 className={estilo.head__contentTitle}>Rick&Morty</h1>

            <div className={estilo.head__group}>
                <button className={estilo.head__contentButton}>
                    <img src={cloud_download} alt="icon bootstrap"/><i>Personaje</i>
                </button>
                <SearchBar onSearch={onSearch} />
            </div>
        </nav>
    );
}

export default Nav;