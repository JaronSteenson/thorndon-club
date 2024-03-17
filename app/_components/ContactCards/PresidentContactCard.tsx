import { president, presidentPhone, presidentEmail } from '@/app/globals';
import ContactCard from '@/app/_components/ContactCards/ContactCard';

export default function PresidentContactCard() {
    return (
        <ContactCard name={president} role="Club President" phone={presidentPhone} email={presidentEmail} />
    );
}
