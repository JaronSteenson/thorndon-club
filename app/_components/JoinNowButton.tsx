import { joinNowUrl } from '@/app/globals';

export default function JoinNowButton() {
    return (
        <a className="button-primary w-48" href={joinNowUrl} rel="noopener">
            Join now
        </a>
    );
}
