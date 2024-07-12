import React, { useRef, useEffect } from "react";
import coinIcon from '../../public/images/dollarIcon.svg';
import Image from 'next/image';
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { InceptionProgram, OtherCompanies, WeMakeChargingEasy, WeMakeChargingEasyForHost } from "../WeMakeChargingEasy/WeMakeChargingEasy";
import { BenefitOfSplitEv } from "../BenefitOfSplitEv/BenefitOfSplitEv";
import { UnlockTheFullPottential } from "../UnlockTheFullPottential/UnlockTheFullPottential";
import { MaximizeYourEarning } from "../MaximizeYourEarning/maximizeYourEarning";
import { EstimatedDemand } from "../estimatedDemand/estimatedDemand";
import { JoinTheSplitEvNetwork } from "../JoinTheSplitEvNetwork/JoinTheSplitEvNetwork";
import { Subscription } from "../Subscription/Subscription";
import { GreenerFuture } from "../GreenerFuture/GreenerFuture";
import { UserFeedback } from "../UserFeedback/UserFeedback";
import { ReviewAndQuestion } from "../ReviewAndQuestion/ReviewAndQuestion";
import { UserFriendlyApp } from "../userFriendlyApp/userFriendlyApp";
import InteractiveMap from "../anotherMap/anotherMap";
import blackBg from '../../public/images/bghere.png';
import Link from 'next/link';
import { DesktopNav } from "../NavBar/desktopNav";
import { MobileNav } from "../NavBar/mobileNav";

