import { helloClubRegisterUrl } from '@/app/globals';

const membershipTypes = [
    {
        type: 'Unlimited',
        annual: '395',
        monthly: '40',
        notes: <>2 unlimited and 2 Junior memberships.</>,
    },
    {
        type: 'Midweek',
        annual: '240',
        monthly: undefined,
        notes: <>9am to 5pm weekdays.</>,
    },
    {
        type: 'Tertiary',
        annual: '240',
        monthly: '24',
        notes: <>Full-time student, 25 years or younger.</>,
    },
    {
        type: 'Casual monthly',
        annual: undefined,
        monthly: '50',
        notes: <>No minimum time commitment.</>,
    },
    {
        type: 'Casual hourly',
        annual: undefined,
        monthly: undefined,
        notes: (
            <>
                Casual hourly hire of courts is $20 per hour (for non members). This is done by{' '}
                <a href={helloClubRegisterUrl} target="_blank" rel="noopener">
                    registering via Hello Club
                </a>{' '}
                and selecting {'"'}Visitor{'"'} as the booking type. Some rackets are available to be borrowed
                for no extra charge.
            </>
        ),
    },
    {
        type: 'Family',
        annual: '840',
        monthly: '77',
        notes: (
            <>
                Full membership access with tennis and/or squash affiliation (able to play in interclub and
                tournaments).
            </>
        ),
    },
    {
        type: 'Junior',
        annual: '110',
        monthly: '40',
        notes: <>18 years or younger.</>,
    },
    {
        type: 'Country',
        annual: '130',
        monthly: undefined,
        notes: (
            <>
                Unlimited Membership if you are a fully affiliated player at another squash or tennis club.
                Country members must provide proof of club affiliation at another club and will be able to
                make use of courts excluding during peak times midweek (4:30pm to 7:30pm).
            </>
        ),
    },
    {
        type: 'Corporate/Business',
        annual: '1400',
        monthly: undefined,
        notes: <>2 access cards provided more available.</>,
    },
];

export default function PricingGuide() {
    return (
        <div className="flex justify-center">
            <table className="hidden lg:table text-lg wide-table">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Annual</th>
                        <th>Monthly</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {membershipTypes.map(({ type, annual, monthly, notes }) => (
                        <tr key={type}>
                            <td>{type}</td>
                            <td>{monthly ? '$' + monthly : 'n/a'}</td>
                            <td>{annual ? '$' + annual : 'n/a'}</td>
                            <td>{notes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center gap-6 flex-wrap lg:hidden">
                {membershipTypes.map(({ type, annual, monthly, notes }) => (
                    <div key={type} className="membership-card">
                        <h2>{type}</h2>
                        <div>
                            {monthly && <strong>${monthly} monthly</strong>}
                            {monthly && annual && ', '}
                            {annual && <strong>${annual} annual</strong>}
                        </div>
                        {notes && <div>{notes}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
}
