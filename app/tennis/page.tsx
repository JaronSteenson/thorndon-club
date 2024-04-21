import BookingCourtsParagraph from '@/app/_components/BookingCourtsParagraph';
import ProspectiveMembersWelcome from '@/app/_components/ProspectiveMembersWelcome';
import ClubManagerContactCard from '@/app/_components/ContactCards/ClubManagerContactCard';
import InterclubInto from '@/app/_components/InterclubIntro';
import Link from 'next/link';
import TennisCaptainContactCard from '@/app/_components/ContactCards/TennisCaptainContactCard';
import TennisPageSlideShow from '@/app/tennis/TennisPageSlideShow';
import Beginners from '@/app/_components/Beginners';

export default function Tennis() {
    return (
        <>
            <h1>Tennis</h1>
            <section>
                <h2>Our facilities</h2>
                <p>Our facilities include two astro courts, one hard court, and two grass courts.</p>
                <BookingCourtsParagraph />
                <TennisPageSlideShow />
            </section>
            <section>
                <h2>Club days</h2>
                <p>Tennis club days run every week:</p>
                <ul>
                    <li>Wednesday 5.30pm to 7.30pm</li>
                    <li>Saturdays 2pm to 6pm</li>
                    <li>Sundays 2pm to 6pm</li>
                </ul>
                <ProspectiveMembersWelcome />
                <h3>Format</h3>
                <p>
                    Club days are friendly tennis matches coordinated by a volunteer club member on each club
                    day. All people that turn up to play will be matched with three other players to play
                    doubles matches. An afternoon tea is served on Saturdays and the bar is open on Wednesdays
                    from 5.30pm and Saturdays from 4.30pm.
                </p>
                <Beginners />
            </section>
            <section>
                <h2>Interclub</h2>
                <InterclubInto />
                <h3>Format</h3>
                <p>
                    Where possible, you will be placed in a team from 4-8 players of similarly graded ability
                    and with a team captain. You play once a week on Saturday, 8:30am to 12pm for Tecnifibre
                    teams and 1pm to 5pm for premier teams. Games are throughout the Wellington region. Most
                    teams train together on Tuesday nights.
                </p>
                <h3>How to sign up</h3>
                <p>
                    This competition is only open to full club members, and you must be registered on the
                    grading list.
                </p>
                <p>
                    Get in touch with our <Link href="#tennis-club-captain">Tennis Club Captain</Link> to
                    register your interest.
                </p>
            </section>
            <TennisCaptainContactCard center />
        </>
    );
}
