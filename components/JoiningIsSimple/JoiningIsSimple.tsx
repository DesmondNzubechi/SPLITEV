

import { IoIosCloudDownload } from "react-icons/io";
export const JoiningIsSimple = () => {
    return <div className="flex flex-col gap-[40px] py-[100px] px-[30px] items-center justify-center ">
        <div className="flex flex-col gap-[10px] items-center ">
            <h1 className="text-[25px] text-blackText md:text-[48px] font-[600] leading-[140%]  ">Joining is Simple!</h1>
            <p className="md:text-[18px] text-[12px] font-[600] leading-[150%] text-[#7F847D] ">Our easy-to use interface guides you through the process</p>
        </div>
        <div className='flex flex-col items-start justify-center md:flex-row gap-[30px] md:gap-0'>
            <div className="flex flex-col gap-5 w-[300px]">
                <div className="flex items-center gap-0 ">
                <div className='relative bg-[#FFF] p-[20px] rounded-full'>
                    <h1 className='absolute bg-gradient-to-r top-[-10px] left-0 px-[10px] py-[3px] rounded-full from-[#D1ADFF] to-[#E7D5FF] '>1</h1>
                    <IoIosCloudDownload />
                    </div>
                    <span className=" hidden md:block h-[3px] w-full bg-[#4A46FB1F] "></span>
                </div>
                <div className="flex flex-col gap-5 pr-[15px]">
                    <h1 className=" md:text-[28px] text-[15px] leading-[130%] text-blackText font-[600]  ">Download</h1>
                    <p className="font-[400] leading-[130%] text-[12px] md:text-[16px] text-[#7F847D] ">Download our app from App Store or Play Market</p>
                </div>
            </div>
            <div className="flex flex-col gap-5 w-[300px]">
                <div className="flex items-center gap-0 ">
                <div className='relative bg-[#FFF] p-[20px] rounded-full'>
                    <h1 className='absolute bg-gradient-to-r top-[-10px] left-0 px-[10px] py-[3px] rounded-full from-[#D1ADFF] to-[#E7D5FF] '>1</h1>
                    <IoIosCloudDownload />
                    </div>
                    <span className=" hidden md:block h-[3px] w-full bg-[#4A46FB1F] "></span>
                </div>
                <div className="flex flex-col gap-5 pr-[15px]">
                    <h1 className=" md:text-[28px] text-[15px] leading-[130%] text-blackText font-[600]  ">Sign Up</h1>
                    <p className="font-[400] leading-[130%] text-[12px] md:text-[16px] text-[#7F847D] ">Join our network by registering on the SplitEV app or website.</p>
                </div>
            </div>
            <div className="flex flex-col gap-5 w-[300px] ">
                <div className="flex items-center gap-0 ">
                <div className='relative bg-[#FFF] p-[20px] rounded-full'>
                    <h1 className='absolute bg-gradient-to-r top-[-10px] left-0 px-[10px] py-[3px] rounded-full from-[#D1ADFF] to-[#E7D5FF] '>1</h1>
                    <IoIosCloudDownload />
                    </div>
                    <span className=" hidden md:block h-[3px] w-full bg-[#4A46FB1F] "></span>
                </div>
                <div className="flex flex-col gap-5 pr-[15px]">
                    <h1 className=" md:text-[28px] text-[15px] leading-[130%] text-blackText font-[600]  ">Installation Support</h1>
                    <p className="font-[400] leading-[130%] text-[12px] md:text-[16px] text-[#7F847D] ">We'll assist you in setting up your charging station, ensuring compatibility and safety. Our team is here to guide you every step of the way.</p>
                </div>
            </div>
            <div className="flex flex-col gap-5  w-[300px]">
                <div className="flex items-center gap-0 ">
                <div className='relative bg-[#FFF] p-[20px] rounded-full'>
                    <h1 className='absolute bg-gradient-to-r top-[-10px] left-0 px-[10px] py-[3px] rounded-full from-[#D1ADFF] to-[#E7D5FF] '>1</h1>
                    <IoIosCloudDownload />
                    </div>
                   
                </div>
                <div className="flex flex-col gap-5 pr-[15px]">
                    <h1 className=" md:text-[28px] text-[15px] leading-[130%] text-blackText font-[600]  ">Start Earning</h1>
                    <p className="font-[400] leading-[130%] text-[12px] md:text-[16px] text-[#7F847D] ">Once your station is live, you're ready to welcome EV drivers. Our dynamic pricing model maximizes your earnings while offering competitive rates to users.</p>
                </div>
</div>
        </div>
    </div>
}