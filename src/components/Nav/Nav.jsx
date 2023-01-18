import SearchBar from '../SearchBar/SearchBar.jsx'
import estilo from './Nav.module.css'

const Nav = ({ onSearch }) => {
    return (
        <nav className={estilo.head__content}>
            <h1 className={estilo.head__contentTitle}>Rick&Morty</h1>
            <SearchBar onSearch={onSearch} />
        </nav>
    );
}

export default Nav;