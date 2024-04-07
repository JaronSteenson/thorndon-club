import { tennisCaptain, tennisCaptainPhone, tennisCaptainEmail } from '@/app/globals';
import ContactCard from '@/app/_components/ContactCards/ContactCard';

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
