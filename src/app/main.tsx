import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router';
import { Container } from '../shared/ui/structure/container';
import { Header } from '../features/header';
import { Navigation } from '@/features/navigation';
import { Provider } from 'react-redux';
import { store } from '@/shared/api/store';
import '@/shared/assets/global.css';
import '@/shared/assets/_constants.scss';
import '@/shared/assets/_global.scss';

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <Container>
                <Header />
                <Router />
                <Navigation />
            </Container>
        </BrowserRouter>
    </Provider>,
);
