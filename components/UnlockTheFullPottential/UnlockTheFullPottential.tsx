import Image from 'next/image'
import vector from '../../public/images/vector.svg'
import coinIcon from '../../public/images/tabler_coins.svg'
import checkIcon from '../../public/images/check.svg'
import userIcon from '../../public/images/icon_user.svg'

import theFullPottential from '../../public/images/fullPottential.png'
import Link from 'next/link'
export const UnlockTheFullPottential = () => {
    return <div className='py-[100px] bg-primaryBg'>
        <div className='px-[30px] pb-[20px] '>
            <div className="flex flex-col items-center text-center justify-center gap-[20px] ">
                <h1 className="text-[25px] text-blackText  md:text-[48px] font-[600] leading-[140%]  ">Unlock the Full Potential of Your <span className="relative"> EV Charger <Image className='absolute bottom-[-20px] right-0' src={vector} alt='vector' /> </span></h1>
                <p className='text-[15px] md:text-[22px] font-[400] leading-[130%] text-textPrimary '>As a SplitEV Host, you have the unique opportunity to transform your existing EV charger into a powerful revenue stream. Our platform connects you with a vast network of electric vehicle drivers looking for convenient and reliable charging options.</p>
                <p className='text-[20px] md:text-[30px] leading-[130%] font-[600] text-[#92D839] '>By listing your charger on SplitEV, you can start earning immediately with no caps on your potential income.</p>
            </div>
        </div>
        <div style={{
            background: `url(${theFullPottential.src})`,
          
            backgroundRepeat : "no-repeat"
        }} className=' min-h-[702px] md:bg-contain bg-right-[10px] items-center flex px-[30px] py-[50px] flex-col gap-[20px] relative rounded-[20px] '>
            <div className='flex max-w-[300px] h-[180px] gap-1 md:absolute right-[34%] flex-col items-start backdrop-blur-[10px] bg-whiteTp p-[20px] border rounded-[20px] '>
                <Image src={coinIcon} className='w-[30px] ' alt='coin icon' />
                <h1 className='font-[700] text-[20px] leading-[130%] text-[#FFFFFF] '>Earn on Your Terms</h1>
                <p className='text-[15px]  leading-[150%] font-[600] text-[#FFFFFF] '>Set your availability and pricing to match your schedule and energy costs.</p>
            </div>
            
            <div className='flex max-w-[300px] h-[180px] gap-1 md:absolute right-[11%] top-[22%] flex-col items-start backdrop-blur-[10px] bg-whiteTp p-[20px] border rounded-[20px] '>
                <Image src={checkIcon} className='w-[30px] ' alt='coin icon' />
                <h1 className='font-[700]  text-[20px]  leading-[130%] text-[#FFFFFF] '>Support and Security</h1>
                <p className='text-[15px]  leading-[150%] font-[600] text-[#FFFFFF] '>Enjoy peace of mind with our secure payment processing and 24/7 host support.</p>
            </div>
            <div className='flex max-w-[300px] h-[180px] gap-1 md:absolute right-[40%] top-[35%] flex-col items-start backdrop-blur-[10px] bg-whiteTp p-[20px] border rounded-[20px] '>
                <Image src={userIcon} className='w-[30px] ' alt='coin icon' />
                <h1 className='font-[700] text-[20px]  leading-[130%] text-[#FFFFFF] '>Seamless Integration</h1>
                <p className='text-[15px] leading-[150%] font-[600] text-[#FFFFFF] '>Our user-friendly app and platform make it easy to manage bookings and monitor your earnings in real-time.</p>
            </div>
            <Link href='' className='md:absolute right-[13%] top-[50%] flex items-center gap-5'>
                <p className='px-[18px]  w-fit flex flex-row gap-[20px] items-center py-[5px] rounded-[22px] bg-[#FFF] text-blackText text-[15px] md:text-[18px] leading-[150%] font-[600] shadow-2xl'>Join the Community </p>
                <button className='p-[10px] backdrop-blur-[50px] bg-whiteTp rounded-full'>
                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3.77584 1.19961C3.22545 1.19961 2.82517 1.63049 2.82517 2.11148C2.82517 2.60247 3.25547 3.01334 3.7358 3.01334L7.4284 3.01334L12.1017 2.833L10.2404 4.4864L0.303393 14.4368C0.123266 14.6172 0.0332031 14.8376 0.0332031 15.0681C0.0332031 15.5691 0.493527 16 0.973866 16C1.18401 16 1.42418 15.8998 1.60431 15.7194L11.5313 5.78904L13.1725 3.92521L13.0124 8.81525L13.0124 12.3024C13.0124 12.7734 13.4226 13.2043 13.9029 13.2043C14.3833 13.2043 14.8036 12.8235 14.8036 12.2623L14.8036 2.18159C14.8036 1.58038 14.4133 1.20962 13.8429 1.20962L3.77584 1.19961Z" fill="#F5F5F5"/>
</svg>
                </button>
            </Link>
        </div>
    </div>
}