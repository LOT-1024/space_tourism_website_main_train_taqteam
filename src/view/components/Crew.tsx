import React, { useState } from 'react'
import Data from '../../model/data/data.json'

const datas = Data.crew

const Crew: React.FC = () => {
    const [currentDestination, setCurrentDestination] = useState(datas[0].name)

    const selected = datas.find(
        (element) => element.name === currentDestination
    )

    const onClickEvent = (value: string) => {
        setCurrentDestination(value)
    }

    return (
        <div className="m-auto flex w-[327px] flex-col items-center text-white md:mt-[40px] md:w-[691px] xl:mt-[62px] xl:w-[1138px] xl:flex-row">
            <div className="flex w-full flex-col xl:self-start">
                {/* Title*/}
                <h2 className="text-center tracking-[2.7px] md:text-left md:text-[20px] md:tracking-[3.38px] xl:text-[28px] xl:tracking-[4.72pxpx]">
                    <span className="mr-[18px] text-white/30">02</span>MEET YOUR
                    CREW
                </h2>
                {/* Image in mobile */}
                <div className="mt-[32px] flex w-full justify-center border-b-[1px] border-white/20 md:hidden">
                    <img
                        src={selected?.images.png.substring(1)}
                        alt="crew images"
                        className="h-[222px] w-[177.12px]"
                    />
                </div>
                {/* Button in mobile */}
                <div className="my-[32px] flex w-full justify-center gap-[16px] md:hidden">
                    {datas.map((data, i) => (
                        <button
                            key={i}
                            className={`h-[10px] w-[10px] rounded-full ${selected === data ? 'bg-white' : 'bg-white/40 hover:bg-white/60'}`}
                            onClick={() => onClickEvent(data.name)}
                        ></button>
                    ))}
                </div>
                {/* Name, Role, and Bio */}
                <div className="mb-[104px] w-full text-center md:m-auto md:mb-0 md:mt-[60px] md:w-[458px] xl:m-0 xl:mt-[154px] xl:w-[488.5px] xl:text-left">
                    <h1 className="text-white/70 md:text-[21px] xl:text-[32px]">
                        {selected?.role.toUpperCase()}
                    </h1>
                    <h1 className="mt-[8px] text-[24px] md:text-[40px] xl:mt-[15px] xl:text-[56px]">
                        {selected?.name.toUpperCase()}
                    </h1>
                    <p className="mt-[16px] leading-[25px] text-white/70 md:leading-[28px] xl:w-[444px] xl:text-[18px] xl:leading-[32px]">
                        {selected?.bio}
                    </p>
                </div>
                {/* Button in tablet and desktop*/}
                <div className="my-[40px] hidden w-full justify-center gap-[16px] md:flex xl:mt-[120px] xl:justify-start">
                    {datas.map((data, i) => (
                        <button
                            key={i}
                            className={`h-[10px] w-[10px] rounded-full ${selected === data ? 'bg-white' : 'bg-white/40 hover:bg-white/60'}`}
                            onClick={() => onClickEvent(data.name)}
                        ></button>
                    ))}
                </div>
            </div>
            {/* Image in tablet and desktop */}
            <div className="mt-[32px] hidden w-full justify-center md:mt-0 md:flex xl:self-end">
                <img
                    src={selected?.images.png.substring(1)}
                    alt="crew images"
                    className="h-[572px] w-[456.37px] xl:h-[712px] xl:w-[568.07px]"
                />
            </div>
        </div>
    )
}

export default Crew
