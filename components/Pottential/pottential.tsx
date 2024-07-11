import pottential from '../../public/images/calculate.svg';
import Image from 'next/image'; 


export const YourPottential = () => {
    return   <div className='flex text-center flex-col justify-center pb-[50px] px-[30px] gap-[10px]  items-center '>
    <Image src={pottential} className='w-[50px] ' alt='growth icon' />
    <h1 className='text-blackText font-[600] leading-[140%] text-[48px] '>Let's calculate your potential earnings</h1>
    <p className='font-[500] text-[22px] text-textPrimary leading-[130%] '>The calculation of potential earnings is based on favorable conditions, the number of stations you have installed and the statistics of electricity consumption on different days and times calculated on the basis of SplitEV's work.</p>
</div>
}