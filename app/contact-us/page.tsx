import AccidentReportEmailLink from '@/app/contact-us/AccidentReportEmailLink';
import ComplaintEmailLink from '@/app/contact-us/ComplaintEmailLink';
import ClubManagerContactCard from '@/app/_components/ContactCards/ClubManagerContactCard';
import TennisCaptainContactCard from '@/app/_components/ContactCards/TennisCaptainContactCard';
import SquashCaptainContactCard from '@/app/_components/ContactCards/SquashCaptainContactCard';
import PresidentContactCard from '@/app/_components/ContactCards/PresidentContactCard';

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
            <section>
                <h3>Socials</h3>
                <a href="https://www.facebook.com/thorndonclub">www.facebook.com/thorndonclub/</a>
            </section>
            <section>
                <h3>Club address</h3>
                <a href="https://www.google.com/maps/@-41.273033,174.779612,19z">
                    4 Katherine Ave, Thorndon, Wellington 6011
                </a>
            </section>
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
