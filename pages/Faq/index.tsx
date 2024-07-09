
import Image from 'next/image'
import filteringIcon from '../../public/images/filtering.svg'


export default function Faqss() {
    
    const faqFilter = ["Type", "First choice", "Second choice", "Third choice"]
    
    return <div className='py-[150px] flex-col  flex items-center justify-center gap-y-[100px] px-[30px]'>
       <div className=' max-w-[800px] flex-col  flex items-center justify-center gap-y-[100px] px-[30px]'>
    <div className="bg-gradient-to-r from-[#CFF0AD] to-[#A6E675] p-[10px] items-center w-full rounded-full ">
    <div className='bg-primaryBg p-[10px] rounded-full flex items-center justify-between gap-[30px] md:gap-[150px]'>
    <div className="flex items-center gap-[20px] ">
        <input type="text" className="flex w-full outline-0 items-center leading-[140%] font-[400] text-[12px] md:text-[14px] text-primaryText bg-[#FFF] shadow-md rounded-full h-[60px] pl-[20px] pr-[30px]" placeholder="Enter keywords that characterize your problem" name="search" id="" />
        <button className="w-[60px] h-[60px] px-[20px] rounded-full p-[3px] flex items-center justify-center bg-white ">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M19 19L13 13M1 8C1 8.91925 1.18106 9.82951 1.53284 10.6788C1.88463 11.5281 2.40024 12.2997 3.05025 12.9497C3.70026 13.5998 4.47194 14.1154 5.32122 14.4672C6.1705 14.8189 7.08075 15 8 15C8.91925 15 9.82951 14.8189 10.6788 14.4672C11.5281 14.1154 12.2997 13.5998 12.9497 12.9497C13.5998 12.2997 14.1154 11.5281 14.4672 10.6788C14.8189 9.82951 15 8.91925 15 8C15 7.08075 14.8189 6.1705 14.4672 5.32122C14.1154 4.47194 13.5998 3.70026 12.9497 3.05025C12.2997 2.40024 11.5281 1.88463 10.6788 1.53284C9.82951 1.18106 8.91925 1 8 1C7.08075 1 6.1705 1.18106 5.32122 1.53284C4.47194 1.88463 3.70026 2.40024 3.05025 3.05025C2.40024 3.70026 1.88463 4.47194 1.53284 5.32122C1.18106 6.1705 1 7.08075 1 8Z" stroke="#7F847D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 19L13 13M1 8C1 8.91925 1.18106 9.82951 1.53284 10.6788C1.88463 11.5281 2.40024 12.2997 3.05025 12.9497C3.70026 13.5998 4.47194 14.1154 5.32122 14.4672C6.1705 14.8189 7.08075 15 8 15C8.91925 15 9.82951 14.8189 10.6788 14.4672C11.5281 14.1154 12.2997 13.5998 12.9497 12.9497C13.5998 12.2997 14.1154 11.5281 14.4672 10.6788C14.8189 9.82951 15 8.91925 15 8C15 7.08075 14.8189 6.1705 14.4672 5.32122C14.1154 4.47194 13.5998 3.70026 12.9497 3.05025C12.2997 2.40024 11.5281 1.88463 10.6788 1.53284C9.82951 1.18106 8.91925 1 8 1C7.08075 1 6.1705 1.18106 5.32122 1.53284C4.47194 1.88463 3.70026 2.40024 3.05025 3.05025C2.40024 3.70026 1.88463 4.47194 1.53284 5.32122C1.18106 6.1705 1 7.08075 1 8Z" stroke="black" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 19L13 13M1 8C1 8.91925 1.18106 9.82951 1.53284 10.6788C1.88463 11.5281 2.40024 12.2997 3.05025 12.9497C3.70026 13.5998 4.47194 14.1154 5.32122 14.4672C6.1705 14.8189 7.08075 15 8 15C8.91925 15 9.82951 14.8189 10.6788 14.4672C11.5281 14.1154 12.2997 13.5998 12.9497 12.9497C13.5998 12.2997 14.1154 11.5281 14.4672 10.6788C14.8189 9.82951 15 8.91925 15 8C15 7.08075 14.8189 6.1705 14.4672 5.32122C14.1154 4.47194 13.5998 3.70026 12.9497 3.05025C12.2997 2.40024 11.5281 1.88463 10.6788 1.53284C9.82951 1.18106 8.91925 1 8 1C7.08075 1 6.1705 1.18106 5.32122 1.53284C4.47194 1.88463 3.70026 2.40024 3.05025 3.05025C2.40024 3.70026 1.88463 4.47194 1.53284 5.32122C1.18106 6.1705 1 7.08075 1 8Z" stroke="black" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </button>
    </div>
    <div className='flex items-center gap-[20px] '>
       
            <select name="" className='bg-transparent outline-0 w-fit flex flex-col gap-[10px] ' id="">
                {
                    faqFilter.map(choice => {
                        return <option className='bg-primaryBg border-b border' value={choice}>{choice}</option>
                    })
                }
            </select>
            <button className="w-[60px] h-[60px] px-[20px] rounded-full p-[3px] flex items-center justify-center bg-white "><Image src={filteringIcon} className='rounded-full' alt=''/></button>
    </div>
    </div>
            </div>
            
            <div className='bg-primaryBg flex flex-col gap-[10px] items-start p-[20px] w-full rounded-[20px] '>
                            <p className='text-[#7EB86B] text-[12px] md:text-[16px] font-[500] leading-[130%] '>Safety Protocols for SplitEV Charging Stations</p>
                            <div className='flex flex-col gap-[10px]'>
                            <p className='text-textPrimary text-[12px] md:text-[16px] font-[500] leading-[130%] '>Safety Protocols for SplitEV Charging Stations</p>
                            </div>
</div>
        </div>
        </div>
}