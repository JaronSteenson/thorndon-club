import Link from 'next/link';

export default function ProspectiveMembersWelcome() {
    return (
        <>
            <h3>Prospective members welcome!</h3>
            <p>
                Club days are open to both members and those considering becoming one. There is no fee for
                using the courts, balls, or rackets. We do ask that after their second visit and they wish to
                continue coming along that they <Link href="/memberships">join the club as a member</Link>.
            </p>
        </>
    );
}
