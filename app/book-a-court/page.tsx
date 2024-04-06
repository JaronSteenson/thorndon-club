import helloClubLogo from '@/public/images/logos/hello-club-logo.svg';
import Image from 'next/image';
import { helloClubUrl } from '@/app/globals';
import externalLinkIcon from '@/public/images/icons/external-link.svg';

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
            className="flex flex-wrap justify-center items-center flex-col gap-4 text-lg mt-12"
            href={helloClubUrl}
        >
            <Image src={helloClubLogo} height="150" alt="Hello Club login" />
            <div>
                <Image
                    className="inline pr-1 pb-0.5"
                    src={externalLinkIcon}
                    height="24"
                    alt="External link"
                />
                Book a court on Hello Club
            </div>
        </a>
    );
}
