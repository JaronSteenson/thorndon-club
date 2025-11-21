import globals from '@/app/globals.json';
import ContactCard from '@/app/_components/ContactCards/ContactCard';

const { tennisCaptain, tennisCaptainPhone, tennisCaptainEmail } = globals;

export default function TennisCaptainContactCard({ center = false }) {
    return (
        <ContactCard
            id="tennis-club-captain"
            name={tennisCaptain}
            role="Tennis Club Captain"
            phone={tennisCaptainPhone}
            email={tennisCaptainEmail}
            center={center}
        />
    );
}
