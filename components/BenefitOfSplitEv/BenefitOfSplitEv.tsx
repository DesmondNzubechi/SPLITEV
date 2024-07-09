import benefit from '../../public/images/benefits.svg';
import flatRate from '../../public/images/unlimitedFlatRate.svg'
import empowerCommunication from '../../public/images/empowerCommunity.svg';
import sustainability from '../../public/images/sustainability.svg'
import Image from 'next/image';


export const BenefitOfSplitEv = () => {
    return <div className='flex flex-col items-center justify-center gap-[50px] py-[50px] px-[30px] bg-[#F5F5F5] '>
        <div className='flex flex-col gap-3 items-center justify-center'>
            {/* <div className='p-1 rounded-full bg-[#92D839]'>
            <Image src={benefit} alt='benefit icon' />
           </div>
             */}
            <h1 className='text-black text-[48px] font-[600] leading-[140%] '>Benefits of SplitEV</h1>
            <p className='font-[500] leading-[130%] text-[22px] text-[#7F847D] '>Experience countless perks, unrivaled convenience and unbeatable reliability</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-[30px] '>
            <div className='bg-anotherBg text-center min-h-[350px] p-[20px] flex flex-col gap-[10px] items-center justify-center '>
                <Image src={flatRate} alt='unlimited flat rate charging' />
                <h1 className='text-[24px] font-[700] leading-[130%] text-black '>Unlimited Flat Rate Charging</h1>
                <p className=' text-[18px] font-[600] leading-[150%] text-[#7F847D] '>Our transparent pricing model means unlimited monthly EV charging. With SplitEV, you're in control of your EV charging.</p>

            </div>
            <div className='bg-anotherBg p-[20px] text-center min-h-[350px] flex flex-col gap-[10px] items-center justify-center '>
                <Image src={empowerCommunication} alt='empower communities' />
                <h1 className='text-[24px] font-[700] leading-[130%] text-black '>Empower Communities</h1>
                <p className=' text-[18px] font-[600] leading-[150%] text-[#7F847D] '>We collaborate with property owners to offer charging solutions, fostering local economic growth and ensuring convenient charging <br /> <span className='text-[#92D839]'>for everyone.</span></p>

            </div>
            <div className='bg-anotherBg p-[20px] text-center min-h-[350px] flex flex-col gap-[10px] items-center justify-center '>
                <Image src={sustainability} alt='sustainability' />
                <h1 className='text-[24px] font-[700] leading-[130%] text-black '>Sustainability Meets Convenience</h1>
                <p className=' text-[18px] font-[600] leading-[150%] text-[#7F847D] '>Energize your vehicle, fueling the movement toward a more <br /> <span className='text-[#92D839]'>sustainable future.</span></p>

</div>
        </div>
    </div>

}