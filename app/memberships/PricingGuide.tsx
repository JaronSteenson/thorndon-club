import { helloClubRegisterUrl } from '@/app/globals';

const membershipTypes = [
    {
        type: 'Unlimited',
        annual: '435',
        monthly: '45',
        notes: <>Full membership access with tennis and/or squash affiliation.</>,
    },
    {
        type: 'Midweek',
        annual: '265',
        monthly: undefined,
        notes: <>9am to 5pm weekdays.</>,
    },
    {
        type: 'Tertiary',
        annual: '265',
        monthly: '27',
        notes: <>Full-time student, 25 years or younger.</>,
    },
    {
        type: 'Casual monthly',
        annual: undefined,
        monthly: '55',
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
        annual: '925',
        monthly: '85',
        notes: <>2 Unlimited and up to 3 Junior Memberships.</>,
    },
    {
        type: 'Junior',
        annual: '110',
        monthly: undefined,
        notes: <>18 years or younger.</>,
    },
    {
        type: 'Parent/Child',
        annual: '480',
        monthly: '50',
        notes: <>1 Unlimited and 1 Junior Membership.</>,
    },
    {
        type: 'Country',
        annual: '130',
        monthly: undefined,
        notes: (
            <>
                You need to provide proof of full affiliation at another squash or tennis club. Unable to book
                courts during peak times 4:30pm to 7:30pm.
            </>
        ),
    },
    {
        type: 'Corporate/Business',
        annual: '1400',
        monthly: undefined,
        notes: <>2 access cards provided to be shared.</>,
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
                            <td>{annual ? '$' + annual : ''}</td>
                            <td>{monthly ? '$' + monthly : ''}</td>
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
                            {annual && <strong>${annual} annual</strong>}
                            {monthly && annual && ', '}
                            {monthly && <strong>${monthly} monthly</strong>}
                        </div>
                        {notes && <div>{notes}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
}
