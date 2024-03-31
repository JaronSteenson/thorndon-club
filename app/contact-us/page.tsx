import AccidentReportEmailLink from '@/app/contact-us/AccidentReportEmailLink';
import ComplaintEmailLink from '@/app/contact-us/ComplaintEmailLink';
import ClubManagerContactCard from '@/app/_components/ContactCards/ClubManagerContactCard';
import TennisCaptainContactCard from '@/app/_components/ContactCards/TennisCaptainContactCard';
import SquashCaptainContactCard from '@/app/_components/ContactCards/SquashCaptainContactCard';
import PresidentContactCard from '@/app/_components/ContactCards/PresidentContactCard';
import GoogleMapIframe from '@/app/_components/GoogleMapIFrame';
import MailchimpSubscribeForm from '@/app/_components/MailchimpSubscribeForm';
import FacebookIframe from '@/app/_components/FacebookIframe';

export default function ContactUs() {
    return (
        <>
            <section>
                <h3>General</h3>
                <div className="contact-cards">
                    <ClubManagerContactCard />
                    <PresidentContactCard />
                </div>
            </section>
            <section>
                <h3>Club captains</h3>
                <div className="contact-cards">
                    <SquashCaptainContactCard />
                    <TennisCaptainContactCard />
                </div>
            </section>
            <div className="flex flex-wrap gap-2 items-start justify-center">
                <section className="card m-12 p-6 w-96">
                    <h2>Find us</h2>
                    <GoogleMapIframe height={300} />
                </section>
                <section className="card m-12 p-6 w-96">
                    <h2>Follow us</h2>
                    <FacebookIframe height={300} />
                </section>
            </div>
            <section>
                <h2>Report an accident or submit a complaint</h2>
                <p className="bg-blue-200 p-3 rounded">
                    Please note accidents should be reported within 24 hours.
                </p>
                <div className="flex flex-wrap justify-around flex-row gap-6">
                    <AccidentReportEmailLink />
                    <ComplaintEmailLink />
                </div>
            </section>
        </>
    );
}
