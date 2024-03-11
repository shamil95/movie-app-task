import React from 'react';
import Cards from '../shared/Cards';
import styles from './Home.module.scss';
import MovieCard from '../MovieCard/MovieCard';
import { useGetMoviesQuery } from '../../queries/movies';
import { useAppSelector } from '../../redux/hooks';
import Spin from '../shared/Spin';

const Home = () => {
    const { searchValue } = useAppSelector(state => state.movies);

    const { data, isLoading } = useGetMoviesQuery(searchValue);

    if (isLoading) return <Spin spinning={isLoading} />;

    if (data) {
        const { description: movies } = data;
        return (
            <Cards
                data={movies}
                columnCount={3}
                renderNode={movie => <MovieCard movie={movie} />}
                itemClassName={styles.card}
                recordKey={d => d['#RANK']}
            />
        );
    }

    return null;
};

export default Home;
