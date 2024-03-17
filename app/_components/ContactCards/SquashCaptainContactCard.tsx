import { squashCaptain, squashCaptainPhone, squashCaptainEmail } from '@/app/globals';
import ContactCard from '@/app/_components/ContactCards/ContactCard';

export default function SquashCaptainContactCard() {
    return (
        <ContactCard
            name={squashCaptain}
            role="Squash Club Captain"
            phone={squashCaptainPhone}
            email={squashCaptainEmail}
        />
    );
}
