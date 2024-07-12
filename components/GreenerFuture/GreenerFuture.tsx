
import Image from 'next/image';
import ourAppImg from '../../public/images/ourAppPic.png';
import Link from 'next/link'
import { LiaCheckSquareSolid } from "react-icons/lia";

export const GreenerFuture = () => {
    return <div className='py-[100px]  flex flex-col relative'>
        <div className='flex flex-col gap-5 text-right py-[50px] px-[30px] self-end'>
            <h1 className='text-[25px] md:text-[40px] leading-[130%] uppercase font-[700] text-[#92D839] '>Your journey to a greener future</h1>
            <p className='text-[15px] md:text-[20px] font-[400] uppercase text-textPrimary '>just got a whole lot easier</p>
        </div>
        <div className='md:absolute flex justify-center py-[20px] bottom-0 left-[15%] '>
        <div className=' bg-gradient-to-r from-[#D1ADFF] to-[#E7D5FF] relative w-[400px] h-[400px] md:w-[450px] md:h-[450px] rounded-full border border-primaryBg border-[20px] '>
        <Image src={ourAppImg} className='absolute top-[-20px] right-[50px] md:right-[70px] ' alt='our app image' />
        </div>
        </div>
        <div>
            <div className='flex flex-col md:flex-row justify-between '>
                <div className=' w-full bg-[#FFF] '>
                </div>
            <div className='flex w-full  flex-col gap-5 bg-[#FFF] px-[20px] pl-[59px] py-[20px] '>
            <p className='max-w-[600px] '>Discover the ultimate in EV charging flexibility with <br /> <span className='font-bold'>TAILORED SUBSCRIPTION PLANS</span> <br /> Enjoy the freedom of unlimited charging and the convenience of plans designed for every lifestyle. Whether you're a city dweller, a daily commuter, or a long-distance traveler, SplitEV has you covered. Join us on our journey towards sustainable transportation with charging solutions that cater to your every need.</p>
            <Link href='/' className=' flex items-center w-fit gap-[20px] py-[4px] px-[16px] rounded-full justify-center bg-[#BDE6A4] '>
            <LiaCheckSquareSolid className='text-black text-[20px] '/>
                <p className='bg-[#fff] px-[10px] rounded-full py-[5px] text-blackText'>Join Waiting List</p>
            </Link>
                </div>
                
            </div>
        </div>
    </div>
}