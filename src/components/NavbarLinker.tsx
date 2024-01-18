import React from 'react'
import { Link, useLocation } from 'react-router-dom'

type linkerProperty = {
  path: string,
  id: number,
}

const NavbarLinker: React.FC<linkerProperty> = ({ path, id }) => {
  const location = useLocation();

  return (
    <Link to={`/${path}`} className={`border-b-[3px] flex items-center ${location.pathname.includes(path) ? "border-b-white" : "border-b-transparent hover:border-white/50"}`}><strong className='mr-[11px]'>0{id}</strong>{path.toUpperCase()}</Link>
  )
}

export default NavbarLinker