import bg from '../../public/images/greenCommunityBg.png'
import frame from '../../public/images/Frame.svg'
import Image from 'next/image'
import Link from 'next/link'

export const JoinGreenCommunity = () => {
    return <div className="flex justify-center items-center py-[100px] px-[30px] ">
        <div style={{
            background: `url(${bg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize : "cover"
        }} className=' h-full rounded-[20px] py-[50px] flex flex-col gap-5 items-center px-[50px] w-full'>
            <Image src={frame} alt='' />
            <h1 className='text-center text-[25px] md:text-[48px] leading-[140%] '>Join a Green Community</h1>
            <p className='text-[15px] md:text-[22px] font-[500] text-center leading-[130%] text-[#7F847D] '>By becoming a SplitEV host, you’re not just earning – you’re also contributing to a sustainable future and supporting the growing community of EV drivers.</p>
            <Link href='' className=' bg-gradient-to-r from-[#BDE6A4] to-[#DEFEBA] shadow-md px-[50px] text-blackText text-[12px] md:text-[18px] text-center rounded-[22px]  py-[5px] '>Join</Link>
    </div>
        
    </div>
}