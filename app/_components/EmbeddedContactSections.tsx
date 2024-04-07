import GoogleMapIframe from '@/app/_components/GoogleMapIFrame';
import FacebookIframe from '@/app/_components/FacebookIframe';
import MailchimpSubscribeForm from '@/app/_components/MailchimpSubscribeForm';

export default function EmbeddedContactSections() {
    return (
        <>
            <div className="flex flex-wrap gap-12 items-start justify-center">
                <section className="iframe-card">
                    <h2>Find us</h2>
                    <GoogleMapIframe />
                </section>
                <section className="iframe-card">
                    <h2>Follow us</h2>
                    <FacebookIframe />
                </section>
            </div>
            <section id="mailing-list-subscribe" className="card-double">
                <h2>Keep in the loop</h2>
                <MailchimpSubscribeForm />
            </section>
        </>
    );
}
