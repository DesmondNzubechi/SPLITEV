import clockIcon from '../../public/images/clock.svg';
import Image from 'next/image';

export const EstimatedDemand = () => {
    return  <div className='flex flex-col gap-y-[48px] items-center '>
    <h1 className='text-[20px] font-[600] leading-[130%] '>Level of estimated demand</h1>
    <div className='bg-white p-[20px] rounded-[60px] shadow-2xl'>
    <div className='flex items-center gap-[40px] rounded-[30px] px-[20px] py-[10px] justify-between p-[5px] shadow bg-bgWhite '>
        <button className='py-[4px] bg-gradient-to-r rounded-[25px] from-[#D1ADFF] to-[#E7D5FF]  px-[26px] rounded text-[16px] font-[700] leading-[130%] text-blackText'>High</button>
        <button>Medium</button>
        <button>Low</button>
        </div>
    </div>
    <div className='flex items-center gap-5 relative flex-reversed py-[50px] '>
        <div className='flex flex-col  justify-center absolute bg-primaryBg top-0 left-[40%]  border-white border border-[2px] shadow-2xl px-[30px] py-[20px] items-center rounded-full '>
           <Image src={clockIcon} alt='clock icon'/>
            <h1 className='text-[24px] font-[600] leading-[130%] text-blackText '>9h</h1>
            <p className='font-[500] text-[16px] leading-[130%] text-textPrimary '>A DAY</p>
</div>
        <div className='relative'>
    <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240" fill="none">
<circle cx="120" cy="120" r="120" fill="url(#paint0_linear_13382_9831)" fill-opacity="0.5"/>
<g filter="url(#filter0_d_13382_9831)">
<circle cx="119.693" cy="119.692" r="106.154" fill="url(#paint1_linear_13382_9831)" shape-rendering="crispEdges"/>
<circle cx="119.693" cy="119.692" r="104.154" stroke="url(#paint2_linear_13382_9831)" stroke-width="4" shape-rendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_d_13382_9831" x="13.5391" y="13.5381" width="214.309" height="214.308" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.028006 0 0 0 0 0.01805 0 0 0 0 0.1425 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13382_9831"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13382_9831" result="shape"/>
</filter>
<linearGradient id="paint0_linear_13382_9831" x1="65.4206" y1="19.0654" x2="142.804" y2="226.916" gradientUnits="userSpaceOnUse">
<stop stop-color="#B8BBFF" stop-opacity="0.07"/>
<stop offset="1" stop-color="#909BFA" stop-opacity="0.57"/>
</linearGradient>
<linearGradient id="paint1_linear_13382_9831" x1="71.4111" y1="30.4037" x2="139.865" y2="214.271" gradientUnits="userSpaceOnUse">
<stop stop-color="#AAA8FF" stop-opacity="0"/>
<stop offset="1" stop-color="#90A1FA" stop-opacity="0.62"/>
</linearGradient>
<linearGradient id="paint2_linear_13382_9831" x1="30.0208" y1="94.2541" x2="255.42" y2="140.792" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="0.999452" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
            </svg>
            <div className='absolute flex flex-col items-center top-[35%]  left-[20%] '>
            <h1 className='text-[32px] text-blackText font-[500] leading-[130%] '>
                $1,822.50
            </h1>
            <p className='text-[16px] font-[500] text-textPrimary leading-[130%] '>A YEAR</p>
            </div>
        </div>
        <div className='flex flex-col justify-center border border-white shadow-2xl border-2 h-[212.727px] w-[212.727px] items-center gap-[6px] bg-gradient-to-b from-[#D1ADFF] to-[#E7D5FF] rounded-full backdrop-blur-[10px] '>
            <h1 className='text-[32px] text-blackText font-[500] leading-[130%] '>
                $1,822.50
            </h1>
            <p className='text-[16px] font-[500] text-textPrimary leading-[130%] '>A MONTH</p>
        </div>
        </div>
</div>
}