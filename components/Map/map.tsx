import Image from 'next/image'
import mapImg from '../../public/images/map1.png'

export const Map = () => {
    return <div className='flex items-center justify-center'>
    <div className='flex flex-col items-start justify-around px-[30px] gap-[20px] py-[100px] '>
        <div>
            <h1 className='text-blackText text-[25px] md:text-[48px] font-[600] leading-[130%] '>Promising points of cooperation</h1>
            <p className='text-[15px] flex gap-1 md:text-[18px] leading-[150%] '><span className='text-primaryText'>Map of planned</span>   <span className='text-[#B983FF] '>SplitEV charging points</span></p>
        </div>
        <Image src={mapImg} alt='map' />
        </div>
        </div>
}