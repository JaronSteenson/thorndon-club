import EmailLink from '@/app/_components/EmailLink';

const body = `Incident date:
Incident time:
Injured person name:
Injured person:
Injured person gender:
Injured person date of birth:

Phone numbers:

Incident description:
`;

export default function AccidentReportEmailLink() {
    return (
        <EmailLink subject="Accident/Incident report" body={body}>
            Report accident
        </EmailLink>
    );
}
