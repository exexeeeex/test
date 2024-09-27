import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() =>
    import('../pages/home').then(({ HomePage }) => ({ default: HomePage })),
);

export const Router = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={
                    <Suspense>
                        <HomePage />
                    </Suspense>
                }
            />
        </Routes>
    );
};
