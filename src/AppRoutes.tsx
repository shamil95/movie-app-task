import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout';

const Home = React.lazy(() => import('./components/Home'));
const MovieDetails = React.lazy(() => import('./components/MovieDetails'));

const AppRoutes: React.FC = () => {
    const routes = (
        <Suspense fallback={<div>loading...</div>}>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'movie-details/:id'} element={<MovieDetails />} />
            </Routes>
        </Suspense>
    );

    return <Layout>{routes}</Layout>;
};

export default AppRoutes;
