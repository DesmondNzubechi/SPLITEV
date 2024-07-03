import monitoringImg from '../../public/images/monitoring.svg';
import earningImg from '../../public/images/earning.svg';
import requestImg from '../../public/images/requestProcessing.svg';
import manageImg from '../../public/images/manage.svg';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import pottential from '../../public/images/calculate.svg';

export const ForHost = () => {

    const arrayItems = [
        {
        title: 'Monitoring',
        text: 'Reserve a charging station at any distance for the times that work best for you.',
        img : monitoringImg,
        },
        {
            title: 'Earnings',
            text: 'Earn money by providing access to your charging stations.',
            img : earningImg,
        },
        {
            title: 'Request processing',
            text: 'Reserve a charging station at any distance for the times that work best for you.',
            img : requestImg,
        },
        {
            title: 'Manage',
            text: 'Reserve a charging station at any distance for the times that work best for you.',
            img : manageImg,
        },
    ]

    const [bgaHere, setBgHere] = useState<string>('bg-transparent')
    return <div className='flex items-center px-[30px] py-[50px] justify-center flex-col gap-[100px] '>
    <div className='flex flex-col md:flex-row items-center justify-center gap-[36px] '>
        <div className='flex flex-col gap-[36px] self-stretch items-start '>
            <h1 className='text-black font-[600] text-[48px] '>For Host</h1>
            <p className='text-[#7F847D] font-[500] leading-[130%] text-[22px] '>Why limit yourself to charging in one place when we help you charge everywhere?</p>
<Link href='/' className='bg-black rounded-[30px] text-white border-black px-[40px] py-[10px] '>Sign Up</Link>
        </div>
        <div className='bg-[#d9b4fd] w-full items-center justify-center grid gap-3 py-[20px] rounded-[20px] p-[10px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {
                arrayItems.map((item, index) => {
                    return <div
                        key={item.title}
                        onMouseOver={() => {
                        setBgHere("bg-white")
                        }}
                        onMouseOut={() => {
                            setBgHere('bg-transparent')
                        }}
                        className={`flex h-full  rounded-[10px] self-center  ${bgaHere} p-2 flex-col gap-3 items-center justify-center text-center `}>
                        <Image src={item.img} className='w' alt={item.title} />
                        <h1 className='text-[#000] text-[18px] font-[700] leading-[130%] '>{item.title}</h1>
                      { bgaHere === 'bg-white' ? <p className=' text[#7F847D] text-[14px] max-w-[200px] leading-[140%] font-[400] '>{item.text}</p> : null}
                        <p></p>
                    </div>
                })
}
        </div>
        </div>
        <div className='flex text-center flex-col gap-[10px] max-w-[1092px] items-center '>
            <Image src={pottential} alt='growth icon' />
            <h1 className='text-blackText font-[600] leading-[140%] text-[48px] '>Let's calculate your potential earnings</h1>
            <p className='font-[500] text-[22px] text-textPrimary leading-[130%] '>The calculation of potential earnings is based on favorable conditions, the number of stations you have installed and the statistics of electricity consumption on different days and times calculated on the basis of SplitEV's work.</p>
        </div>
        <div className='flex flex-col gap-[48px] items-center '>
            <h1 className='text-[20px] font-[600] leading-[130%] '>Level of estimated demand</h1>
            <div className='bg-white p-[20px] rounded-[60px] shadow-2xl'>
            <div className='flex items-center gap-[40px] rounded-[30px] px-[20px] py-[10px] justify-between p-[5px] shadow bg-bgWhite '>
                <button className='py-[4px] bg-gradient-to-r rounded-[25px] from-[#D1ADFF] to-[#E7D5FF]  px-[26px] rounded text-[16px] font-[700] leading-[130%] text-blackText'>High</button>
                <button>Medium</button>
                <button>Low</button>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240" fill="none">
  <circle cx="120" cy="120" r="120" fill="url(#paint0_linear_13382_9831)" fill-opacity="0.5"/>
  <g filter="url(#filter0_d_13382_9831)">
    <circle cx="119.693" cy="119.692" r="106.154" fill="url(#paint1_linear_13382_9831)" shape-rendering="crispEdges"/>
    <circle cx="119.693" cy="119.692" r="104.154" stroke="url(#paint2_linear_13382_9831)" stroke-width="4" shape-rendering="crispEdges"/>
  </g>
  <defs>
    <filter id="filter0_d_13382_9831" x="13.5391" y="13.5381" width="214.309" height="214.308" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="1" dy="1"/>
      <feGaussianBlur stdDeviation="0.5"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.028006 0 0 0 0 0.01805 0 0 0 0 0.1425 0 0 0 0.1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13382_9831"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13382_9831" result="shape"/>
    </filter>
    <linearGradient id="paint0_linear_13382_9831" x1="65.4206" y1="19.0654" x2="142.804" y2="226.916" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B8BBFF" stop-opacity="0.07"/>
      <stop offset="1" stop-color="#909BFA" stop-opacity="0.57"/>
    </linearGradient>
    <linearGradient id="paint1_linear_13382_9831" x1="71.4111" y1="30.4037" x2="139.865" y2="214.271" gradientUnits="userSpaceOnUse">
      <stop stop-color="#AAA8FF" stop-opacity="0"/>
      <stop offset="1" stop-color="#90A1FA" stop-opacity="0.62"/>
    </linearGradient>
    <linearGradient id="paint2_linear_13382_9831" x1="30.0208" y1="94.2541" x2="255.42" y2="140.792" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="0.999452" stop-color="white" stop-opacity="0"/>
    </linearGradient>
  </defs>
</svg>
        </div>
        </div>
}