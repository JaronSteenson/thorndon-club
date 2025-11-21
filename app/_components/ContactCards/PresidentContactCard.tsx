import globals from '@/app/globals.json';
import ContactCard from '@/app/_components/ContactCards/ContactCard';

const { president, presidentPhone, presidentEmail } = globals;

export default function PresidentContactCard({ center = false }) {
    return (
        <ContactCard
            id="club-president"
            name={president}
            role="Club President"
            phone={presidentPhone}
            email={presidentEmail}
            center={center}
        />
    );
}
