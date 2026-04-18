import globals from '@/app/globals.json';
import ContactCard from '@/app/_components/ContactCards/ContactCard';

const { clubManager, clubEmail, clubManagerPhone } = globals;

export default function OperationsManagerContactCard({ center = false }) {
    return (
        <ContactCard
            id="operations"
            name={clubManager}
            role="Operations"
            phone={clubManagerPhone}
            email={clubEmail}
            center={center}
        />
    );
}
