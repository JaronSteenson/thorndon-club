import MailchimpSubscribeForm from '@/app/_components/MailchimpSubscribeForm';
import SponsorSection from '@/app/_components/SponsorSection';
import JoinNowButton from '@/app/_components/JoinNowButton';
import LandingPageImages from '@/app/_components/LandingPageImages';
import FacebookIframe from '@/app/_components/FacebookIframe';
import GoogleMapIframe from '@/app/_components/GoogleMapIFrame';

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
            <div className="flex flex-wrap gap-12 items-start justify-center">
                <section className="card p-6">
                    <h2>Find us</h2>
                    <GoogleMapIframe height={400} />
                </section>
                <section className="card p-6">
                    <h2>Follow us</h2>
                    <FacebookIframe height={400} />
                </section>
            </div>
            <section className="card p-6">
                <h2>Keep in the loop</h2>
                <MailchimpSubscribeForm />
            </section>
            <SponsorSection />
        </>
    );
}
