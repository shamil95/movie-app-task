import React from 'react';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/imdb-logo.svg';
import { Link } from 'react-router-dom';
import SearchMovie from './SearchMovie/SearchMovie';
import { HeaderProps } from './Header.types';

const Header: React.FC<HeaderProps> = props => {
    const { showSearch } = props;
    return (
        <div className={styles.container}>
            <Link to={'/'}>
                <Logo className={styles.logo} />
            </Link>
            {showSearch ? <SearchMovie /> : null}
        </div>
    );
};

export default Header;
