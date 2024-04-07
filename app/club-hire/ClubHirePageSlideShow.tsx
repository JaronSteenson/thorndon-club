import SlideShow from '@/app/_components/SlideShow';
import grassCourts from '@/public/images/photos/grass-courts-1-1200x900.jpg';
import squashCourt from '@/public/images/photos/squash-glass-court-1-1200x900.jpg';
import bar from '@/public/images/photos/lounge-1-1200x900.jpg';
import bar2 from '@/public/images/photos/lounge-2-1200x900.jpg';
import barOtherArea from '@/public/images/photos/lounge-other-room-event-1200x900.jpg';
import deck1 from '@/public/images/photos/club-house-outside-1-1200x900.jpg';
import deck2 from '@/public/images/photos/club-house-outside-2-1200x900.jpg';
import kitchen from '@/public/images/photos/kitchen-1200x900.jpg';
import outsideEvent from '@/public/images/photos/outside-event.jpg';

const slides = [
    {
        image: bar,
        caption: 'Bar',
    },
    {
        image: bar2,
        caption: 'Bar',
    },
    {
        image: barOtherArea,
        caption: 'Inside areas',
    },
    {
        image: deck1,
        caption: 'Outside areas',
    },
    {
        image: deck2,
        caption: 'Outside areas',
    },
    {
        image: outsideEvent,
        caption: 'Outside areas',
    },
    {
        image: grassCourts,
        caption: 'Tennis courts',
    },
    {
        image: kitchen,
        caption: 'Kitchen',
    },
    {
        image: squashCourt,
        caption: 'Squash courts',
    },
];

export default function ClubHirePageSlideShow() {
    return <SlideShow slides={slides} />;
}
