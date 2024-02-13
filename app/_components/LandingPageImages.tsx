import Image from 'next/image';
import grassCourt1 from '@/public/images/photos/grass-courts-1.jpg';
import grassCourt1Thumb from '@/public/images/photos/grass-courts-1-500x750.png';

export default function LandingPageImages() {
    return (
        <section className="flex flex-wrap flex-row justify-center items-center">
            <ImagePreview thumb={grassCourt1Thumb} full={grassCourt1} alt="'Grass court photo 1'" />
            <ImagePreview thumb={grassCourt1Thumb} full={grassCourt1} alt="'Grass court photo 1'" />
            <ImagePreview thumb={grassCourt1Thumb} full={grassCourt1} alt="'Grass court photo 1'" />
            <ImagePreview thumb={grassCourt1Thumb} full={grassCourt1} alt="'Grass court photo 1'" />
            <ImagePreview thumb={grassCourt1Thumb} full={grassCourt1} alt="'Grass court photo 1'" />
        </section>
    );
}

interface ImagePreviewProps {
    thumb: any;
    full: any;
    alt: string;
}

function ImagePreview({ thumb, full, alt }: ImagePreviewProps) {
    const className = 'bg-gray-100 rounded'; // Very cheap and simple loading skelly.

    return <Image className={className} src={thumb} alt={alt} height={200} />;
}
