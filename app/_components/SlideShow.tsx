'use client';

import Image from 'next/image';
import { Fade } from 'react-slideshow-image';

interface Props {
    slides: { image: any; caption: string }[];
}

export default function SlideShow({ slides }: Props) {
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
