import MailchimpSubscribeForm from '@/app/_components/MailchimpSubscribeForm';
import SponsorSection from '@/app/_components/SponsorSection';
import JoinNowButton from '@/app/_components/JoinNowButton';
import LandingPageImages from '@/app/_components/LandingPageImages';
import FacebookIframe from '@/app/_components/FacebookIframe';
import GoogleMapIframe from '@/app/_components/GoogleMapIFrame';
import Image from 'next/image';
import logoSmall from '@/public/images/logos/thorndon-club-logo.png';

export default function Home() {
    return (
        <>
            <section className="card">
                <Image className="bg-white rounded p-1" src={logoSmall} height={200} alt="logo" />
                <p className="text-xl px-6">
                    Tennis, Squash and more just a stones throw from the Wellington cbd.
                </p>
                <JoinNowButton />.
            </section>
            <div className="flex flex-wrap gap-12 items-start justify-center">
                <section className="iframe-card">
                    <h2>Find us</h2>
                    <GoogleMapIframe height={400} />
                </section>
                <section className="iframe-card">
                    <h2>Follow us</h2>
                    <FacebookIframe height={400} />
                </section>
            </div>
            <section className="form-card">
                <h2>Keep in the loop</h2>
                <MailchimpSubscribeForm />
            </section>
            <SponsorSection />
        </>
    );
}
