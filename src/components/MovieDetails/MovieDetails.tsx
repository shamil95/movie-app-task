import React from 'react';
import styles from './MovieDetails.module.scss';
import { useGetMovieQuery } from '../../queries/movies';
import { useParams } from 'react-router';
import { MovieDetailsProps, Params } from './MovieDetails.types';
import { ReactComponent as StarIcon } from '../../assets/star.svg';
import Spin from '../shared/Spin';

const MovieDetails: React.FC<MovieDetailsProps> = () => {
    const { id } = useParams() as Params;

    const imdbId = id.slice(0);

    const { data, isLoading } = useGetMovieQuery(imdbId);

    if (isLoading) return <Spin spinning={isLoading} />;

    const { short, main } = data;

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img className={styles.image} src={short.image} />
                <div className={styles.description}>
                    <div className={styles.header}>
                        <div>
                            <h3>{short.name}</h3>
                            <div>{short.keywords}</div>
                        </div>
                        <div className={styles.rank}>
                            <StarIcon className={styles.star} />
                            {main.ratingsSummary?.topRanking ? (
                                <span>{main.ratingsSummary.topRanking.rank}</span>
                            ) : null}
                        </div>
                    </div>
                    <div className={styles.section}>
                        <div>Actors</div>
                        <div className={styles.divider} />
                        {short.actor.map((actr: any) => (
                            <div key={actr.name}>{actr.name}</div>
                        ))}
                    </div>
                    <div className={styles.section}>
                        <div>Description</div>
                        <div className={styles.divider} />
                        <div>{short.description}</div>
                    </div>
                    {short.review ? (
                        <div className={styles.section}>
                            <div>Review</div>
                            <div className={styles.divider} />
                            <div>author: {short.review.author.name}</div>
                            <div>{short.review.reviewBody}</div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
