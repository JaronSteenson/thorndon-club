import AccidentReportEmailLink from '@/app/contact-us/AccidentReportEmailLink';
import ComplaintEmailLink from '@/app/contact-us/ComplaintEmailLink';
import OperationsManagerContactCard from '@/app/_components/ContactCards/OperationsManagerContactCard';
import TennisCaptainContactCard from '@/app/_components/ContactCards/TennisCaptainContactCard';
import SquashCaptainContactCard from '@/app/_components/ContactCards/SquashCaptainContactCard';
import PresidentContactCard from '@/app/_components/ContactCards/PresidentContactCard';
import GoogleMapIframe from '@/app/_components/GoogleMapIFrame';
import FacebookIframe from '@/app/_components/FacebookIframe';
import EmbeddedContactSections from '@/app/_components/EmbeddedContactSections';

export default function ContactUs() {
    return (
        <>
            <section className="flex flex-wrap flex-row justify-center gap-12">
                <OperationsManagerContactCard />
                <PresidentContactCard />
                <SquashCaptainContactCard />
                <TennisCaptainContactCard />
            </section>
            <section className="card-double">
                <h2>Report an accident or submit a complaint</h2>
                <div className="flex flex-wrap justify-center">
                    <p className="bg-blue-200 p-3 m-0 mb-6 rounded w-fit">
                        Please note accidents should be reported within 24 hours.
                    </p>
                </div>
                <div className="flex flex-wrap justify-around flex-row gap-6">
                    <AccidentReportEmailLink />
                    <ComplaintEmailLink />
                </div>
            </section>
            <EmbeddedContactSections />
        </>
    );
}
