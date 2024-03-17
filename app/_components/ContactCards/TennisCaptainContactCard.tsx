import { tennisCaptain, tennisCaptainPhone, tennisCaptainEmail } from '@/app/globals';
import ContactCard from '@/app/_components/ContactCards/ContactCard';

export default function TennisCaptainContactCard() {
    return (
        <ContactCard
            name={tennisCaptain}
            role="Tennis Club Captain"
            phone={tennisCaptainPhone}
            email={tennisCaptainEmail}
        />
    );
}
