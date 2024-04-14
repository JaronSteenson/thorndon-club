import SponsorSection from '@/app/_components/SponsorSection';
import JoinNowButton from '@/app/_components/JoinNowButton';
import HomePageSlideShow from '@/app/_components/HomePageSlideShow';
import Image from 'next/image';
import logo from '@/public/images/logos/thorndon-club-logo-200x200.png';
import EmbeddedContactSections from '@/app/_components/EmbeddedContactSections';

export default function Home() {
    return (
        <>
            <section className="bg-white flex items-center flex-col md:flex-row">
                <Image className="bg-white rounded p-1" src={logo} width={200} height={200} alt="logo" />
                <div className="flex flex-wrap flex-col gap-6">
                    <h3 className="px-6 max-w-96 text-xl text-center font-semibold">
                        Tennis, Squash and more just a stones throw from the Wellington cbd.
                    </h3>
                    <div className="flex justify-center gap-6 flex-wrap">
                        <JoinNowButton />
                    </div>
                </div>
            </section>
            <HomePageSlideShow />
            <EmbeddedContactSections />
            <SponsorSection />
        </>
    );
}
