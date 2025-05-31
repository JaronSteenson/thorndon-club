import Link from 'next/link';

export default function JoinNowButton() {
    return (
        <Link className="button-primary w-48" href="/memberships">
            Sign up
        </Link>
    );
}
