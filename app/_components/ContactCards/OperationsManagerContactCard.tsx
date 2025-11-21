import globals from '@/app/globals.json';
import avatar from '@/public/images/avatars/operations-avatar-60x60.avif';
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
            avatar={avatar}
            center={center}
        />
    );
}
