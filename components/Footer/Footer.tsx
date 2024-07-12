import Image from 'next/image';
import electricVehicle from '../../public/images/electricVehicle.png';
import footerBg from '../../public/images/footerBg.jpeg'
import playstoreIcon from '../../public/images/playStore.svg'
import appstoreIcon from '../../public/images/appStore.svg'
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import quoteIcon from '../../public/images/quoteIcon.svg';
import Link from 'next/link';

export const Footer = () => {
    return <div className='md:pt-[200px] overflow-x-hidden  pb-0 pt-[500px] '>
    <div style={{
        backgroundImage: `url(${footerBg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }} className='relative right-0 w-full after:absolute relative px-[30px] pt-[150px] pb-[20px] after:backdrop-blur-[5px] md:flex-row flex flex-col justify-center gap-[100px] after:w-full after:left-0 after:right-0 after:top-0 after:bottom-0 after:bg-blackTransparent '>
       
        <div className='bg-primaryBg absolute flex justify-center md:rounded-full rounded-[100px] top-[-300px] md:top-[-250px] z-[10] left-[30px] right-[30px] md:right-[100px] md:left-[100px] p-[20px]'>
            <div className='flex items-center md:flex-row  flex-col bg-anotherBg shadow-md rounded-[100px] md:rounded-full w-full border border-[3px] gap-[32px] py-[30px] md:py-[100px] px-[30px] '>
                <Image src={electricVehicle} className=' w-[201px] ' alt='electric vehicle' />
                <div className='flex flex-col items-start gap-[6px] '>
                    <h1 className='text-[15px] text-[#84BE4A] md:text-[32px] font-[700] leading-[130%] uppercase '>Charge clean, drive smart,</h1>
                    <h3 className='font-[500] text-[12px] md:text-[20px] text-blackText '> and be part of the EV revolution with SplitEV!</h3>
                    <p className='text-[10px] md:text-[16px] font-[500] leading-[130%] text-textPrimary'>Don't worry, we don't spam</p>
                    <form action="" className='flex md:flex-row flex-col items-center gap-[16px] items-start'>
                        <input className='flex gap-[10px] h-[40px] w-full px-[20px] rounded-[15px] bg-primaryBg placeholder:text-[14px] text-textPrimary ' type="text" placeholder='Email or Phone number' name="" id="" />
                        <button className='flex w-full items-center bg-[#84BE4A] gap-[10px] rounded-[15px] self-stretch h-[40px] justify-center px-[18px] ' type="submit">Subscribe</button>
                    </form>
                    <p className='text-[12px] font-[400] underlined text-[#BEC5B8] leading-[130%] '>By subscribing, you agree to the Privacy Policy</p>
                </div>
            </div>
        </div>
        <div className='relative a px-[30px] pt-[150px] pb-[50px]  md:flex-row flex flex-col justify-center gap-[100px]  '>
            <div className='flex flex-col z-[10] gap-[20px]'>
                <p className='text-[#FFFFFF]  leading-[150%] font-[600]  text-[18px] '>Download App Available now!</p>
                <div className='flex flex-row gap-[20px]  '>
                    <div className='flex flex-row  items-center bg-navBg gap-[8px] py-[8px] px-[14px] rounded-[30px] '>
                        <Image src={playstoreIcon} alt='playstore icon' />
                        <p className='text-[#FFFFFF] text-[12px] md:text-[14px] leading-[140%] '>Google Play</p>
                    </div>
                    <div className='flex flex-row bg-navBg items-center gap-[8px] py-[8px] px-[14px] rounded-[30px] '>
                        <Image src={appstoreIcon} alt='apptore icon' />
                        <p className='text-[#FFFFFF] text-[12px] md:text-[14px] leading-[140%] '>App Store</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 z-[10] '>
                    <Link className='bg-navBg p-2 rounded-full' href=''><MdEmail className='text-white shadow-2xl'/></Link>
                    <Link className='bg-navBg p-2 rounded-full' href=''><FaXTwitter className='text-white shadow-2xl' /></Link>
                    <Link className='bg-navBg p-2 rounded-full' href=''><FaLinkedin className='text-white shadow-2xl'/></Link>
                    <Link className='bg-navBg p-2 rounded-full' href=''><FaSquareInstagram className='text-white shadow-2xl'/></Link>
                </div>
                <p className='text-[12px] font-[400] text-slate-100 leading-[130%] text-[##E0E0E0] '>© 2022 SplitEV Inc. All rights reserved.</p>
            </div>
            <div className='flex flex-col z-[10] gap-5'>
                <p className='flex items-start gap-2 text-[#CFF0AD] '><Image src={quoteIcon} alt='quote icon' /> <span>- Revolutionizing the EV Charging Experience with SplitEV!</span></p>
                <div className='grid grid-cols-2 md:grid-cols-3  gap-[100px] items-start '>
                    <div className='flex flex-col gap-[16px] items-start  '>
                        <h1 className='text-[15px] md:text-[18px] leading-[150%] font-[600] text-white '>Help</h1>
                        <Link href='' className='text-[12px] md:text-[14px] font-[400] leading-[140%] text-white hover:text-slate-100 '>FAQs</Link>
                        <Link href='' className='text-[12px] md:text-[14px] font-[400] leading-[140%] text-white hover:text-slate-100 '>About Us</Link>
                        <Link href='' className='text-[12px] md:text-[14px] font-[400] leading-[140%] text-white hover:text-slate-100 '>Technical Support</Link>
                    </div>
                    <div className='flex flex-col gap-[16px] items-start  '>
                        <h1 className='text-[15px] md:text-[18px] leading-[150%] font-[600] text-white '>Information</h1>
                        <Link href='' className='text-[12px] md:text-[14px] font-[400] leading-[140%] text-white hover:text-slate-100 '>Blog</Link>
                        <Link href='' className='text-[12px] md:text-[14px] font-[400] leading-[140%] text-white hover:text-slate-100 '>Partnership Program</Link>
                        <Link href='' className='text-[12px] md:text-[14px] font-[400] leading-[140%] text-white hover:text-slate-100 '>For Hosts</Link>
                        <Link href='' className='text-[12px] md:text-[14px] font-[400] leading-[140%] text-white hover:text-slate-100 '>For Drivers</Link>
                    </div>
                    <div className='flex flex-col gap-[16px] items-start  '>
                        <h1 className='text-[15px] md:text-[18px] leading-[150%] font-[600] text-white '>Security</h1>
                        <Link href='' className='text-[12px] md:text-[14px] font-[400] leading-[140%] text-white hover:text-slate-100 '>Privacy Policy</Link>
                        <Link href='' className='text-[12px] md:text-[14px] font-[400] leading-[140%] text-white hover:text-slate-100 '>Cookie</Link>
                        <Link href='' className='text-[12px] md:text-[14px] font-[400] leading-[140%] text-white hover:text-slate-100 '>Terms of Service</Link>
</div>
                </div>
            </div>
        </div>
        </div>
        </div>
}