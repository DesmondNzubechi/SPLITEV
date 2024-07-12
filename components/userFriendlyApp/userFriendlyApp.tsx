import { useState } from 'react'
import ourapp from '../../public/images/ourapp.png'
import plus from '../../public/images/plus.svg'
import minus from '../../public/images/minus.svg'
import downloadIcon from '../../public/images/downl.svg'
import Link from 'next/link'
import Image from 'next/image'

export const UserFriendlyApp = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const interactive = [
        {
            question: 'INTERACTIVE CHARGING MAP',
            answer: 'Find a Charger Near You: Navigate easily with our interactive map that shows all available charging stations near you. Whether you\'re at home, work, or on the go, charging your EV is just a tap away.'
        },
        {
            question: 'REAL-TIME AVAILABILITY & RESERVATIONS',
            answer: 'Find a Charger Near You: Navigate easily with our interactive map that shows all available charging stations near you. Whether you\'re at home, work, or on the go, charging your EV is just a tap away.'
        },
        {
            question: 'SEAMLESS PAYMENT PROCESS',
            answer: 'Find a Charger Near You: Navigate easily with our interactive map that shows all available charging stations near you. Whether you\'re at home, work, or on the go, charging your EV is just a tap away.'
        },
        {
            question: 'REWARDS & LOYALTY PROGRAM',
            answer: 'Find a Charger Near You: Navigate easily with our interactive map that shows all available charging stations near you. Whether you\'re at home, work, or on the go, charging your EV is just a tap away.'
        },
        {
            question: 'CUSTOMIZABLE USER PROFILES',
            answer: 'Find a Charger Near You: Navigate easily with our interactive map that shows all available charging stations near you. Whether you\'re at home, work, or on the go, charging your EV is just a tap away.'
        },
        {
            question: '24/7 SUPPORT & FEEDBACK',
            answer: 'Find a Charger Near You: Navigate easily with our interactive map that shows all available charging stations near you. Whether you\'re at home, work, or on the go, charging your EV is just a tap away.'
        },
    ]

    const toggleAnswer = (index: any) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    return (
        <div className='md:px-[100px] px-[30px] flex justify-center items-center py-[100px] '>
            <div className='grid grid-col2-1 md:grid-cols-2 gap-x-[50px] justify-around'>
                <div className='flex flex-col gap-[50px] '>
                    <Link href='' className='bg-[#FFF] px-[20px] py-[10px] flex items-center gap-[10px] rounded-[20px] w-fit text-[12px] md:text-[18px] '>
                        Download the app <Image src={downloadIcon} className='bg-black rounded-full ' alt='download icon' />
                    </Link>
                    <Image src={ourapp} className='' alt='our app' />
                </div>
                <div className='flex flex-col gap-[50px]'>

                    <div className='flex flex-col md:self-end md:text-right'>
                        <h3 className='text-textPrimary text-[15px] md:text-[20px] font-[400] leading-[130%] uppercase '>
                            experience the convenience with our
                        </h3>
                        <h1 className='text-[25px] md:text-[35px] text-[#92D839] leading-[130%] font-[700] '>User-friendly mobile app</h1>
                    </div>

                    <div className='flex flex-col gap-[30px] '>
                        {
                            interactive.map((data, index) => (
                                <div key={index} className='flex border-b  flex-row md:max-w-[500px] md:min-w-[500px] justify-between items-center gap-5'>
                                    <div onClick={() => toggleAnswer(index)} className='cursor-pointer flex flex-col gap-3'>
                                        <h1 className='uppercase text-[15px]  focus:text-blackText md:text-[20px] font-[700] leading-[130%] text-textPrimary'>
                                            {data.question}
                                        </h1>
                                        {openQuestion === index && (
                                            <p className='text-[12px] md:text-[16px] font-[400] leading-[130%]'>
                                                {data.answer}
                                            </p>
                                        )}
                                    </div>
                                    <div onClick={() => toggleAnswer(index)} className='cursor-pointer'>
                                        <button className='text-[25px]'>{openQuestion === index ? '-' : '+'}</button>
                                        {/* <Image src={openQuestion === index ? minus : plus} className={` ${minus && 'w-[50px]'} `} alt='toggle  icon' /> */}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
