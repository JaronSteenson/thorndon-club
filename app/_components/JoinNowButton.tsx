import { joinNowUrl } from '@/app/globals';

export default function JoinNowButton() {
    return (
        <a className="button-primary w-72" href={joinNowUrl} rel="noopener">
            Join now
        </a>
    );
}
