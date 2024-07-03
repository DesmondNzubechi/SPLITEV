//import video from '../../public/images/SplitEv.mp4'

import { useRef } from "react"

export const VideoComponent = () => {

    const videoRef = useRef(null);


    return <div  className="relative bg-white flex items-center mt-[70px]">
    <video  data-autoPlay='true' className="w-full "  autoPlay muted loop playsInline ref={videoRef}>
        <source  src='/splitEv.mp4'  type="video/mp4" />
</video>
<div className=" top-0 absolute w-full h-full">
</div>
</div>
}