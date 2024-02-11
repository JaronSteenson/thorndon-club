import MobileLaMailchimpSubscribeForm from '@/app/_components/MailchimpSubscribeForm';
import SponsorSection from '@/app/_components/SponsorSection';

export default function Home() {
    return (
        <>
            <section className="card p-6 w-96">
                <h2>Subscribe to our mailing list</h2>
                <MobileLaMailchimpSubscribeForm />
            </section>
            <SponsorSection />
        </>
    );
}
