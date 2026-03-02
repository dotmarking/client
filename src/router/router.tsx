import App from '@/App';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
    {
        element: <App></App>,
        children: [
            {
                path: '/register',
                lazy: () => import('@/pages/register/register-page'),
            },
            {
                path: '/login',
                lazy: () => import('@/pages/login/login-page'),
            },
        ],
    },
]);

export default router;
