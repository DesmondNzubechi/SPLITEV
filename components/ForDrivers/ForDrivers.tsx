import monitoringImg from '../../public/images/monitoring.svg';
import earningImg from '../../public/images/earning.svg';
import requestImg from '../../public/images/requestProcessing.svg';
import manageImg from '../../public/images/manage.svg';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import pottential from '../../public/images/calculate.svg';
import clockIcon from '../../public/images/clock.svg';
import hostImg1 from '../../public/images/splitevHost1.png';
import hostImg2 from '../../public/images/splitevHost2.png';
import arrowStyle from '../../public/images/arrowStyle.svg';

export const ForDrivers = () => {

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
    return<>
    <div className='flex items-center px-[30px] py-[50px] justify-center flex-col gap-[100px] '>
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
 
</div>
        </>
}