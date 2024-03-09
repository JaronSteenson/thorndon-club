import { clubManager, clubEmail, clubManagerPhone } from '@/app/globals';
import clubManagerAvatar from '@/public/images/avatars/club-manager-avatar-60x60.avif';
import ContactCard from '@/app/_components/ContactCards/ContactCard';

export default function ClubManagerContactCard() {
    return (
        <ContactCard
            name={clubManager}
            role="Club Manager"
            phone={clubManagerPhone}
            email={clubEmail}
            avatar={clubManagerAvatar}
        />
    );
}
