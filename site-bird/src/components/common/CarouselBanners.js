import Image from "next/image";
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import jiboia from "../../../public/planta-jiboia.jpg"
import peperomia from "../../../public/planta-peperomia.jpg"
import peperomiaMelancia from "../../../public/planta-peperomia-melancia.jpg"


export default function CarouselBanners() {
    const fadeAnimationHandler=(props, state) => {
        const transitionTime = props.transitionTime + 'ms';
        const transitionTimingFunction = 'ease-in-out';
    
        let slideStyle = {
            position: 'absolute',
            display: 'block',
            zIndex: -2,
            minHeight: '100%',
            opacity: 0,
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            transitionTimingFunction: transitionTimingFunction,
            msTransitionTimingFunction: transitionTimingFunction,
            MozTransitionTimingFunction: transitionTimingFunction,
            WebkitTransitionTimingFunction: transitionTimingFunction,
            OTransitionTimingFunction: transitionTimingFunction,
        };
    
        if (!state.swiping) {
            slideStyle = {
                ...slideStyle,
                WebkitTransitionDuration: transitionTime,
                MozTransitionDuration: transitionTime,
                OTransitionDuration: transitionTime,
                transitionDuration: transitionTime,
                msTransitionDuration: transitionTime,
            };
        }
    
        return {
            slideStyle,
            selectedStyle: { ...slideStyle, opacity: 1, position: 'relative' },
            prevStyle: { ...slideStyle },
        };
    };
    
    return(
        <>
         <Carousel className='flex ml-[2%] overflow-hidden z-10 relative   '  showArrows={false} animationHandler="fade" swipeable={false} showIndicators={false} autoPlay infiniteLoop showStatus={false} interval={4000} width={10000} >
            <Image className="aspect-square  h-[300px] w-[300px]" src={jiboia}></Image>
            <Image className="aspect-square  h-[300px] w-[300px] " src={peperomia}></Image>
            <Image className="aspect-square  h-[300px] w-[300px]" src={peperomiaMelancia}></Image>
         </Carousel>
        </>
    )
}