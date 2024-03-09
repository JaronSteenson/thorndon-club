import { joinNowUrl } from '@/app/globals';
import clubManagerAvatar from '@/public/images/avatars/club-manager-avatar-60x60.avif';
import Image from 'next/image';

interface Props {
    name: string;
    role: string;
    phone: string;
    email: string;
    avatar: any;
}

export default function ContactCard({ name, role, phone, email, avatar }: Props) {
    return (
        <>
            <div className="card p-3 w-80">
                <h3>
                    {name} - {role}
                </h3>
                <div className="flex flex-wrap items-center justify-between gap-3 pt-6">
                    <Image
                        className="rounded-xl bg-gray-100"
                        src={avatar}
                        alt={`${role} avatar`}
                        width={60}
                        height={60}
                    />
                    <div>
                        <a href={`tel:${phone}`}>{formatPhone(phone)}</a>
                        <br />
                        <a href={`mailto:${email}`}>{email}</a>
                    </div>
                </div>
            </div>
        </>
    );
}

function formatPhone(unformatted: string) {
    let formatted = '';

    for (let i = 0; i < unformatted.length; i++) {
        formatted += unformatted.charAt(i);
        switch (i) {
            case 2:
            case 5:
            case 9:
                formatted += ' ';
        }
    }

    return formatted;
}
