
import youngGirlCharging from '../../public/images/youngW.png';
import Link from 'next/link';

export const JoinTheSplitEvNetwork = () => {
    return <div className='px-[30px]   py-[50px] '>
        
        <div style={{
            background: `url(${youngGirlCharging.src})`,
            backgroundRepeat: 'no-repeat',
        }}
            className='flex px-[30px] w-full bg-cover md:pb-[100px]  py-[50px] flex-col justify-end gap-5 items-start rounded-[20px] md:min-h-[851px] '
        >
            <h1 className='text-[20px] md:text-[30px] font-[700] leading-[130%] text-[#FFF]  '>Join the SplitEV Network Today</h1>
            <p className='text-[12px] max-w-[592px] font-[600] text-[#FFF] md:text-[18px] leading-[150%]  '>Start your journey towards uncapped earning potential. Listing your charger on SplitEV not only helps you generate passive income but also contributes to a greener, more sustainable future by expanding the EV charging infrastructure.</p>
            <Link href='/' className='px-[18px] hover:bg-slate-100  w-fit flex flex-row gap-[20px] items-center py-[5px] rounded-[22px] bg-[#FFF] text-blackText text-[15px] md:text-[18px] leading-[150%] font-[600] shadow-2xl'>Sign Up Now and Start Earning!</Link>
</div>
    </div>
}