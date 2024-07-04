import bgImg from '../../public/images/bg.png';
import arrowImg from '../../public/images/arrow.svg';
import coinIcon from '../../public/images/coin.svg';
import heroImg from '../../public/images/heroImg.png';
import Link from 'next/link';
import Image from 'next/image';
import availabilityBg from '../../public/images/focus-closeup-ev-car-and-charger-with-blur-background-for-progressive-concept.png'
import splitEvImg from '../../public/images/splitevhere.png';
import Nvidia from '../../public/images/nvidia.svg';
import techstar from '../../public/images/techstar.svg';
import innovation from '../../public/images/innovation studio.svg';
import { LuArrowUpRight } from "react-icons/lu";
import benefit from '../../public/images/benefits.svg';
import flatRate from '../../public/images/unlimitedFlatRate.svg'
import empowerCommunication from '../../public/images/empowerCommunity.svg';
import sustainability from '../../public/images/sustainability.svg'
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from 'react-icons/go';
import { ForHost } from '../ForHost/ForHost';
import { Subscription } from '../Subscription/Subscription';
import { ExperienceTheSplitEv } from '../Experience/Experience';
import { ForDrivers } from '../ForDrivers/ForDrivers';
export const HeroSection = () => {
    return<>
    <div style={{
        backgroundImage: `url(${bgImg.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "center",
        backgroundSize : "cover"
    }} className='min-h-[100vh] flex flex-col items-start px-[50px] justify-center py-[50px] pt-[150px] gap-[50px] w-full'>
        <div className='flex flex-col gap-[20px] '>
            <h1 className='text-[48px] font-[600] '><span className='text-blackText '>Power Your Journey with SplitEV –</span><br /> <span className='text-[#BAE88C] '>Where Convenience Meets Savings</span></h1>
            <div className='flex items-center gap-[10px]'><p className='text-[24px] leading-[130%] '>Join the revolution in electric vehicle charging</p> <Image src={arrowImg} alt='icon' /> </div>
            <Link href='/' className='bg-[#BAE88C] rounded-[20px] w-fit flex items-center gap-[24px]'>
                <Image src={coinIcon} className='ml-[20px]' alt='dollar icon' />
                <p className='bg-white p-2 rounded-[15px]'>Join the community</p>
            </Link>
        </div>
        <div className='flex items-end flex-row gap-[30px] '>
        <div className='flex w-[224px] flex-col border relative rounded-[30px] shadow border-[#fff] h-[278px] bg-[#E4FFD0] justify-between p-[10px] gap-[28px] '>
             
                    <button className=' w-[203px] text-[#BDE6A4]  top-[13px] left-0  text-[18px] font-[600] leading-[150%] py-[15px] bg-[#0c1101] rounded-[16px] '>HOST</button>
               
                    <button>HOST</button>
              

            </div>
            <div className='flex w-full flex-col border rounded-[30px] shadow border-[#fff] h-[228px] bg-anotherBg pt-[93px] pr-[40px] pb-0 pl-[20px] gap-[28px] '>
                <h1 className='font-[600] leading-[140%] text-[48px] text-[#0C1101]'><span className='text-[#BAE88C]'>$</span>100K</h1>
                <p className='text-[18px] font-[600] leading-[150%] text-[#7F847D] '>Driver</p>
            </div>
            <div className='flex w-full h-[228px] relative flex-col border rounded-[30px] shadow border-[#fff] bg-anotherBg pt-[93px] pr-[40px] pb-0 pl-[20px] gap-[28px] '>
                <h1 className='font-[600] leading-[140%] text-[48px] text-[#0C1101]'><span className='text-[#BAE88C]'>$</span>100K</h1>
                <p className='text-[18px] font-[600] leading-[150%] text-[#7F847D] '>Driver</p>
            </div>
            <div>
                <Image src={heroImg} className='h-[400px] min-w-[350px]' alt='hero image' />
            </div>
        </div>
        </div>
        <div style={{
        backgroundImage: `url(${availabilityBg.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "center",
        backgroundSize : "cover"
        
        }}
            className=' min-h-[70vh] w-full mb-[50px] flex flex-col justify-end items-center py-[50px] gap-5 rounded-[20px]'
        >
            <h1 className=' text-[#ffffff] text-[32px] font-[500] leading-[130%] '>Customize Your Availability</h1>
            <p className='  text-[#ffffff] font-[400] text-[25px] '>Whether it’s 24/7 or just on weekends, Create a schedule works for you.</p>
            <Link href='/' className='bg-[#BAE88C] rounded-[20px] w-fit flex items-center gap-[24px]'>
                <Image src={coinIcon} className='ml-[20px]' alt='dollar icon' />
                <p className='bg-white p-2 rounded-[15px]'>Join the community</p>
            </Link>
        </div>

        

        <div className='bg-[#E3E4E4] py-[50px] px-[30px] flex flex-col items-center justify-center gap-[30px] '>
            <div className='grid grid-cols-3 gap-[30px] '>
                <Image src={innovation} alt='innovation studios' />
                <Image src={techstar} alt='techstars' />   
                <Image src={Nvidia} alt='nvidia' />   
            </div>
            <div className='flex flex-col gap-2 items-center justify-center'>
                <p className='text-[24px] font-[400] leading-[130%] uppercase text-[#7F847D]'>We make charging your electric vehicle</p>
                <h1 className='text-[#92D839] text-[48px] font-[800] leading-[140%] uppercase '>as easy as charging your cell phone</h1>
                <Link href='/' className='bg-navBg flex items-center gap-[16px] justify-center max-w-fit rounded-[25px] py-[10px] px-[20px] '>Read More <LuArrowUpRight  className='bg-black text-slate-50 p-1 text-[30px] rounded-full '/></Link>
            </div>
            <div>
                <Image src={splitEvImg} alt='splitev image' />
            </div>
        </div>

        

        <div className='flex flex-col items-center justify-center gap-[50px] py-[50px] px-[30px] bg-[#F5F5F5] '>
            <div className='flex flex-col gap-3 items-center justify-center'>
                <div className='p-1 rounded-full bg-[#92D839]'>
                <Image src={benefit} alt='benefit icon' />
               </div>
                
                <h1 className='text-black text-[48px] font-[600] leading-[140%] '>Benefits of SplitEV</h1>
                <p className='font-[500] leading-[130%] text-[22px] text-[#7F847D] '>Experience countless perks, unrivaled convenience and unbeatable reliability</p>
            </div>
            <div className='grid grid-cols-3 gap-[30px] '>
                <div className='bg-anotherBg p-[20px] flex flex-col gap-[10px] items-center justify-center '>
                    <Image src={flatRate} alt='unlimited flat rate charging' />
                    <h1 className='text-[24px] font-[700] leading-[130%] text-black '>Unlimited Flat Rate Charging</h1>
                    <p className=' text-[18px] font-[600] leading-[150%] text-[#7F847D] '>Our transparent pricing model means unlimited monthly EV charging. With SplitEV, you're in control of your EV charging.</p>

                </div>
                <div className='bg-anotherBg p-[20px] flex flex-col gap-[10px] items-center justify-center '>
                    <Image src={empowerCommunication} alt='empower communities' />
                    <h1 className='text-[24px] font-[700] leading-[130%] text-black '>Empower Communities</h1>
                    <p className=' text-[18px] font-[600] leading-[150%] text-[#7F847D] '>We collaborate with property owners to offer charging solutions, fostering local economic growth and ensuring convenient charging <br /> <span className='text-[#92D839]'>for everyone.</span></p>

                </div>
                <div className='bg-anotherBg p-[20px] flex flex-col gap-[10px] items-center justify-center '>
                    <Image src={sustainability} alt='sustainability' />
                    <h1 className='text-[24px] font-[700] leading-[130%] text-black '>Sustainability Meets Convenience</h1>
                    <p className=' text-[18px] font-[600] leading-[150%] text-[#7F847D] '>Energize your vehicle, fueling the movement toward a more <br /> <span className='text-[#92D839]'>sustainable future.</span></p>

</div>
            </div>
        </div>

        


        <div className='flex px-[30px] my-[50px] items-center justify-center bg-gradient-to-r from-[#BDE6A4] to-[#DEFEBA] min-h-[190px] py-[20px] bg-tickGreen '>
            <div className='flex items-center gap-5'>
            <div className='flex items-center hover:bg-tickGreen gap-0 px-[10px] py-[8px] rounded-full bg-white '>
                    <GoArrowLeft className='text-[20px]'/>
                    <span className='mb-[5px]'>-</span>
                    </div>
                <div className='relative'>
                <button className='absolute md:text-[32px] md:px-[20px] md:rounded-[40px] text-[10px] font-[500] leading-[130%] top-[50%] bg-white px-[10px] text-[#0C1101] py-[5px] transform -translate-x-1/2 -translate-y-1/2 hover:bg-tickGreen  z-10 left-[30%] rounded-[20px] '>I'm a Host</button>
        <svg className="icon " xmlns="http://www.w3.org/2000/svg" width="100%" height="114" viewBox="0 0 551 114" fill="var(--white-50, rgba(255, 255, 255, 0.50))" stroke-width=" 3px" stroke=" var(--white-gradient-inclined, #FFF)" filter="drop-shadow(1px 1px 1px rgba(7, 5, 36, 0.12))">
    <g filter="url(#filter0_d_9406_402)">
      <path d="M-1.22392e-06 56C-5.47967e-07 25.0721 25.0721 7.19303e-07 56 1.60661e-06L548.297 1.57303e-05L436 112L56 112C25.0721 112 -1.89987e-06 86.9279 -1.22392e-06 56Z" fill="white" fill-opacity="0.5" shape-rendering="crispEdges"></path>
      <path d="M1.5 56C1.5 25.9005 25.9005 1.5 56 1.5L544.669 1.50002L435.38 110.5L56 110.5C25.9005 110.5 1.5 86.0995 1.5 56Z" stroke="url(#paint0_linear_9406_402)" stroke-width="3" shape-rendering="crispEdges"></path>
    </g>
    <defs>
      <filter id="filter0_d_9406_402" x="0" y="0" width="550.297" height="114" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
        <feOffset dx="1" dy="1"></feOffset>
        <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix type="matrix" values="0 0 0 0 0.028006 0 0 0 0 0.01805 0 0 0 0 0.1425 0 0 0 0.12 0"></feColorMatrix>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9406_402"></feBlend>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9406_402" result="shape"></feBlend>
      </filter>
      <linearGradient id="paint0_linear_9406_402" x1="42.5651" y1="42.5806" x2="342.774" y2="346.024" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"></stop>
        <stop offset="0.999452" stop-color="white" stop-opacity="0"></stop>
      </linearGradient>
    </defs>
            </svg>
</div>
</div>
            <div className='flex items-center gap-5'>
            <div className="relative">
            <button className='absolute hover:bg-tickGreen md:text-[32px] text-[10px] font-[500]  top-[50%] bg-white px-[10px] md:px-[20px] md:rounded-[40px] text-[#0C1101] py-[5px] transform translate-x-1/2 -translate-y-1/2   z-10 right-[30%] rounded-[20px] '>
    I'm a Driver
  </button>      
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="100%" height="114" viewBox="0 0 551 114" fill="var(--white-50, rgba(255, 255, 255, 0.50))" stroke-width=" 3px" stroke=" var(--white-gradient-inclined, #FFF)" filter="drop-shadow(1px 1px 1px rgba(7, 5, 36, 0.12))">
  <g filter="url(#filter0_d_9406_5605)">
    <path d="M113.001 1.25432e-05L493 1.2057e-05C523.928 1.20175e-05 549 25.0721 549 56C549 86.9279 523.928 112 493 112L0.613279 112L113.001 1.25432e-05Z" fill="white" fill-opacity="0.5" shape-rendering="crispEdges"></path>
    <path d="M4.24347 110.5L113.621 1.50001L493 1.50001C523.1 1.50001 547.5 25.9005 547.5 56C547.5 86.0995 523.1 110.5 493 110.5L4.24347 110.5Z" stroke="url(#paint0_linear_9406_5605)" stroke-width="3" shape-rendering="crispEdges"></path>
  </g>
  <defs>
    <filter id="filter0_d_9406_5605" x="0.613281" y="0" width="550.387" height="114" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
      <feOffset dx="1" dy="1"></feOffset>
      <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
      <feComposite in2="hardAlpha" operator="out"></feComposite>
      <feColorMatrix type="matrix" values="0 0 0 0 0.028006 0 0 0 0 0.01805 0 0 0 0 0.1425 0 0 0 0.12 0"></feColorMatrix>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9406_5605"></feBlend>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9406_5605" result="shape"></feBlend>
    </filter>
    <linearGradient id="paint0_linear_9406_5605" x1="43.1854" y1="42.5806" x2="343.394" y2="346.073" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"></stop>
      <stop offset="0.999452" stop-color="white" stop-opacity="0"></stop>
    </linearGradient>
  </defs>
                </svg>
                </div>
                <div className='flex hover:bg-tickGreen items-center gap-0 px-[10px] py-[8px] rounded-full bg-white '>
                  <span className='mb-[3px]'>-</span>
                <GoArrowRight/>
                </div>
            </div>       

        </div>
        
        <ForHost />
        <Subscription />
        <ExperienceTheSplitEv />
        <ForDrivers/>
        </>
}