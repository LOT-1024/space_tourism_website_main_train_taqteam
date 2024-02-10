import React, { useState } from 'react'
import Data from '../../model/data/data.json'

const datas = Data.destinations

const Destination: React.FC = () => {
    const [currentDestination, setCurrentDestination] = useState(datas[0].name)

    const selected = datas.find(
        (element) => element.name === currentDestination
    )

    const onClickEvent = (value: string) => {
        setCurrentDestination(value)
    }

    return (
        <div className="m-auto flex w-[327px] flex-col items-center text-white md:mt-[40px] md:w-[691px] xl:mt-[76px] xl:w-[1110.5px]">
            <h2 className="text-center tracking-[2.7px] md:self-start md:text-[20px] md:tracking-[3.38px] xl:text-[28px] xl:tracking-[4.72px]">
                <span className="mr-[18px] text-white/30">01</span>PICK YOUR
                DESTINATION
            </h2>
            <div className="flex flex-col items-center justify-center xl:flex-row xl:gap-[157px]">
                <img
                    className="mt-[32px] h-[170px] w-[170px] animate-spin-slow md:mt-[60px] md:h-[300px] md:w-[300px] xl:h-[445px] xl:w-[445px]"
                    src={selected?.images.png.substring(1)}
                    alt="destination image"
                />
                <div className="flex flex-col items-center xl:w-[445px] xl:items-start">
                    <ul className="mt-[26px] flex gap-[26px] text-[14px] leading-[normal] tracking-[2.36px] md:mt-[53px] md:text-[16px] xl:gap-[35px] xl:tracking-[2.7px]">
                        {datas.map((data, i) => (
                            <li key={i}>
                                <button
                                    className={`border-b-[3px] pb-[8px] md:pb-[12px] ${data.name === currentDestination ? 'border-white' : 'border-white/0 text-white/70 hover:border-white/30'}`}
                                    onClick={() => onClickEvent(data.name)}
                                >
                                    {data.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <h1 className="xl:text-100px] mt-[20px] text-[56px] md:mt-[32px] md:text-[80px]">
                        {selected?.name.toUpperCase()}
                    </h1>
                    <p className="w-[327px] text-center leading-[25px] text-white/80 md:w-[573px] xl:w-[445px] xl:text-left xl:text-[18px] xl:leading-[32px]">
                        {selected?.description}
                    </p>
                    <div className="mb-[58px] mt-[32px] w-full border-t-[1px] border-solid border-white/20 text-center md:mb-[62px] md:flex md:w-[573px] xl:mt-[54px] xl:w-[445px] xl:text-left">
                        <div className="flex-1">
                            <h2 className="mt-[32px] text-[14px] leading-[normal] tracking-[2.36px] text-white/60">
                                AVG. DISTANCE
                            </h2>
                            <h1 className="mt-[12px] text-[28px]">
                                {selected?.distance.toUpperCase()}
                            </h1>
                        </div>
                        <div className="flex-1">
                            <h2 className="mt-[32px] text-[14px] leading-[normal] tracking-[2.36px] text-white/60">
                                EST. TRAVEL TIME
                            </h2>
                            <h1 className="mt-[12px] text-[28px]">
                                {selected?.travel.toUpperCase()}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination
