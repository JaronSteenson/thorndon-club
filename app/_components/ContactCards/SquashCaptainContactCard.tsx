import globals from '@/app/globals.json';
import ContactCard from '@/app/_components/ContactCards/ContactCard';

const { squashCaptain, squashCaptainPhone, squashCaptainEmail } = globals;

export default function SquashCaptainContactCard({ center = false }) {
    return (
        <ContactCard
            id="squash-club-captain"
            name={squashCaptain}
            role="Squash Club Captain"
            phone={squashCaptainPhone}
            email={squashCaptainEmail}
            center={center}
        />
    );
}
