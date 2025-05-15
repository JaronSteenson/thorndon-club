import { clubManager, clubEmail, clubManagerPhone } from '@/app/globals';
import avatar from '@/public/images/avatars/operations-manager-avatar-60x60.avif';
import ContactCard from '@/app/_components/ContactCards/ContactCard';

export default function OperationsManagerContactCard({ center = false }) {
    return (
        <ContactCard
            id="operations-manager"
            name={clubManager}
            role="Operations"
            phone={clubManagerPhone}
            email={clubEmail}
            avatar={avatar}
            center={center}
        />
    );
}
