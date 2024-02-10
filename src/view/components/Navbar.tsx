import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Data from '../../model/data/navData.json'

const navList = Data.navbar

const Navbar: React.FC = () => {
    const [trigger, setTrigger] = useState(false)

    const location = useLocation()

    const onClickEvent = () => {
        setTrigger(!trigger)
    }
    return (
        <>
            {/* Sidebar */}
            <aside
                className={`fixed right-0 top-0 z-50 h-full w-[254px] bg-white/5 backdrop-blur-lg transition-transform duration-300 ${
                    trigger ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="m-auto flex h-[86.99px] w-[190px] items-center justify-end">
                    <img
                        className="h-[19.09px] w-[19.09px]"
                        src="/assets/shared/icon-close.svg"
                        alt="close icon"
                        onClick={onClickEvent}
                    />
                </div>
                <ul className="m-auto mt-[31px] h-[172px] w-[190px]">
                    {navList.map((list, i) => (
                        <li
                            className="mb-[32px] leading-[normal] tracking-[2.7px] text-white"
                            key={i}
                        >
                            <Link to={list.link} onClick={onClickEvent}>
                                <h2>
                                    <span className="font-bold">
                                        {list.numlist}
                                    </span>{' '}
                                    <span className="text-white/80">
                                        {list.title}
                                    </span>
                                </h2>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Overlay */}
            {trigger && (
                <div
                    className="fixed left-0 top-0 z-40 h-full w-full bg-black opacity-50"
                    onClick={onClickEvent}
                />
            )}

            <div className="m-auto flex h-full w-[327px] items-center justify-between tracking-[2.36px] md:m-0 md:w-[729px] md:text-[14px] lg:w-dependWidth xl:h-[96px] xl:w-[1385px] xl:text-[16px] xl:tracking-[2.7px]">
                <Link to={'/'}>
                    <img
                        className="h-[40px] w-auto md:h-[48px]"
                        src="/assets/shared/logo.svg"
                        alt="Logo"
                    />
                </Link>

                <img
                    className="h-[21px] w-auto sm:hidden"
                    src="/assets/shared/icon-hamburger.svg"
                    alt="hamburger-button"
                    onClick={onClickEvent}
                />
                <div className="relative hidden xl:flex xl:h-full xl:w-[507px] xl:items-center">
                    <div className="absolute left-[64px] z-10 h-[1px] w-[473px] bg-white/15"></div>
                </div>
                {/* Tablet & Desktop Viewport */}
                <div className="hidden md:block md:h-full md:w-[450px] md:bg-white/5 md:text-white md:backdrop-blur-lg xl:w-[830px]">
                    <ul className="m-auto flex h-full w-[356px] items-center justify-between xl:w-[542px]">
                        {navList.map((list, i) => (
                            <li className="h-full" key={i}>
                                <Link
                                    className={`flex h-full items-center border-b-[3px] border-solid ${location.pathname === list.link ? 'border-white' : 'border-white/0 text-white/70 hover:border-white/30'}`}
                                    to={list.link}
                                >
                                    <h2 className="flex text-white/80">
                                        <span className="hidden font-bold text-white xl:mr-[11px] xl:block">
                                            {list.numlist}
                                        </span>
                                        {list.title}
                                    </h2>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
