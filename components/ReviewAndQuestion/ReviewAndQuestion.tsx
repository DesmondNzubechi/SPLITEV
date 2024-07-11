import ethan from '../../public/images/review1.png';
import julia from '../../public/images/review2.png';
import quoteIcon from '../../public/images/quoteIcon.svg';
import Image from 'next/image';
import Link from 'next/link';
interface revie {
    name: string
    review: string
    date: string
    image: any
    quoteIcon : any
}

export const ReviewAndQuestion = () => {

    const reviewers = [
        {
            name: "Ethan Diaz",
            review: 'SplitEV changed the game for me showing me chargers in my neighborhood! With unlimited charging Brah! It\'s affordable, convenient, and makes living in the city with an EV seamless.',
            image: ethan,
            icon: quoteIcon,
            date: '12.08.2023'
        },
        {
            name: "Julia Ross",
            review: 'SplitEV made it so easy to list my charger. The app takes care of everything, and I love meeting EV enthusiasts. Feels great to contribute and earn extra income.',
            image: julia,
            icon: quoteIcon,
            date : '04.06.2023'
        },
    ]

    return <div className='flex flex-col relative gap-y-[100px] '>
        <div className="flex flex-col md:flex-row items-center relative z-[10] gap-[20px] px-[30px] justify-center ">
            {
                reviewers.map((theReview) => {
                return  <div className="flex flex-row gap-[10px] px-[20px] py-[10px] items-center self-stretch bg-whiteHalf rounded-[120px] shadow-2xl border backdrop-blur-[6px] ">
                <Image src={theReview.image} className='w-[136px] h-[136px] ' alt='ethan image' />
                <div className='flex flex-col '>
                        <p className='text-[12px] md:text-[16px] font-[400] leading-[130%] text-blackText self-stretch '>{theReview.review}</p>
                        <p className='self-end text-[10px] md:text-[12px] text-primaryText leading-[130%] '>{theReview.date}</p>
                </div>
                <Image src={theReview.icon} className='w-[36.729px] mr-[20px] self-start h-[25.779px] ' alt='quote icon' />
            </div>
                })
           }
        </div>

        <div className=" w-full mt-[50px] py-[10px] items-center">
        <div className="flex bg-[#FFF] flex-col w-full px-[30px] py-[50px] gap-[20px] items-center  ">
        <svg xmlns="http://www.w3.org/2000/svg" width="86" height="76" viewBox="0 0 86 76" fill="none">
  <path d="M85.5 25.1613C85.5 11.526 71.5813 0.422852 54.4928 0.422852C37.4043 0.422852 23.5032 11.526 23.5032 25.1613C23.5032 25.8164 23.5386 26.3831 23.574 26.9322C22.8479 27.0917 22.1042 27.2508 21.3782 27.4636L11.1428 20.9999C9.69076 20.0789 7.81362 21.1946 7.93754 22.8946L8.64591 34.1217C3.38656 38.6905 0.5 44.6051 0.5 50.8561C0.5 64.4916 14.4011 75.5769 31.4896 75.5769C48.5781 75.5769 62.4792 64.4916 62.4792 50.8561C62.4792 50.254 62.4083 49.6697 62.3553 49.0853C63.1345 48.9259 63.8959 48.7488 64.5865 48.554L74.8396 55.0352C76.2916 55.9205 78.1687 54.805 78.0448 53.1228L77.3365 41.8779C82.5958 37.3269 85.5 31.3946 85.5 25.1613ZM31.4898 73.8061C15.3752 73.8061 2.27103 63.5176 2.27103 50.8561C2.27103 45.0125 5.05131 39.4519 10.1335 35.1843C10.3461 35.0072 10.47 34.7416 10.4522 34.4582L9.70856 22.7707C9.69076 22.5227 9.95655 22.3458 10.1867 22.4875L20.7763 29.1634C20.9889 29.3051 21.2545 29.3405 21.5023 29.2697C24.2648 28.4552 27.9482 27.8707 31.4898 27.8707C47.6045 27.8707 60.7085 38.177 60.7085 50.8561C60.7083 63.5176 47.6043 73.8061 31.4898 73.8061ZM44.1334 25.1613C44.1334 24.6833 44.5229 24.276 45.0188 24.276H61.5937C62.0895 24.276 62.479 24.6833 62.479 25.1613C62.479 25.6571 62.0895 26.0466 61.5937 26.0466H45.0189C44.5229 26.0466 44.1334 25.6571 44.1334 25.1613ZM68.9959 33.9802H57.6095C57.1314 33.9802 56.7242 33.5905 56.7242 33.0948C56.7242 32.6166 57.1315 32.2095 57.6095 32.2095H68.9959C69.4741 32.2095 69.8813 32.6168 69.8813 33.0948C69.8813 33.5905 69.474 33.9802 68.9959 33.9802ZM68.9959 18.1135H39.9896C39.4938 18.1135 39.1043 17.7239 39.1043 17.2281C39.1043 16.7499 39.494 16.3428 39.9896 16.3428H68.9959C69.4918 16.3428 69.8813 16.7501 69.8813 17.2281C69.8813 17.7239 69.4918 18.1135 68.9959 18.1135Z" fill="#0C1101"/>
  <path d="M45.9884 57.8877H16.9771C16.4878 57.8877 16.0918 58.2837 16.0918 58.773C16.0918 59.2624 16.4878 59.6584 16.9771 59.6584H45.9884C46.4778 59.6584 46.8737 59.2624 46.8737 58.773C46.8737 58.2837 46.4778 57.8877 45.9884 57.8877Z" fill="#ABE138"/>
  <path d="M45.9936 49.9585H24.3814C23.8921 49.9585 23.4961 50.3545 23.4961 50.8438C23.4961 51.3332 23.8921 51.7292 24.3814 51.7292H45.9936C46.483 51.7292 46.879 51.3332 46.879 50.8438C46.879 50.3545 46.483 49.9585 45.9936 49.9585Z" fill="#ABE138"/>
  <path d="M45.9884 42.0278H16.9771C16.4878 42.0278 16.0918 42.4238 16.0918 42.9132C16.0918 43.4025 16.4878 43.7985 16.9771 43.7985H45.9884C46.4778 43.7985 46.8737 43.4025 46.8737 42.9132C46.8739 42.4238 46.4778 42.0278 45.9884 42.0278Z" fill="#ABE138"/>
            </svg>
            <h1 className="text-[25px] md:text-[48px] text-blackText leading-[140%] font-[600] ">Any questions?</h1>
            <p className=" font-[500] leading-[130%] text-textPrimary text-center text-[15px] md:text-[22px] max-w-[861px] ">Contact our technical support to get help from our experts or find a solution on our technical help page.</p>
<Link href='/' className="h-[40px] bg-[#BDE6A4] rounded-[22px] text-blackText flex items-center justify-center px-[18px] ">Ask a question</Link>
        </div>
        </div>
        
        <svg className='absolute top-[30px] left-0 right-0 w-full' xmlns="http://www.w3.org/2000/svg" width="1918" height="686" viewBox="0 0 1918 686" fill="none">
  <path d="M-2 388.875L374.699 9.24418C380.332 3.56772 387.998 0.375 395.995 0.375H1917.5V60.375C1917.5 76.9435 1904.07 90.375 1887.5 90.375H602.963C594.985 90.375 587.335 93.5531 581.706 99.2065L-2 685.375V388.875Z" fill="url(#paint0_linear_13441_93505)" fill-opacity="0.5"/>
  <defs>
    <linearGradient id="paint0_linear_13441_93505" x1="26.0348" y1="219.345" x2="2683.27" y2="100.358" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C6EEB1"/>
      <stop offset="1" stop-color="#E0FFBB"/>
    </linearGradient>
  </defs>
        </svg>
        <svg className='absolute top-[-50px] ' xmlns="http://www.w3.org/2000/svg" width="1920" height="398" viewBox="0 0 1920 398" fill="none">
  <path d="M-2 394.375L388 5.375H1922" stroke="#48E62E" stroke-opacity="0.1" stroke-width="10"/>
</svg>
    </div>
}