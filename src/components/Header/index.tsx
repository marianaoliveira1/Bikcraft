import { Link } from "react-router-dom";

import imgLogo from '../../assets/bikcraft.svg';

import styles from './header.module.css';

export function Header() {
    return(
        <header className={styles.headerbg}>
            <div className={styles.header}>

                <Link to="/">
                    <img src={imgLogo} alt="Bikcraf" />
                </Link>

                <nav aria-label="primaria">
                    <ul className={styles.headermenu}>
                        <li><a href="/bicicletas">Bicicletas</a></li>
                        <li><a href="/contato">Contatos</a></li>
                        <li><a href="/seguros">Seguros</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}