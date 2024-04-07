import squashCourt from '@/public/images/photos/squash-glass-court-1-1200x900.jpg';
import SlideShow from '@/app/_components/SlideShow';
import grassCourts from '@/public/images/photos/grass-courts-1-1200x900.jpg';
import astroCourts from '@/public/images/photos/tennis-courts-2-1200x900.jpg';
import hardCourt from '@/public/images/photos/tennis-courts-1-1200x900.jpg';

const slides = [
    {
        image: hardCourt,
        caption: '2x astro courts, 1x hard court',
    },
    {
        image: astroCourts,
        caption: '2x astro courts, 1x hard court',
    },
    {
        image: grassCourts,
        caption: '2x grass courts',
    },
];

export default function TennisPageSlideShow() {
    return <SlideShow slides={slides} />;
}
