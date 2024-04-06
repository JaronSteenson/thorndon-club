import { squashCaptain, squashCaptainPhone, squashCaptainEmail } from '@/app/globals';
import avatar from '@/public/images/avatars/squash-club-captain-avatar-60x60.avif';
import ContactCard from '@/app/_components/ContactCards/ContactCard';

export default function SquashCaptainContactCard() {
    return (
        <ContactCard
            name={squashCaptain}
            role="Squash Club Captain"
            phone={squashCaptainPhone}
            email={squashCaptainEmail}
            avatar={avatar}
        />
    );
}
