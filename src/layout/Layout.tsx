import React from 'react';
import Header from '../components/Header';
import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.types';
import { useLocation } from 'react-router';

const Layout: React.FC<LayoutProps> = props => {
    const { children } = props;
    const location = useLocation();

    return (
        <div className={styles.container}>
            <Header showSearch={location.pathname === '/'} />
            <main className={styles.main}>{children}</main>
        </div>
    );
};

export default Layout;
