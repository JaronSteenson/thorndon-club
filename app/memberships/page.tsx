import { helloClubRegisterUrl } from '@/app/globals';
import ClubManagerContactCard from '@/app/_components/ContactCards/ClubManagerContactCard';

export default function Memberships() {
    return (
        <>
            <section>
                <h2>Pricing guide</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Annual</th>
                            <th>Monthly</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Unlimited</td>
                            <td>$395</td>
                            <td>$40</td>
                            <td>
                                Full membership access with tennis and/or squash affiliation (able to play in
                                interclub and tournaments).
                            </td>
                        </tr>
                        <tr>
                            <td>Midweek</td>
                            <td>$240</td>
                            <td>N/A</td>
                            <td>9am to 5pm weekdays.</td>
                        </tr>
                        <tr>
                            <td>Tertiary</td>
                            <td>$240</td>
                            <td>$24</td>
                            <td>Full-time student, 25 years or younger.</td>
                        </tr>
                        <tr>
                            <td>Casual monthly</td>
                            <td>N/A</td>
                            <td>$50</td>
                            <td>No minimum time commitment.</td>
                        </tr>
                        <tr>
                            <td>Casual hourly</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>
                                Casual hourly hire of courts is $20 per hour (for non members). This is done
                                by registering to{' '}
                                <a href={helloClubRegisterUrl} rel="noopener">
                                    Hello Club
                                </a>{' '}
                                and selecting <strong>Visitor</strong> as the booking type. Some rackets are
                                available to be borrowed for no extra charge.
                            </td>
                        </tr>
                        <tr>
                            <td>Family</td>
                            <td>$840</td>
                            <td>$77</td>
                            <td>2 unlimited & 2 Junior memberships.</td>
                        </tr>
                        <tr>
                            <td>Junior</td>
                            <td>$110</td>
                            <td>N/A</td>
                            <td>18 years or younger.</td>
                        </tr>
                        <tr>
                            <td>1 Parent, 1 Junior</td>
                            <td>$460</td>
                            <td>$46</td>
                            <td>1 unlimited & 1 junior membership.</td>
                        </tr>
                        <tr>
                            <td>Country</td>
                            <td>$130</td>
                            <td>N/A</td>
                            <td>
                                Unlimited Membership if you are a fully affiliated player at another squash or
                                tennis club. Country members must provide proof of club affiliation at another
                                club and will be able to make use of courts excluding during peak times
                                midweek (4:30pm to 7:30pm).
                            </td>
                        </tr>
                        <tr>
                            <td>Corporate/Business</td>
                            <td>$1400</td>
                            <td>N/A</td>
                            <td>2 access cards provided more available.</td>
                        </tr>
                    </tbody>
                </table>
                <div className="p-6 font-semibold">
                    Member you also gain access to our sauna, table tennis table, weights and cardio
                    equipment.
                </div>
            </section>
            <section>
                <h2>Join now</h2>
                <p>Membership registrations are processed through our booking system, Hello Club.</p>
                <div className="flex justify-center">
                    <a
                        className="button-primary mx-3 w-full sm:w-auto sm:min-w-80"
                        target="_blank"
                        href={helloClubRegisterUrl}
                        rel="noopener"
                    >
                        Register via Hello Club
                    </a>
                </div>
            </section>
            <section>
                <p>If you have any questions please get in touch with our club manager:</p>
                <ClubManagerContactCard center />
            </section>
        </>
    );
}
