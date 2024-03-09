import grassCourt1 from '@/public/images/photos/grass-courts-1.jpg';
import grassCourt1Thumb from '@/public/images/photos/grass-courts-1-500x750.png';
import ExpandableImage from '@/app/_components/ExpandableImage';

export default function LandingPageImages() {
    return (
        <section className="flex flex-wrap flex-row justify-center items-center">
            <ExpandableImage thumb={grassCourt1Thumb} full={grassCourt1} alt="'Grass court photo 1'" />
            <ExpandableImage thumb={grassCourt1Thumb} full={grassCourt1} alt="'Grass court photo 1'" />
            <ExpandableImage thumb={grassCourt1Thumb} full={grassCourt1} alt="'Grass court photo 1'" />
            <ExpandableImage thumb={grassCourt1Thumb} full={grassCourt1} alt="'Grass court photo 1'" />
            <ExpandableImage thumb={grassCourt1Thumb} full={grassCourt1} alt="'Grass court photo 1'" />
        </section>
    );
}
