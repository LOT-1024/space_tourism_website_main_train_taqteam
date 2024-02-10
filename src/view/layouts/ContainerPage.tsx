import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '..'

const data = [
    {
        path: '/',
        style: 'bgHomeMobile md:bgHomeTablet xl:bgHomeDesktop',
    },
    {
        path: '/destination',
        style: 'bgDestinationMobile md:bgDestinationTablet xl:bgDestinationDesktop',
    },
    {
        path: '/crew',
        style: 'bgCrewMobile md:bgCrewTablet xl:bgCrewDesktop',
    },
    {
        path: '/technology',
        style: 'bgTechnologyMobile md:bgTechnologyTablet xl:bgTechnologyDesktop',
    },
]

const ContainerPage: React.FC = () => {
    const location = useLocation()
    const selected = data.find((element) => element.path === location.pathname)

    return (
        <div
            className={`h-screen w-full overflow-y-auto bg-cover bg-center bg-no-repeat ${selected?.style}`}
        >
            <header className="h-[84px] md:flex md:h-[96px] md:justify-end xl:mt-[40px] xl:h-fit">
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default ContainerPage
