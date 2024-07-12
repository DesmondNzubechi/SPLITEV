import Link from 'next/link'
import bloghostImg3 from '../../public/images/bloghost.png'
import bloghostImg1 from '../../public/images/bloghost1.png'
import bloghostImg2 from '../../public/images/bloghost2.png'
import bloghostImg4 from '../../public/images/bloghost4.png'
import Image from 'next/image'
import { YourPottential } from '@/components/Pottential/pottential'
import { EstimatedDemand } from '@/components/estimatedDemand/estimatedDemand'
import { PartnershipProgram } from '@/components/PartnershipSection/PartnershipProgramm'
import { JoiningIsSimple } from '@/components/JoiningIsSimple/JoiningIsSimple'
import { JoinGreenCommunity } from '@/components/JoinGreenCommunity/JoinGreenCommunity'
import { WhyChoseSplitEv } from '@/components/whyChooseSplitEv/WhyChoseSplitEv'
import moneyBag from '../../public/images/moneyBag.svg'

function BlogHost() {
    return <>
    <div className=' py-[150px] px-[30px] flex flex-col gap-[50px] items-center justify-center'>
        <div className='flex flex-col gap-0'>
    <div className='bg-[#FFF] shadow flex flex-col items-center justify-center px-[20px] py-[20px] rounded-[30px] gap-[40px] '>
        <h1 className='flex flex-col text-center text-[25px] md:text-[48px] font-[600] leading-[140%]'>
            <span className='text-blackText'>Transform Your Property into a</span>
            <span className='text-[#92D839] '> Green Powerhouse with SplitEV</span>
        </h1>
        <div className='flex flex-row items-start w-fit '>
                    <Image src={bloghostImg1} className='w-[100px] md:w-[160px] ' alt='blog host' />
                    <Image src={bloghostImg2} className='ml-[-30px]  w-[100px] md:w-[160px] ' alt='blog host' />
                    <Image src={bloghostImg3} className='ml-[-30px] w-[100px] md:w-[160px] ' alt='blog host' />
                    <Image src={bloghostImg4} className='ml-[-30px] w-[100px] md:w-[160px] ' alt='blog host' />
        </div>
        <p className='text-[#7F847D] max-w-[808px] text-[16px] font-[500] leading-[130%] text-center'>As a SplitEV Host, Whether it's a cozy spot in your driveway, a dedicated space at a local business parking area, or a strategic point at a community center, each location adds valuable variety to our network. As a SplitEV Host, You play a pivotal role in building an accessible and eco-friendly charging landscape.</p>
            </div>
            <div className='flex items-center bg-[#FFF] gap-5'>
                <div className='bg-primaryBg w-full rounded-r-full h-[20px] '>
                </div>
                <div className='bg-primaryBg w-full rounded-l-full h-[20px] '>
                </div>
            </div>
            <div className='bg-[#FFF] p-[10px] rounded-full '>
                <div className='flex items-center gap-[10px] rounded-full p-2 bg-[#4A46FB1F] '>
                <Link href='/blog-host' className='bg-anotherBg w-full text-[12px]  md:text-[18px] text-center leading-[150%] font-[600] text-blackText rounded-full px-[10px] py-[6px] items-center self-stretch'>I'm a Host</Link>
                <Link href='/blog-driver' className=' px-[10px] w-full text-[12px] md:text-[18px] text-center leading-[150%] font-[600] text-blackText rounded-full py-[6px] items-center self-stretch'>I'm a Driver</Link>
                </div>
            </div>
        </div>
        

        <div className='flex flex-col gap-[24px] rounded-[20px] p-[5px] bg-[#FFF] '>
            <div className='flex flex-col md:flex-row rounded-[20px] gap-[24px] p-[16px] items-start bg-[#4A46FB1F]'>
                <div className='flex flex-col rounded-[20px] gap-[10px] max-w-[392px] py-[14px] px-[24px] '>
                <div className='bg-[#FFF] p-2 w-fit rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
<path d="M33.4678 18.7031C33.0178 18.6469 32.5959 18.9844 32.5397 19.4625C32.3709 21.0938 31.9491 22.6969 31.2459 24.2156C29.5866 27.7594 26.6616 30.4313 23.0053 31.7813C19.3491 33.1031 15.3553 32.9344 11.8397 31.3031C11.3053 31.05 10.7991 30.7688 10.2928 30.4594C10.7709 30.4313 11.2772 30.2906 11.6991 30.0375C12.2053 29.7563 12.7397 29.4188 13.3022 29.025C13.6959 28.7438 14.0334 28.3781 14.2866 27.9563C14.5678 27.45 14.9053 26.9156 15.0741 26.2969C16.1709 22.0781 12.5147 21.9094 12.4022 20.9813C12.2897 19.9406 13.6397 19.1531 14.4553 18.3375C15.2709 17.5219 15.5241 16.2563 15.1022 15.525C13.7522 13.1063 10.5459 14.3719 10.2366 16.9594C10.0678 18.5063 9.13969 20.0813 8.35219 20.8969C7.56469 21.7125 6.01782 21.2625 5.59594 20.1094C5.11782 18.8156 6.77719 18.3375 6.52407 16.6781C6.46782 16.2281 5.98969 16.0031 5.39907 15.9188L3.48656 15.975C3.68344 14.5969 4.07719 13.2188 4.69594 11.8969C6.83344 7.28438 11.1366 4.19063 16.1709 3.57188C16.6209 3.51563 16.9584 3.09376 16.9022 2.64376C16.8459 2.19376 16.4241 1.85626 15.9741 1.91251C10.4053 2.53126 5.62407 5.99063 3.23344 11.1375C-0.563435 19.2938 2.98032 28.9969 11.1084 32.7938C13.3022 33.8063 15.6366 34.3406 17.9991 34.3406C19.8834 34.3406 21.7678 34.0031 23.5959 33.3563C27.7022 31.8656 30.9647 28.8844 32.7928 24.9188C33.5803 23.2313 34.0584 21.4594 34.2553 19.6313C34.2834 19.1531 33.9459 18.7313 33.4678 18.7031Z" fill="#0C1101"/>
<path d="M25.0317 21.4875C25.7067 21.4875 26.3254 21.1781 26.7754 20.6719C29.1098 17.8312 33.0473 12.4875 32.9067 8.40937C32.766 4.02187 29.3067 0.5625 25.0317 0.5625C20.7567 0.5625 17.2973 4.02187 17.1567 8.40937C17.0442 12.4875 20.9535 17.8594 23.2879 20.6719C23.7379 21.2062 24.3567 21.4875 25.0317 21.4875ZM22.2192 8.4375C22.2192 6.89062 23.4848 5.625 25.0317 5.625C26.5785 5.625 27.8442 6.89062 27.8442 8.4375C27.8442 9.98438 26.5785 11.25 25.0317 11.25C23.4848 11.25 22.2192 9.98438 22.2192 8.4375Z" fill="#0C1101"/>
                        </svg>
                        </div>
                    <h1 className='leading-[130%] md:text-[24px] text-[15px] font-[700]  '>Turn Your Charger Into Cash</h1>
                    <p className=' text-[12px] md:text-[16px] leading-[130%] font-[500] '>Have a charging station? List it on SplitEV and start earning. Convert your idle charger into a profitable asset.</p>

                </div>
                <div className='flex flex-col rounded-[20px] bg-anotherBg gap-[10px] max-w-[392px] py-[14px] px-[24px] '>
                <div className='bg-[#FFF] p-2 w-fit rounded-full'>
              <Image src={moneyBag} alt='money icon' />
               </div>
                    <h1 className='leading-[130%] md:text-[24px] text-[15px] font-[700]  '>Hassle-Free Management:</h1>
                    <p className=' text-[12px] md:text-[16px] leading-[130%] font-[500] '>We handle all the logistics – from secure payments to customer support. You just host and earn.</p>

                </div>
                <div className='flex flex-col rounded-[20px]  gap-[10px] max-w-[392px] py-[14px] px-[24px] '>
                    <div className='bg-[#FFF] p-2 w-fit rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M18 1.5C14.7366 1.5 11.5465 2.46771 8.8331 4.28075C6.11969 6.09379 4.00484 8.67074 2.756 11.6857C1.50715 14.7007 1.18039 18.0183 1.81705 21.219C2.45371 24.4197 4.02518 27.3597 6.33275 29.6673C8.64031 31.9748 11.5803 33.5463 14.781 34.183C17.9817 34.8196 21.2993 34.4929 24.3143 33.244C27.3293 31.9952 29.9062 29.8803 31.7193 27.1669C33.5323 24.4535 34.5 21.2634 34.5 18C34.4948 13.6255 32.7548 9.43167 29.6616 6.33844C26.5683 3.24521 22.3745 1.50516 18 1.5ZM23.5605 23.5605C23.2792 23.8417 22.8978 23.9997 22.5 23.9997C22.1023 23.9997 21.7208 23.8417 21.4395 23.5605L16.9395 19.0605C16.6582 18.7793 16.5001 18.3978 16.5 18V9C16.5 8.60218 16.658 8.22064 16.9393 7.93934C17.2207 7.65804 17.6022 7.5 18 7.5C18.3978 7.5 18.7794 7.65804 19.0607 7.93934C19.342 8.22064 19.5 8.60218 19.5 9V17.379L23.5605 21.4395C23.8417 21.7208 23.9997 22.1023 23.9997 22.5C23.9997 22.8977 23.8417 23.2792 23.5605 23.5605Z" fill="#0C1101"/>
</svg>
               </div>
                    <h1 className='leading-[130%] md:text-[24px] text-[15px] font-[700]  '>Flexible Hosting Options</h1>
                    <p className=' text-[12px] md:text-[16px] leading-[130%] font-[500] '>You're in control. Decide when your charging station is available and set your own schedule.</p>

                </div>
            </div>
        </div>
        </div>
        <YourPottential/>
       <EstimatedDemand/>
       
        <PartnershipProgram />
        <JoiningIsSimple />
        <JoinGreenCommunity />
        <WhyChoseSplitEv/>
     </>
}

export default BlogHost