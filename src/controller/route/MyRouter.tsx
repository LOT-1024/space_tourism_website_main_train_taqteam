import { createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from '..'
import { ContainerPage, Crew, Destination, Home, Technology } from '../../view'

export const router = createBrowserRouter([
    {
        element: <ContainerPage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/destination',
                element: <Destination />,
            },
            {
                path: '/crew',
                element: <Crew />,
            },
            {
                path: '/technology',
                element: <Technology />,
            },
        ],
    },
])
