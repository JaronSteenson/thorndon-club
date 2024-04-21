import BookingCourtsParagraph from '@/app/_components/BookingCourtsParagraph';
import ProspectiveMembersWelcome from '@/app/_components/ProspectiveMembersWelcome';
import { facebookUrl, iSquashRegistrationUrl, squashTournamentCalendar } from '@/app/globals';
import SquashCaptainContactCard from '@/app/_components/ContactCards/SquashCaptainContactCard';
import Link from 'next/link';
import SquashPageSlideShow from '@/app/squash/SquashPageSlideShow';
import InterclubInto from '@/app/_components/InterclubIntro';
import Beginners from '@/app/_components/Beginners';

export default function Squash() {
    return (
        <>
            <h1>Squash</h1>
            <section>
                <h2>Our facilities</h2>
                <p>
                    Our facilities include four high-quality squash courts (including one glass back) with
                    glass front walls, recently refinished floors, and electronic scoring systems and
                    displays.
                </p>
                <BookingCourtsParagraph />
                <SquashPageSlideShow />
            </section>
            <section>
                <h2>Club nights</h2>
                <p>Squash club nights run every week:</p>
                <ul>
                    <li>Thursdays 5:30pm to 8pm</li>
                    <li>Sundays 3pm to 5pm</li>
                </ul>
                <ProspectiveMembersWelcome />
                <h3>What do I do?</h3>
                <p>
                    Come down to the club from about 5:30pm on Thursdays or 3pm on Sundays, wander into the
                    squash area (follow the outside landing) and let a member know that you are new and here
                    for club night. They’ll show you the ropes and introduce you to fellow members.
                </p>
                <h3>What do I need?</h3>
                <p>
                    Some gear to do some running around in (squash is energetic) and some non-marking sports
                    shoes. If you’ve got a squash racquet, that is good. If not, the club can lend you one for
                    the night (you’ll need to buy one if you want to join and keep playing though). The club
                    supplies squash balls for club nights.
                </p>
                <h3>Format</h3>
                <p>
                    Due to popularity, most courts will be playing three quarter court, some courts may have
                    single matches depending on numbers.
                </p>
                <Beginners />
            </section>
            <section>
                <h2>Club tournaments</h2>
                <p>
                    We have three major tournaments each year, as well as Club Champs and the Thorndon
                    Doubles. See the latest tournament schedule on the{' '}
                    <a href={squashTournamentCalendar} target="_blank">
                        Squash NZ calendar
                    </a>
                    .
                </p>
            </section>
            <section>
                <h2>Interclub</h2>
                <InterclubInto />
                <p>
                    Autumn Interclub starts in March, Winter Interclub in May/June, and Spring Interclub in
                    August/September.
                </p>
                <h3>Format</h3>
                <p>
                    Where possible, you will be placed in a team from 4–6 players of similar graded ability
                    with a team captain. You play once a week on Tuesdays or Wednesdays, 7pm-11pm. Games are
                    alternated throughout the Wellington region with five home games and five away games. The
                    home team supplies supper after the games.
                </p>
                <h3>How to sign up</h3>
                <p>
                    This competition is only open to full club members, and you must be registered on the{' '}
                    <a href="#grading-list">grading list</a>.
                </p>
                <p>
                    Get in touch with our <Link href="#squash-club-captain">Squash Club Captain</Link> to
                    register your interest.
                </p>
            </section>
            <section>
                <h2>Intraclub</h2>
                <p>
                    From time to time, usually pre and post-season we also have intraclub. The format is
                    similar to interclub but all games are at our club.
                </p>
                <p>
                    <a href={facebookUrl} rel="noopener" target="_blank">
                        Follow us on Facebook
                    </a>{' '}
                    or <Link href="/contact-us/#mailing-list-subscribe">subscribe to our mailing list</Link>{' '}
                    to keep in the loop.
                </p>
            </section>
            <section id="grading-list">
                <h2>Registering on the grading list</h2>
                <ol>
                    <li>
                        Create an{' '}
                        <a href={iSquashRegistrationUrl} rel="noopener" target="_blank">
                            iSquash account
                        </a>{' '}
                        (select Thorndon as your club)
                    </li>
                    <li>
                        Get in touch with our <Link href="#squash-club-captain">Squash Club Captain</Link> to
                        organise assessing your grade
                    </li>
                </ol>
                <SquashCaptainContactCard center />
            </section>
        </>
    );
}
