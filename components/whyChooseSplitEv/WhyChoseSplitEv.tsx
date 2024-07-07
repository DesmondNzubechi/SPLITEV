
import clock from '../../public/images/glipy.svg';
import connectivity from '../../public/images/connectivity.svg';
import support from '../../public/images/support.svg';
import update from '../../public/images/update.svg';
import Image from 'next/image';

export const WhyChoseSplitEv = () => {

    const arrayItems = [
        {
            icon: clock,
            title: 'Real-Time Tracking',
            description: 'Our intuitive app lets you monitor usage and earnings in real-time.'
        },
        {
            icon: connectivity,
            title: 'Seamless Connectivity',
            description: 'Easy integration with existing infrastructure.'
        },
        {
            icon: support,
            title: '24/7 Support',
            description: 'Our dedicated team is always here to help.'
        },
        {
            icon:update,
            title: 'Regular Updates & Improvements',
            description: 'We continuously enhance our platform to keep you ahead in the EV charging game.'
        },
    ]
    return <div className='px-[30px] py-[100px] flex justify-center items-center '>
        <div className="flex flex-col gap-[30px] ">
            <h1 className="text-[25px] md:text-[48px] text-center font-[600] ">Why Choose SplitEV for Hosts?</h1>
            <div className="grid grid-cols-1 gap-[15px] items-center justify-center md:grid-cols-2 lg:grid-cols-4">
                {
                    arrayItems.map(data => {
                        return <div className={`flex max-w-[300px] self-center h-full rounded-[30px] ${data.title === 'Seamless Connectivity' ? ' bg-gradient-to-r from-[#BDE6A4] to-[#DEFEBA]  ' : 'bg-anotherBg'} flex-col gap-[10px] items-center px-[20px] pt-[20px] pb-[40px] `}>
                            <Image src={data.icon} alt={data.title} width={44} height={44} />
                            <h1 className='text-blackText text-[15px] md:text-[24px] font-[700] text-center leading-[130%] '>{data.title}</h1>
                            <p className='text-center font-[500] leading-[130%] text-textPrimary text-[12px] md:text-[16px] '>
                               {data.description} 
</p>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}