
import hostImg1 from '../../public/images/splitevHost1.png';
import hostImg2 from '../../public/images/splitevHost2.png';
import arrowStyle from '../../public/images/arrowStyle.svg';
import Image from 'next/image';

export const PartnershipProgram = () => {
    
  return  <div className='relative flex py-[50px] justify-between items-center'>

    <div>
    <Image src={hostImg1} alt='car' />
    </div>
    
                <div className='flex  absolute flex-row items-center gap-2 left-[10px] right-[10px] gap-[10px] rounded-full items-start px-[30px] py-[20px]  '>
                    <div className='flex border flex-col border-[5px] border-tickGreen gap-[10px] rounded-full items-start px-[30px] py-[20px] bg-anotherBg '>
                    <h1 className='text-tickGreen font-[500] leading-[130%] text-[20px] md:text-[30px] '>
        SplitEV’s Hosts Partnership Program
        </h1>
        <p className='md:text-[20px] text-[12px] font-[500] leading-[130%] text-blackText'>Partner with us and unlock new opportunities to grow your business while contributing to a greener future.</p>
                    </div>
                    <div className='bg-black p-5 rounded-full'>
                    <Image src={arrowStyle} className='' alt='arrow icon' />
                    </div>
    </div>
    
    <div>
    <Image src={hostImg2} alt='car' />
    </div>
    </div>
}