export const HeroSectionHost = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

  return (
    <>
      <DesktopNav />
      <MobileNav/>
        <div className="relative w-full overflow-hidden">
            <video
                className="w-full h-[90vh] z-[50] relative object-cover"
                autoPlay
                muted
                loop
                playsInline
                ref={videoRef}
            >
                <source src="/images/splitevVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
          
            {/* <svg className="absolute top-[-50px] md:top-0 h-full z-[50] bottom-0 left-[-100px] md:left-[-20px] " xmlns="http://www.w3.org/2000/svg" width="1000" height="1815" viewBox="0 0 1815 1000" fill="none">
  <path d="M1815 0H0V1815L1815 0Z" fill="rgba(0, 0, 0, 0.50)"/>
            </svg> */}
            <svg className="absolute z-[1000] rounded-ful backdrop-b bottom-0 md:bottom-[-50px] right-0  md:right-[270px]  h-[150px] w-[150px] md:w-[400px] md:h-[357px] " xmlns="http://www.w3.org/2000/svg" width="540" height="357" viewBox="0 0 540 357" fill="none">
  <g filter="url(#filter0_bd_13242_31759)">
    <path d="M55.2647 4.29104L71.0059 12.1616L82.8118 21.344L104.456 25.2793L111.671 28.5588H121.509C129.817 35.5548 219.892 48.8912 283.512 41.6764C286.792 41.3045 289.415 45.6117 294.662 46.2676C299.909 46.9235 300.565 44.3 300.565 44.3C303.626 45.1745 307.022 48.796 312.371 49.547C316.259 50.0928 327.928 48.3929 332.048 48.8912L313.683 63.9765C312.59 65.7255 311.978 68.6989 318.274 66.6C324.571 64.5012 325.27 63.102 324.833 62.6647C325.708 63.5392 327.194 65.6818 326.145 67.2559C324.833 69.2236 338.607 65.9442 341.23 60.6971C343.854 55.45 343.854 52.8265 347.789 52.8265C351.724 52.8265 345.821 58.0735 345.821 60.0412C345.821 62.0088 349.757 63.3206 351.724 62.6647C353.692 62.0088 353.692 63.3206 353.692 63.9765C353.692 64.6324 358.939 67.2559 362.874 62.6647C366.81 58.0735 367.466 60.6971 368.777 60.0412C370.089 59.3853 371.401 56.7618 372.713 57.4177C374.024 58.0735 376.648 58.7294 376.648 60.0412C376.648 61.353 378.616 61.353 379.927 60.6971C381.239 60.0412 393.045 63.3206 393.045 64.6324C393.045 65.9442 375.336 63.9765 370.745 67.2559C366.154 70.5353 368.777 72.503 360.907 72.503C354.61 72.503 353.036 90.2119 353.036 90.2119C353.036 90.2119 357.668 88.2442 360.907 87.9532C364.145 87.6621 354.348 109.888 358.283 117.103C362.305 124.477 369.433 132.844 374.024 119.727C377.697 109.233 372.057 102.674 370.089 96.1148C369.433 91.305 367.425 78.7708 372.057 79.7177C373.983 80.1116 374.68 85.6207 375.992 82.9971C376.569 81.8437 378.553 79.4443 379.271 76.4383C380.188 72.6072 377.304 70.5353 380.583 68.5677C381.841 67.8131 396.324 70.5353 396.324 79.7177C396.324 88.9001 389.11 90.2119 392.389 92.1795C395.669 94.1472 401.572 88.2442 400.916 86.9324C400.26 85.6207 414.033 95.4589 405.507 107.265C396.98 119.071 412.722 124.974 421.248 115.135C429.775 105.297 431.086 105.297 433.71 104.641C436.333 103.985 445.516 92.1795 444.204 90.2119C442.892 88.2442 438.957 86.9324 441.58 84.9648C444.204 82.9971 453.386 81.6854 456.01 81.0295C458.633 80.3736 463.881 75.7824 462.569 74.4706C461.257 73.1589 462.569 68.5677 459.945 69.2236C457.322 69.8795 463.225 68.5677 462.569 65.2883C461.913 62.0088 461.257 52.8265 473.063 51.5147C484.869 50.2029 502.578 42.3323 500.61 26.5911C499.08 25.7166 496.806 23.3117 499.954 20.6881C503.102 18.0646 501.266 17.846 499.954 18.0646C498.861 17.1901 497.331 14.9164 499.954 12.8175C503.234 10.194 499.298 5.6028 501.266 6.25869C503.234 6.91457 503.889 9.53811 506.513 6.25869C509.137 2.97927 511.76 2.32338 517.007 10.8499C522.254 19.3764 517.007 19.3764 521.598 20.6881C526.19 21.9999 525.534 18.7205 526.19 21.344C526.845 23.9676 524.878 25.9352 527.501 25.9352C529.6 25.9352 530.999 26.3725 531.437 26.5911L530.781 31.8382L521.598 40.3647C521.38 39.0529 520.68 36.8229 519.631 38.397C518.319 40.3647 518.975 42.9882 519.631 42.9882C520.287 42.9882 513.728 50.8588 512.416 51.5147C511.367 52.0394 511.104 58.7294 511.104 62.0088C510.667 63.102 510.055 65.4194 511.104 65.9441C512.416 66.6 514.384 69.8795 513.072 70.5353C511.76 71.1912 511.76 73.1589 513.072 73.8148C514.384 74.4706 522.254 77.0942 521.598 78.4059C520.942 79.7177 517.007 77.0942 516.351 78.4059C515.695 79.7177 517.663 81.0295 517.007 81.6854C516.351 82.3413 514.384 79.7177 513.072 79.7177C511.76 79.7177 510.448 81.0295 511.104 81.0295C511.76 81.0295 515.695 84.3089 515.039 84.9648C514.384 85.6207 505.201 87.5883 502.578 90.2119C499.954 92.8354 494.051 98.0825 496.019 98.7384C497.986 99.3942 502.578 95.4589 503.234 94.1472C503.889 92.8354 503.889 100.706 499.298 102.018C494.707 103.33 492.084 103.33 492.084 105.953C492.084 108.577 494.707 107.921 495.363 107.265C496.019 106.609 495.363 124.974 494.051 124.974C493.088 124.974 490.126 123.61 488.107 122.715C487.377 122.391 486.355 122.699 486.181 122.35C485.525 121.038 485.525 118.415 484.213 119.071C482.901 119.727 482.901 123.662 484.213 124.318C485.186 124.805 489.419 128.618 490.731 131.897C491.466 132.836 492.739 132.993 492.739 133.5C492.739 135.468 492.084 147.93 491.428 147.93C490.772 147.93 490.772 139.403 488.804 140.059C486.836 140.715 486.181 137.436 484.869 139.403C483.557 141.371 481.589 134.812 481.589 133.5C481.589 132.188 480.278 126.941 480.934 126.285C481.589 125.63 480.278 120.383 478.31 124.974C476.342 129.565 473.719 128.253 477.654 136.124C479.64 140.095 481.125 141.061 481.855 141.211C482.501 141.344 482.559 140.842 481.855 141.211C481.776 141.253 481.688 141.305 481.589 141.371C479.622 142.683 473.063 138.091 472.407 140.059C471.751 142.027 477.654 143.994 478.31 143.994C478.966 143.994 484.869 145.306 484.869 147.274C484.869 149.241 484.213 148.586 482.245 147.93C480.278 147.274 478.966 147.274 480.934 148.586C482.116 149.374 483.516 150.262 486.14 150.918C488.107 151.41 487.098 153.965 486.836 154.489C486.181 155.8 483.557 153.177 482.245 154.489C480.934 155.8 484.869 159.08 486.836 158.424C488.804 157.768 489.46 154.489 490.116 155.8C490.772 157.112 497.331 159.736 495.363 161.703C493.395 163.671 486.836 167.606 487.492 169.574C488.148 171.542 492.739 170.23 493.395 168.918C494.051 167.606 495.363 166.95 495.363 168.262C495.363 169.574 494.707 172.197 496.019 171.542C497.331 170.886 496.019 167.606 497.331 167.606C498.642 167.606 498.642 171.542 497.986 172.853C497.331 174.165 497.331 176.789 496.019 176.789C494.707 176.789 493.395 174.165 491.428 174.821C489.46 175.477 487.492 177.444 488.148 178.1C488.804 178.756 492.084 178.1 492.739 178.1C493.395 178.1 492.084 182.036 491.428 182.036C490.772 182.036 488.804 182.036 489.46 182.692C490.116 183.347 492.084 184.003 492.739 183.347C493.264 182.823 494.707 182.692 495.363 182.692C495.144 184.003 493.526 186.889 488.804 187.939C482.901 189.25 482.901 196.465 482.901 197.121C482.901 197.777 485.525 197.777 484.869 199.089C484.213 200.4 473.063 202.368 472.407 210.895C471.882 217.716 470.002 219.421 469.128 219.421C465.192 222.045 457.453 228.997 457.978 235.818C458.633 244.345 448.139 253.527 474.375 276.483C475.031 279.762 473.719 280.418 475.031 282.386L481.548 292.589C483.766 296.802 485.292 298.695 488.804 300.751C490.605 301.45 490.679 303.274 489.46 309.277C489.256 309.868 490.813 310.224 491.428 311.901C492.043 313.577 492.043 314.233 491.428 314.524C490.813 314.815 488.859 314.027 488.804 314.524C488.956 318.014 489.887 322.339 488.804 322.395H480.934L476.342 316.492C473.471 316.452 470.834 316.824 470.439 315.836C470.122 314.964 470.014 314.376 470.439 312.557C468.179 310.724 465.322 309.404 465.192 307.965C464.974 306.435 464.274 303.505 463.225 304.03C461.913 304.686 463.436 305.668 462.569 305.998C461.503 306.403 454.292 300.261 455.354 298.127C456.884 296.16 458.502 292.487 452.73 293.536C446.959 294.585 452.73 288.289 452.73 282.386C451.856 280.856 449.582 277.664 447.483 277.139C444.86 276.483 433.054 266.645 431.742 267.301C430.43 267.956 422.56 271.892 419.936 275.171C417.837 277.795 413.377 272.329 411.41 269.268C408.568 267.738 402.227 265.726 399.604 269.924C396.324 275.171 393.045 268.612 387.798 273.859C387.142 270.58 385.043 265.595 381.895 271.892C377.96 279.762 374.68 273.204 372.057 273.859C369.433 274.515 366.154 279.762 364.186 279.107C362.218 278.451 360.251 275.171 358.939 276.483C357.627 277.795 354.348 280.418 358.283 282.386C362.218 284.354 366.154 282.386 366.81 282.386C367.466 282.386 364.842 284.354 366.154 286.321C367.466 288.289 373.368 290.257 373.368 291.568C373.368 292.88 365.498 288.289 364.186 288.289C362.874 288.289 359.595 287.633 360.907 289.601C362.218 291.568 364.186 294.192 361.563 293.536C358.939 292.88 357.627 289.601 356.971 290.912C356.316 292.224 355.66 294.848 352.38 294.848C349.101 294.848 347.133 286.321 339.263 286.977C331.392 287.633 336.639 290.257 335.327 290.912C334.015 291.568 321.554 285.665 319.586 290.912C317.618 296.16 319.586 285.009 317.618 286.977C315.651 288.945 314.339 290.912 314.339 292.224C314.339 293.274 309.966 292.661 307.78 292.224C305.812 290.912 302.271 289.863 303.845 296.16C305.419 302.456 293.569 306.216 287.448 307.31C285.917 307.091 283.381 307.178 285.48 309.277C288.104 311.901 276.298 312.557 277.609 315.18C278.921 317.804 276.298 318.46 274.986 318.46C273.674 318.46 274.33 321.083 276.298 321.739C278.265 322.395 270.395 326.986 273.018 327.642C275.642 328.298 275.642 344.039 278.265 344.695C280.889 345.351 251.374 343.383 251.374 323.707C239.568 314.524 239.568 310.589 237.6 304.03C235.633 297.471 216.31 283.311 210.053 300.095C206.257 310.277 190.262 291.336 188.409 281.074C187.815 277.783 172.012 267.956 170.7 262.054C169.651 257.331 157.145 258.774 151.024 260.086C150.368 261.616 149.318 264.939 150.368 265.989C151.68 267.301 126.756 265.333 118.885 262.054C112.589 259.43 89.5893 245.656 78.8765 239.098C78.2206 237.567 76.1218 234.506 72.9736 234.506C69.8253 234.506 60.7304 234.069 56.5765 233.851C55.0461 233.851 51.9853 232.67 51.9853 227.948C51.9853 222.045 50.6735 218.109 44.1147 213.518C37.5558 208.927 43.4588 209.583 38.8676 208.927C34.2764 208.271 29.6852 196.465 23.7822 199.089C17.8793 201.712 25.094 191.874 24.4381 189.906C23.9134 188.332 18.5341 176.133 15.91 170.23C17.2217 167.825 19.0582 162.49 15.91 160.391C11.9747 157.768 17.2217 151.209 15.2541 149.241C13.2864 147.274 12.6301 145.962 12.6301 140.059C12.6301 134.156 8.03891 133.5 10.6624 124.318C13.286 115.135 8.69467 112.512 8.03879 112.512C7.3829 112.512 15.2535 103.33 15.9094 102.018C16.5653 100.706 13.2881 82.9971 23.7822 74.4706C32.1775 67.6494 36.4626 51.952 37.5558 44.9559C39.0862 45.3931 41.7534 45.4806 40.1793 42.3323C38.2117 38.397 39.5234 36.4294 41.4911 35.7735C43.4587 35.1176 41.4911 31.1823 40.1793 31.1823C38.8675 31.1823 40.1793 16.7528 37.5558 14.7852C34.9322 12.8175 49.3617 23.3117 51.9852 24.6234C54.6088 25.9352 45.4264 30.5264 48.7058 31.1823C51.9852 31.8382 52.6411 33.8058 53.297 34.4617C53.9529 35.1176 55.2647 27.9029 57.2323 27.9029C59.2 27.9029 61.8236 8.88223 55.2647 4.29104Z" fill="url(#paint0_linear_13242_31759)" fill-opacity="0.2" shape-rendering="crispEdges"/>
  </g>
  <defs className="backdrop-blur">
    <filter id="filter0_bd_13242_31759" x="-32" y="-36" width="603.438" height="420.798" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feGaussianBlur in="BackgroundImageFix" stdDeviation="20"/>
      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_13242_31759"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="4"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
      <feBlend mode="normal" in2="effect1_backgroundBlur_13242_31759" result="effect2_dropShadow_13242_31759"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_13242_31759" result="shape"/>
    </filter>
    <linearGradient id="paint0_linear_13242_31759" x1="425.798" y1="301.771" x2="251.333" y2="-203.259" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
    </linearGradient>
  </defs>
            </svg>
            
            <svg className="absolute bottom-0  md:top-0 z-[50] md:z-[200] right-[-660px]  md:right-[266px]" xmlns="http://www.w3.org/2000/svg" width="950" height="838" viewBox="0 0 950 838" fill="none">
  <path d="M838 0L0 838H112L950 0H838Z" fill="url(#paint0_linear_13214_94217)"/>
  <defs>
    <linearGradient id="paint0_linear_13214_94217" x1="920.998" y1="-5.46318e-05" x2="82.4889" y2="837.999" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F5F5F5" stop-opacity="0"/>
      <stop offset="0.950658" stop-color="#E4E5E4"/>
    </linearGradient>
  </defs>
</svg>
            <div className="absolute backdrop-blur-[2px] h-full flex flex-col z-[100] px-[30px] py-[50px] pt-[150px] justify-center left-0 top-0 w-full gap-[50px] bg-blackTransparent">
                <div className="flex flex-col gap-">
                <h1 className='  text-[#FFF] font-[600] text-[25px] md:text-[35x] text-[#BAE88C] '>Power Your Journey with SplitEV –</h1>
                <h2 className='  font-[800] text-[25px] md:text-[35px] text-[#BAE88C] '> Where Convenience Meets Savings</h2>
                </div>
                <div className="flex flex-col gap-3 ">
            <p className="text-[15px] flex items-center gap-2 md:text-[24px] font-[400] leading-[130%] text-[#E0E0E0] ">Join the disruption in electric vehicle charging
              <button className='bg-whiteTp backdrop-saturate-[100px] shadow-2xl   p-2 rounded-full'><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3.77584 1.19961C3.22545 1.19961 2.82517 1.63049 2.82517 2.11148C2.82517 2.60247 3.25547 3.01334 3.7358 3.01334L7.4284 3.01334L12.1017 2.833L10.2404 4.4864L0.303393 14.4368C0.123266 14.6172 0.0332031 14.8376 0.0332031 15.0681C0.0332031 15.5691 0.493527 16 0.973866 16C1.18401 16 1.42418 15.8998 1.60431 15.7194L11.5313 5.78904L13.1725 3.92521L13.0124 8.81525L13.0124 12.3024C13.0124 12.7734 13.4226 13.2043 13.9029 13.2043C14.3833 13.2043 14.8036 12.8235 14.8036 12.2623L14.8036 2.18159C14.8036 1.58038 14.4133 1.20962 13.8429 1.20962L3.77584 1.19961Z" fill="#F5F5F5"/>
</svg></button>
              </p>
                    <Link href='/' className='bg-[#BAE88C] rounded-[20px] w-fit flex items-center gap-[10px]'>
                <Image src={coinIcon} className='ml-[10px]' alt='dollar icon' />
                <p className='bg-white p-2 rounded-full'>Join the community</p>
            </Link>
                </div>
            </div>
            <div className='flex flex-col absolute top-[50%] right-[30px] z-[10000]   items-center gap-5 z-[10] '>
                    <Link className='bg-whiteTp backdrop-saturate-[100px] shadow-2xl   p-2 rounded-full' href=''><MdEmail className='text-white  '/></Link>
                    <Link className='bg-whiteTp backdrop-saturate-[100px] shadow-2xl  p-2 rounded-full' href=''><FaXTwitter className='text-white  ' /></Link>
                    <Link className='bg-whiteTp backdrop-saturate-[100px] shadow-2xl  p-2 rounded-full' href=''><FaLinkedin className='text-white  '/></Link>
                    <Link className='bg-whiteTp backdrop-saturate-[100px] shadow-2xl  p-2 rounded-full' href=''><FaSquareInstagram className='text-white '/></Link>
                </div>
      </div>
      <div className="relative md:pl-[50px]">
        <Image src={blackBg} className="absolute md:w-[700px] z-1 left-[-50px] md:left-[-250px] top-[-20px]  " alt="black background" />
        <WeMakeChargingEasyForHost/>
      </div>
      <OtherCompanies/>
      <BenefitOfSplitEv />
      <UnlockTheFullPottential />
      <div className="md:my-[-200px] ">
      <MaximizeYourEarning />
      </div>
      <div className="md:mt-[150px] ">
     <EstimatedDemand/>
      </div>
      <InceptionProgram />
      <JoinTheSplitEvNetwork />
      <Subscription />
      <GreenerFuture />
      <UserFeedback />
     <ReviewAndQuestion/>
      <UserFriendlyApp />
      <InteractiveMap/>
      </>
    );
};
