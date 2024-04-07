import { helloClubUrl } from '@/app/globals';

export default function BookingCourtsParagraph() {
    return (
        <p>
            Courts can be accessed by members 24/7, and may be booked using our booking system,{' '}
            <a href={helloClubUrl} target="_blank" rel="noopener">
                Hello Club
            </a>
            .
        </p>
    );
}
