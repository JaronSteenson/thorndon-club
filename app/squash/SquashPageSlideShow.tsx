import squashCourt from '@/public/images/photos/squash-glass-court-1-1200x900.jpg';
import superChampsTeams from '@/public/images/photos/squash-2023-superchamps-teams-1200x900.jpg';
import SlideShow from '@/app/_components/SlideShow';

const slides = [
    {
        image: squashCourt,
        caption: '4x glass front squash courts',
    },
    {
        image: superChampsTeams,
        caption: '2023 National SuperChamps teams',
    },
];

export default function SquashPageSlideShow() {
    return <SlideShow slides={slides} />;
}
