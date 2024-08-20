import { createBrowserRouter } from 'react-router-dom';
import Login from './views/login';
import Register from './views/register';
import DefaultLayout from './components/DefaultLayout';
import GuestLayout from './components/GuestLayout';
import Users from './views/users'

const router = createBrowserRouter ([
    {
        path: '/',
        element: <DefaultLayout />,
        children:[
            {
                path: '/users',
                element: <Users />,
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children:[
            {
                path: '/login',
                element: <Login />,
            },
            {   
                path: '/register',
                element: <Register />,
            }
        ]
    }
]);

export default router;