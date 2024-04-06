import squashCourt from '@/public/images/photos/squash-glass-court-1-1200x900.jpg';
import grassCourts from '@/public/images/photos/grass-courts-1-1200x900.jpg';
import hardCourt from '@/public/images/photos/tennis-courts-1-1200x900.jpg';
import astroCourts from '@/public/images/photos/tennis-courts-2-1200x900.jpg';
import loungeInside from '@/public/images/photos/lounge-1-1200x900.jpg';
import sauna from '@/public/images/photos/sauna-1-1200x900.jpg';
import SlideShow from '@/app/_components/SlideShow';

const slides = [
    {
        image: hardCourt,
        caption: '2x AstroTurfs, 1x hardcourt',
    },
    {
        image: squashCourt,
        caption: '4x glass front squash courts',
    },
    {
        image: grassCourts,
        caption: '2x grass courts',
    },
    {
        image: astroCourts,
        caption: '2x AstroTurfs, 1x hardcourt',
    },
    {
        image: loungeInside,
        caption: 'Bar',
    },
    {
        image: sauna,
        caption: 'Sauna',
    },
];

export default function HomePageSlideShow() {
    return <SlideShow slides={slides} />;
}
