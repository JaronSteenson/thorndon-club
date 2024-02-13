import MailchimpSubscribeForm from '@/app/_components/MailchimpSubscribeForm';
import SponsorSection from '@/app/_components/SponsorSection';
import JoinNowButton from '@/app/_components/JoinNowButton';
import LandingPageImages from '@/app/_components/LandingPageImages';

export default function Home() {
    return (
        <>
            <section className="text-center flex items-center">
                <h1>Something for everyone</h1>
                <p className="text-xl">
                    With four squash courts, three astroturf tennis courts,
                    <br /> two grass courts, two bars and a sauna,
                    <br /> we have something for everyone.
                </p>
                <JoinNowButton />.
                <LandingPageImages />
            </section>
            <section className="card m-12 p-6 w-96">
                <h2>Subscribe to our mailing list</h2>
                <MailchimpSubscribeForm />
            </section>
            <SponsorSection />
        </>
    );
}
