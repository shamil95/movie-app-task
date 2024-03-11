import React from 'react';
import { MovieCardProps } from './MovieCard.types';
import styles from './MovieCard.module.scss';
import { Link } from 'react-router-dom';

const MovieCard: React.FC<MovieCardProps> = props => {
    const { movie } = props;

    return (
        <div className={styles.container}>
            <Link to={`movie-details/${movie['#IMDB_ID']}`} style={{ color: 'red' }}>
                <img className={styles.image} src={movie['#IMG_POSTER']} />
            </Link>
        </div>
    );
};

export default MovieCard;
