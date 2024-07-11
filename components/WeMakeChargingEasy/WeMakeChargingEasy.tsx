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
    return <div className='px-[30px] '>
    <div className='grid grid-cols-2 md:grid-cols-5 items-center justify-between py-[50px] gap-[30px] '>
    <Image src={Nvidia} alt='innovation studios' />
    <Image src={urbanite} alt='techstars' />   
            <Image src={innovation} alt='nvidia' /> 
            <Image src={nextGen} alt='techstars' />   
            <Image src={techstar} alt='nvidia' />        
        </div>
        </div>
}

export const InceptionProgram = () => {
    return <div className='px-[30px] w-full py-[20px] bg-[#FFF] '>
        <div className='flex flex-col md:flex-row  justify-around gap-[40px]  '>
            <div className='flex items-center gap-5'>
                <Image src={Nvidia} alt='nvidia' /> 
            <p className='text-[25px] leading-[130%] font-[500] text-blackText px-[30px] border-l-[3px] '>Inception Program</p>    
            </div>
    <Image src={layer1} alt='innovation studios' />  
     
        </div>
        </div>
}