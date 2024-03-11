import React from 'react';
import AppRoutes from './AppRoutes';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { isElectron } from './utils/renderTs';

const Router = isElectron() ? HashRouter : BrowserRouter;

function App() {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
}

export default App;
