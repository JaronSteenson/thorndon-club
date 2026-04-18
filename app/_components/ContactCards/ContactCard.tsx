interface Props {
    id: string;
    name: string;
    role: string;
    phone?: string | null;
    email: string;
    center: boolean;
}

export default function ContactCard({ id, name, role, phone, email, center = false }: Props) {
    return (
        <div id={id} className={center ? 'flex flex-row justify-center' : ''}>
            <div className="contact-card">
                <TitleSection name={name} role={role} />
                <div className="text-center text-sm mt-2">
                    {phone && <a href={`tel:${phone}`}>{formatPhone(phone)}</a>}
                    <br />
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
        <div className="text-center">
            <h3 className="font-bold">{name}</h3>
            <h4 className="font-semibold">{role}</h4>
        </div>
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
