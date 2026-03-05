import App from '@/App';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
    {
        element: <App></App>,
        children: [
            {
                path: '/',
                lazy: () => import('@/pages/home/home-page'),
            },
            {
                path: '/register',
                lazy: () => import('@/pages/register/register-page'),
            },
            {
                path: '/login',
                lazy: () => import('@/pages/login/login-page'),
            },
            {
                path: '/settings',
                lazy: () => import('@/pages/settings/settings-page'),
            },
            {
                path: '/validation',
                lazy: () => import('@/pages/validation/validation-page'),
            },
            {
                path: '/data-table',
                lazy: () => import('@/pages/data-table/data-table-page'),
            },
            {
                path: '*',
                lazy: () => import('@/pages/not-found/not-found-page'),
            },
        ],
    },
]);

export default router;
