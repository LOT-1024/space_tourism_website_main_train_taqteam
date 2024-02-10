import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
    return (
        <div className="mt-[28px] flex flex-col items-center justify-center md:mt-[106px] xl:mb-[131px] xl:mt-[251px]">
            <div className="w-[327px] text-white md:w-[450px] xl:flex xl:w-[1110px]">
                <div className="text-center xl:w-[450px] xl:text-start">
                    <h2 className="leading-[normal] tracking-[2.7px] text-white/75 md:text-[20px] md:tracking-[3.38px] xl:text-[28px]">
                        SO, YOU WANT TO TRAVEL TO
                    </h2>
                    <h1 className="my-[16px] text-[80px] leading-[100px] md:my-[24px] md:text-[150px] md:leading-[150px] xl:h-[172px] xl:w-[445px] xl:leading-[normal]">
                        SPACE
                    </h1>
                    <p className="text-[15px] leading-[25px] text-white/75 md:text-[16px] xl:text-[18px] xl:leading-[32px]">
                        Let's face it; if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we'll give you a truly out of this world experience!
                    </p>
                </div>
                <div className="mt-[33px] flex h-[246px] w-full items-center justify-center md:mb-[90px] md:mt-[156px] xl:m-0 xl:h-[382px] xl:items-end xl:justify-end">
                    <Link
                        to={'destination'}
                        className="relative flex h-[150px] w-[150px] items-center justify-center rounded-full bg-white text-blackCustom md:h-[242px] md:w-[242px] xl:h-[274px] xl:w-[274px]"
                    >
                        <div className="absolute h-[150px] w-[150px] rounded-full bg-white/10 transition-transform hover:scale-150 md:h-[242px] md:w-[242px] xl:h-[274px] xl:w-[274px]"></div>
                        <h1 className="text-center text-[20px] leading-[normal] tracking-[1.25px] md:text-[32px] md:tracking-[2px]">
                            EXPLORE
                        </h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
