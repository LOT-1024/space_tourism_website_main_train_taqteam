import React from 'react';
import Icon from "/assets/shared/logo.svg";
import NavbarLinker from './NavbarLinker';

type linkerData = {
  path: string,
  id: number,
}

const Navbar: React.FC = () => {
  const linkerData: linkerData[] = [
    {
      path: "home",
      id: 0,
    },
    {
      path: "destination",
      id: 1,
    },
    {
      path: "crew",
      id: 2,
    }
  ];

  return (
    <div className='text-white fixed top-[40px] right-0 left-0 flex justify-between z-[20]'>
      <img src={Icon} alt="Space Logo" className='ml-[3%] py-[24px]' />
      <div className='bg-white/30 w-[39%] h-[1px] absolute top-[50%] left-[10%] z-10'></div>
      <div className='w-[53%] bg-white/[.04] backdrop-blur-[40px] flex justify-center gap-[60px] font-barlowCondensed'>
        {linkerData.map((prop) => (
          <NavbarLinker key={prop.path} path={prop.path} id={prop.id} />
        ))}
      </div>
    </div>
  )
}

export default Navbar