import SponsorSection from '@/app/_components/SponsorSection';
import JoinNowButton from '@/app/_components/JoinNowButton';
import HomePageSlideShow from '@/app/_components/HomePageSlideShow';
import Image from 'next/image';
import logo from '@/public/images/logos/thorndon-club-logo-200x200.png';
import EmbeddedContactSections from '@/app/_components/EmbeddedContactSections';

export default function Home() {
    return (
        <>
            <section className="bg-white items-center">
                <Image className="bg-white rounded p-1" src={logo} width={200} height={200} alt="logo" />
                <p className="hero-text px-6">
                    Tennis, Squash and more just a stones throw from the Wellington cbd.
                </p>
                <div className="flex justify-center gap-6 flex-wrap">
                    <JoinNowButton />
                </div>
            </section>
            <HomePageSlideShow />
            <EmbeddedContactSections />
            <SponsorSection />
        </>
    );
}
