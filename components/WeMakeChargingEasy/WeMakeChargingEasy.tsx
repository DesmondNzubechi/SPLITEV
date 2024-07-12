import splitEvImg from '../../public/images/splitevhere.png';
import Nvidia from '../../public/images/nvidia.svg';
import techstar from '../../public/images/techstar.svg';
import innovation from '../../public/images/innovation studio.svg';
import urbanite from '../../public/images/urbanite.svg';
import nextGen from '../../public/images/NextGen.svg';
import { LuArrowUpRight } from "react-icons/lu";
import Link from 'next/link';
import layer1 from '../../public/images/Layer_1.svg';
import Image from 'next/image';
import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export const WeMakeChargingEasy = () => {
    return     <div className='bg-primaryBg py-[50px] px-[30px] flex flex-col items-center justify-center  gap-[30px] '>
    <div className='flex flex-col gap-2 items-center justify-center'>
        <p className='text-[24px] relative z-1 font-[400] leading-[130%] uppercase text-[#7F847D]'>We make charging your electric vehicle</p>
        <h1 className='text-[#92D839] relative z-1 text-[48px] font-[800] leading-[140%] uppercase '>as easy as charging your cell phone</h1>
        {/* <Link href='/' className='bg-navBg flex items-center gap-[16px] justify-center max-w-fit rounded-[25px] py-[10px] px-[20px] '>Read More <LuArrowUpRight  className='bg-black text-slate-50 p-1 text-[30px] rounded-full '/></Link> */}
    </div>
    <div className=''>
        <Image src={splitEvImg} alt='splitev image' />
    </div>
</div>

}


export const WeMakeChargingEasyForHost = () => {
    return     <div className='bg-primaryBg py-[50px] px-[30px] flex flex-col items-center justify-center  gap-[30px] '>
    <div className='flex flex-col gap-2 items-end justify-center'>
        <p className='md:text-[20px] text-[15px] relative z-1 font-[400] leading-[130%] uppercase text-[#7F847D] text-end'>We make charging your electric vehicle</p>
        <h1 className='text-[#92D839] relative z-1 text-[25px] md:text-[30px] font-[800] leading-[140%] uppercase text-end'>as easy as charging your cell phone</h1>
        {/* <Link href='/' className='bg-navBg flex items-center gap-[16px] justify-center max-w-fit rounded-[25px] py-[10px] px-[20px] '>Read More <LuArrowUpRight  className='bg-black text-slate-50 p-1 text-[30px] rounded-full '/></Link> */}
    </div>
    <div className='self-center'>
        <Image src={splitEvImg} alt='splitev image' />
    </div>
</div>

}

export const OtherCompanies = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true, // This will make the slide move from right to left
        responsive: [
            {
                breakpoint: 768, // Screen width under 768px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    return (
        <div className='px-[30px] '>
            <Slider {...settings} className='py-[50px]'>
                <div className='px-[15px]'>
                    <Image src={Nvidia} alt='nvidia' />
                </div>
                <div className='px-[15px]'>
                    <Image src={urbanite} alt='urbanite' />
                </div>
                <div className='px-[15px]'>
                    <Image src={innovation} alt='innovation studios' />
                </div>
                <div className='px-[15px]'>
                    <Image src={nextGen} alt='nextGen' />
                </div>
                <div className='px-[15px]'>
                    <Image src={techstar} alt='techstar' />
                </div>
            </Slider>
        </div>
    );
}


export const InceptionProgram = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true, // This will make the slide move from right to left
        responsive: [
            {
                breakpoint: 768, // Screen width under 768px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='px-[30px] mb-[50px] mt-[150px] w-full py-[20px] bg-[#FFF]'>
            <Slider {...settings} className='flex flex-col md:flex-row justify-around gap-[40px]'>
                <div className='grid custom-slide custom-slider slideHere grid-cols-2 items-center'>
                    <Image src={Nvidia} alt='nvidia' />
                    <p className='text-[25px] leading-[130%] font-[500] text-blackText px-[30px] border-l-[3px]'>Inception Program</p>
                </div>
                <div className='flex items-center justify-center'>
                    <Image src={layer1} alt='innovation studios' />
                </div>
            </Slider>
        </div>
    );
};
