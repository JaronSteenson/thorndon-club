import Image from 'next/image';
import 'photoswipe/dist/photoswipe.css';
import squashCourt from '@/public/images/photos/squash-glass-court-1-1200x900.jpg';
import grassCourts from '@/public/images/photos/grass-courts-1-1200x900.jpg';
import hardCourt from '@/public/images/photos/tennis-courts-1-1200x900.jpg';
import astroCourts from '@/public/images/photos/tennis-courts-2-1200x900.jpg';
import loungeInside from '@/public/images/photos/lounge-1-1200x900.jpg';
import { Fade } from 'react-slideshow-image';

const slides = [
    {
        image: hardCourt,
        caption: 'Home to three recently re-turfed tennis courts',
    },
    {
        image: squashCourt,
        caption: 'Home to four glass front squash courts',
    },
    {
        image: grassCourts,
        caption: 'Home to two grass tennis courts',
    },
    {
        image: astroCourts,
        caption: 'Home to three recently re-turfed tennis courts',
    },
    {
        image: loungeInside,
        caption: 'Home to The Kathleen Nunneley Lounge',
    },
];

export default function HomePageSlideShow() {
    return (
        <div className="slide-show">
            <Fade indicators>
                {slides.map((slide, index) => (
                    <figure key={index}>
                        <Image className="slide-show-image" src={slide.image} alt={slide.caption} />
                        <figcaption className="text-xl text-center pt-6">{slide.caption}</figcaption>
                    </figure>
                ))}
            </Fade>
        </div>
    );
}
