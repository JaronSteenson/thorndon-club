import AccidentReportEmailLink from '@/app/contact-us/AccidentReportEmailLink';
import ComplaintEmailLink from '@/app/contact-us/ComplaintEmailLink';
import ClubManagerContactCard from '@/app/_components/ContactCards/ClubManagerContactCard';
import TennisCaptainContactCard from '@/app/_components/ContactCards/TennisCaptainContactCard';
import SquashCaptainContactCard from '@/app/_components/ContactCards/SquashCaptainContactCard';
import PresidentContactCard from '@/app/_components/ContactCards/PresidentContactCard';
import GoogleMapIframe from '@/app/_components/GoogleMapIFrame';
import FacebookIframe from '@/app/_components/FacebookIframe';

export default function ContactUs() {
    return (
        <>
            <section className="flex flex-wrap flex-row justify-center gap-12">
                <ClubManagerContactCard />
                <PresidentContactCard />
                <SquashCaptainContactCard />
                <TennisCaptainContactCard />
            </section>
            <div className="flex flex-wrap gap-12 items-start justify-center">
                <section className="iframe-card">
                    <h2>Find us</h2>
                    <GoogleMapIframe height={300} />
                </section>
                <section className="iframe-card">
                    <h2>Follow us</h2>
                    <FacebookIframe height={300} />
                </section>
            </div>
            <section className="card-double">
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
