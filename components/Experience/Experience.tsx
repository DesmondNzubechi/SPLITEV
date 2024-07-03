import Image from 'next/image'
import splitevApp from '../../public/images/splitImg.png'
import splitevApp2 from '../../public/images/splitImg2.png'
import Link from 'next/link'
import unlimitedIcon from '../../public/images/unlimitedFreedom.svg';
import { LiaCheckSquareSolid } from "react-icons/lia";

export const ExperienceTheSplitEv = () => {
    return <div className='flex flex-col px-[30px] py-[50px] items-center justify-center gap-[50px]'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-[50px] '>
        <div className='flex gap-[50px] '>
            <Image src={splitevApp2} className='  h-fit' alt='splitev app' />
            <Image src={splitevApp} className='  mt-[50px]' alt='splitev app' />
        </div>
        <div className='flex flex-col gap-5'>
            <h1 className='text-blackText font-[700] text-[15px] md:text-[25px] '>EXPERIENCE THE SPLITEV ADVANTAGE</h1>
            <p className='max-w-[600px] '>Discover the ultimate in EV charging flexibility with <br /> <span className='font-bold'>TAILORED SUBSCRIPTION PLANS</span> <br /> Enjoy the freedom of unlimited charging and the convenience of plans designed for every lifestyle. Whether you're a city dweller, a daily commuter, or a long-distance traveler, SplitEV has you covered. Join us on our journey towards sustainable transportation with charging solutions that cater to your every need.</p>
            <Link href='/' className=' flex items-center w-fit gap-[20px] py-[4px] px-[16px] rounded-full justify-center bg-[#BDE6A4] '>
            <LiaCheckSquareSolid className='text-black text-[20px] '/>
                <p className='bg-[#fff] px-[10px] rounded-full py-[5px] text-blackText'>Join Waiting List</p>
            </Link>
            </div>
            
        </div>
    </div>
}