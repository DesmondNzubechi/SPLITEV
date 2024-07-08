import smallStar1 from '../../public/images/smallStar1.svg';
import bigStar from '../../public/images/bigStar.svg';
import smallStar2 from '../../public/images/smallStar2.svg';
import Image from 'next/image';
import chargingIcon from '../../public/images/charging.svg';
import CoinIcon from '../../public/images/coin.svg';
import sub2 from '../../public/images/Subtract 2.svg';
import sub1 from '../../public/images/Subtract 1.svg';
import java from '../../public/images/java.png';
import trophy from '../../public/images/trophy.svg';
import twoUser from '../../public/images/twoUser.png';
import honor from '../../public/images/honor.png';
import oneUser from '../../public/images/oneUser.png';
import ecoWarrior from '../../public/images/ecowarrior.svg';





export const EarnAsYouCharge = () => {
    const icons = [sub2, sub1, java, trophy, twoUser, honor, oneUser]
    return <div className='relative py-[100px] '>
    <div className='flex gap-[50px] md:gap-[150px] items-center '>
        <div className="flex relative rounded-r-full flex-col bg-lightBlue pr-[10px] py-[10px] items-center   ">
            <div className='absolute left-[100px] flex items-end top-[-48px]'>
                <Image src={smallStar1} alt='star' />
                <Image src={bigStar} alt='star' />
                <Image src={smallStar2} alt='star'/>
            </div>
            <div className="flex flex-col rounded-tr-full  rounded-br-full p-[20px] gap-[10px] items-center bg-anotherBg ">
                <h1 className="text-[20px] md:text-[32px] text-blackText font-[500] leading-[130%]  ">Earn Rewards as You Charge</h1>
<p className="text-[15px] md:text-[24px] leading-[130%] font-[500] ">Accumulate SplitEV Points for every charge. Redeem them for discounts on future sessions, exclusive merchandise, and more. The more you charge, the more you save!</p>
            </div>

        </div>
        <div className='bg-lightBlue rounded-l-[1000px] self-stretch h-[250px]  w-[300px] '>

        </div>
        </div>
        <div className='flex flex-col relative mt-[30px] pl-[40px] md:absolute md:top-[60px] md:right-0 gap-[20px] '>
            <div className='flex items-center py-[10px] px-[20px] rounded-l-full bg-anotherBg gap-[20px] '>
                <Image src={chargingIcon}  className='bg-lightBlue w-[50px] py-1 rounded-full px-2' alt='charging' />
                <div>
                    <h1 className='text-[14px] md:text-[16px] font-[700] '>Charge Master</h1>
                    <p className='text-[14px] leading-[140%] font-[400] '>For 10 charging sessions</p>
                </div>
                <div className='flex items-center gap-2 justify- bg-lightBlue px-[10px] py-[5px] rounded-full '>
                    <Image src={CoinIcon} alt='coin' />
                    <p className=' leading-[140%] text-[12px] text-blackText font-[400] md:text-[14px]'>200</p>
               </div>
            </div>
            <div className='flex items-center gap-1 bg-anotherBg py-[10px] px-[20px] rounded-l-full '>
                {
                    icons.map(icon => {
                       return <Image src={icon} className='' alt='icon' />
                    })
                }
            </div>
            <div className='flex items-center gap-[20px] rounded-l-full py-[10px] px-[20px] bg-anotherBg p '>
                <Image src={ecoWarrior} alt='eco warrior' />
                <div>
                    <h1 className='text-[14px] md:text-[16px] font-[700]  '>Eco Warrior</h1>
                    <p className=' leading-[140%] text-[12px] text-blackText font-[400] md:text-[14px] '>Charges using renewable energy sources 5 times</p>
                </div>
            </div>
        </div>
        </div>
}