
import ourAppImg from '../../public/images/ourAppPic.png';
import Image from 'next/image';
export const OurMobileApp = () => {
    return <div className='relative mb-[200px] my-[100px] '>
        <div className='flex flex-col md:flex-row px-[30px] items-start justify-center gap-[150px] '>
            <div className="flex flex-col gap-[30px]  ">
                <h1 className="text-blackText text-[25px] md:text-[48px] leading-[140%] font-[600] ">Our Mobile App</h1>
                <div className='flex flex-col gap-[10px]'>
                <h2 className="text-[#92D839] text-[20px] md:text-[24px] font-[700] leading-[130%]  ">Smart Routing</h2>
                <p className="text-[12px] max-w-[392px] md:text-[16px] text-blackText font-[400] leading-[130%] ">Our app optimizes your route, taking into account your EV's battery level and charger types, ensuring you always reach he most suitable charging station.</p>
                </div>
                <div className="flex items-center  gap-[10px] ">
                    <button className="bg-blackText p-[10px] h-[50px] w-[50px] rounded-full hover:bg-slate-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="26" viewBox="0 0 34 26" fill="none">
  <path d="M33 13L21 1.5M33 13L21 24.5M33 13L12 13M1 13L6 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    </button>
                    <button className="bg-blackText p-[10px] h-[50px] w-[50px] rounded-full hover:bg-slate-700">
                     <svg xmlns="http://www.w3.org/2000/svg" width="34" height="26" viewBox="0 0 34 26" fill="none">
  <path d="M33 13L21 1.5M33 13L21 24.5M33 13L12 13M1 13L6 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>   
</button>
                </div>
            </div>
            <div >
                <Image src={ourAppImg} className='md:h-[500px] md:w-[350px]' alt='our app' />
</div>
        </div>
        <div className='absolute bottom-[-100px] z-[-1] w-full'>
        <div className='bg-white relative rounded-[30px] p-2 '>
        <div className='bg-primaryBg flex justify-start gap-[50px] px-[30px] md:pl-[100px] py-[20px] rounded-[30px] h-[238px] '>
            <div className='gap-[20px] flex flex-col items-start'>
                <h1 className='text-[48px] font-[600] leading-[140%] text-[#A4A3FD] '>+17k</h1>
                <p className='text-textPrimary font-[600] leading-[150%] text-[12px] md:text-[18px] '>Joing the Largest Charging Community</p>
            </div>
            <div className='gap-[20px] flex flex-col items-start'>
                <h1 className='text-[48px] font-[600] leading-[140%] text-[#A4A3FD] '>+5k</h1>
                <p className='text-textPrimary font-[600] leading-[150%] text-[12px] md:text-[18px] '>PROSPECTIVE PARTNERS</p>
            </div>
            </div>
            <div className='bg-lightBlue w-[320px] absolute top-1 right-[20%] border border-white border-[5px] h-[150px] rounded-b-full'> </div>
        </div>
        </div>
    </div>
}