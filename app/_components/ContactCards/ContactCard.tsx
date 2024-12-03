import Image from 'next/image';

interface Props {
    id: string;
    name: string;
    role: string;
    phone?: string;
    email: string;
    avatar?: any;
    center: boolean;
}

export default function ContactCard({ id, name, role, phone, email, avatar, center = false }: Props) {
    return (
        <div id={id} className={center ? 'flex flex-row justify-center' : ''}>
            <div className="contact-card">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <AvatarImage name={name} role={role} avatar={avatar} />
                    <TitleSection name={name} role={role} />
                </div>
                <div className="text-center text-sm mt-2">
                    {phone && (
                        <>
                            <a href={`tel:${phone}`}>{formatPhone(phone)}</a>
                            <br />
                        </>
                    )}
                    <a href={`mailto:${email}`}>{email}</a>
                </div>
            </div>
        </div>
    );
}

interface TitleSectionProps {
    name: string;
    role: string;
}

function TitleSection({ name, role }: TitleSectionProps) {
    return (
        <div>
            <h3 className="text-left font-bold">{name}</h3>
            <h4 className="font-semibold">{role}</h4>
        </div>
    );
}

interface AvatarImageProps {
    name: string;
    role: string;
    avatar?: any;
}

function AvatarImage({ name, role, avatar }: AvatarImageProps) {
    if (!avatar) {
        const [first, last] = name.split(' ');
        return (
            <div
                className="rounded-xl bg-gray-100 flex justify-center items-center text-2xl"
                style={{ width: 60, height: 60 }}
            >
                {first.charAt(0)} {last.charAt(0)}
            </div>
        );
    }
    return (
        <Image
            className="rounded-xl bg-gray-100"
            src={avatar}
            alt={`${role} avatar`}
            width={60}
            height={60}
        />
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
