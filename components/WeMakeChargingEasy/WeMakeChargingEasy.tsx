import splitEvImg from '../../public/images/splitevhere.png';
import Nvidia from '../../public/images/nvidia.svg';
import techstar from '../../public/images/techstar.svg';
import innovation from '../../public/images/innovation studio.svg';
import { LuArrowUpRight } from "react-icons/lu";
import Link from 'next/link';
import Image from 'next/image';

export const WeMakeChargingEasy = () => {
    return     <div className='bg-[#E3E4E4] py-[50px] px-[30px] flex flex-col items-center justify-center gap-[30px] '>
    <div className='flex flex-col gap-2 items-center justify-center'>
        <p className='text-[24px] font-[400] leading-[130%] uppercase text-[#7F847D]'>We make charging your electric vehicle</p>
        <h1 className='text-[#92D839] text-[48px] font-[800] leading-[140%] uppercase '>as easy as charging your cell phone</h1>
        {/* <Link href='/' className='bg-navBg flex items-center gap-[16px] justify-center max-w-fit rounded-[25px] py-[10px] px-[20px] '>Read More <LuArrowUpRight  className='bg-black text-slate-50 p-1 text-[30px] rounded-full '/></Link> */}
    </div>
    <div>
        <Image src={splitEvImg} alt='splitev image' />
    </div>
</div>

}

export const OtherCompanies = () => {
    return <div className='px-[30px] '>
    <div className='grid grid-cols-3 py-[50px] gap-[30px] '>
    <Image src={innovation} alt='innovation studios' />
    <Image src={techstar} alt='techstars' />   
    <Image src={Nvidia} alt='nvidia' />   
        </div>
        </div>
}