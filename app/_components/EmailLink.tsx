import { clubEmail } from '@/app/globals';

interface Props {
    subject: string;
    body?: string;
    children: string;
}

export default function EmailLink({ subject, body, children }: Props) {
    const andBody = body ? `&body=${encodeURIComponent(body)}` : '';
    const href = `mailto:${clubEmail}?subject=${encodeURIComponent(subject)}${andBody}`;

    return (
        <a className="button-secondary flex-grow" href={href}>
            {children}
        </a>
    );
}
