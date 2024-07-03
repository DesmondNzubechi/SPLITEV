import subIcon from '../../public/images/subscription.svg';
import locationIcon from '../../public/images/everywhere.svg';
import smartIcon from '../../public/images/smart.svg';
import unlimitedIcon from '../../public/images/unlimitedFreedom.svg';
import Image from 'next/image';
import Link from 'next/link';
import { GoArrowRight } from 'react-icons/go';

export const Subscription = () => {


    return <div className='flex gap-[50px]  flex-col items-center justify-center px-[30px] py-[50px]'>
        <div className='flex flex-col gap-[10px]  items-center text-center'>
            <Image src={subIcon} alt='subscription icon' />
            <h1 className='text-[25px] md:text-[48px] leading-[140%] font-[600] text-blackText'>Subscription Plans for Every Driver</h1>
            <p className='leading-[130%] font-[500] text-[15px] md:text-[22px] '>Benefit from tariff plans that match your needs, bonuses for each car charge and our referral program. Among the many different plans available, you're sure to find one that's right for you.</p>
        </div>

        <div className='gap-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className='flex max-w-[400px] flex-col gap-[10px] items-start '>
                <Image src={locationIcon} alt='location' />
                <h1 className='text-blackText text-[15px] font-[700] leading-[130%] md:text-[24px] '>Everywhere You Go</h1>
                <p className='text-primaryText text-[12px] md:text-[16px]'>Our expansive network means you're never far from a charge. City streets, rural routes, or hidden getaways, SplitEV's chargers are there. Just open the app, find a charger, and plug in. It’s that simple!</p>
                
                <Link href='/' className='flex  items-center gap-[20px] text-tickGreen px-[10px] py-[8px] rounded-full  '>
                    Learn more
                    <div className='flex items-center gap-0'>
                  <span className='mb-[3px]'>-</span>
                        <GoArrowRight />
                        </div>
               </Link>
            </div>
            <div className='flex max-w-[400px] border-l-2 p-[20px] flex-col gap-[10px] items-start '>
                <Image src={smartIcon} alt='smart icon' />
                <h1 className='text-blackText text-[15px] font-[700] leading-[130%] md:text-[24px] '>Smart and Easy</h1>
                <p className='text-primaryText text-[12px] md:text-[16px]'>Our user-friendly app makes finding and using a charger as easy as ordering your favorite coffee. With real-time updates and seamless navigation, charging your EV is a breeze.</p>
                
                <Link href='/' className='flex  items-center gap-[20px] text-tickGreen px-[10px] py-[8px] rounded-full  '>
                    Learn more
                    <div className='flex items-center gap-0'>
                  <span className='mb-[3px]'>-</span>
                        <GoArrowRight />
                        </div>
               </Link>
            </div>
            <div className='flex max-w-[400px] border-l-2 p-[20px] flex-col gap-[10px] items-start '>
                <Image src={locationIcon} alt='location' />
                <h1 className='text-blackText text-[15px] font-[700] leading-[130%] md:text-[24px] '>Everywhere You Go</h1>
                <p className='text-primaryText text-[12px] md:text-[16px]'>Our expansive network means you're never far from a charge. City streets, rural routes, or hidden getaways, SplitEV's chargers are there. Just open the app, find a charger, and plug in. It’s that simple!</p>
                
                <Link href='/' className='flex  items-center gap-[20px] text-tickGreen px-[10px] py-[8px] rounded-full  '>
                    Learn more
                    <div className='flex items-center gap-0'>
                  <span className='mb-[3px]'>-</span>
                        <GoArrowRight />
                        </div>
               </Link>
            </div>
        </div>

    </div>
}