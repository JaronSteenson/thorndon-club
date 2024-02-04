import helloClubLogo from '@/public/hello-club-logo.svg';
import Image from 'next/image';
import { helloClubUrl } from '@/app/globals';

/**
 * This just exist for Google to scrape,
 * and people to access directly off google,
 * when trying to find the booking app site.
 *
 * From inside the web page we direct link to hello club.
 */
export default function BookACourt() {
    return (
        <a
            className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-primary-600 md:border-s md:border-gray-300 md:my-6 md:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-primary-500"
            href={helloClubUrl}
        >
            <Image src={helloClubLogo} width="24" height="24" alt="Hello Club login" />
            Take me to Hello Club to book a court
        </a>
    );
}
