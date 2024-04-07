import ClubManagerContactCard from '@/app/_components/ContactCards/ClubManagerContactCard';
import ClubHirePageSlideShow from '@/app/club-hire/ClubHirePageSlideShow';

export default function ClubHire() {
    return (
        <>
            <section>
                <h1>Club hire</h1>
                <h2 className="text-link text-center my-3">
                    Perfect for private events,
                    <br />
                    work parties, or festive celebrations 🎉
                </h2>
                <ClubHirePageSlideShow />
            </section>
            <section>
                <h2>Bar use</h2>
                <ul>
                    <li>
                        No venue hire with a minimum spend over $500
                        <SecondaryInfo>
                            This can be negotiated for a lower rate including a venue hire charge e.g. $200
                            hire fee & $300 minimum bar spend.
                        </SecondaryInfo>
                    </li>
                    <li>
                        $200 for single bar server (approx 80 people) or $400 for two bar servers (approx 80+
                        people)
                    </li>
                    <li>$100 cleaning charge (optional) or self-cleaning</li>
                    <li>Drink requests available, strictly no BYO</li>
                    <li>A refundable bond can be requested at the club{"'"}s discretion</li>
                    <li>Drinks & snacks menu available on request</li>
                    <li>
                        $83 Wellington City Council Special license fee for all non-member functions to ensure
                        compliance with Liquor License
                    </li>
                </ul>
                <div className="flex justify-center text-xl">
                    <a href="/bar-prices-functions.pdf">Drinks and bar snack prices</a>
                </div>
            </section>
            <section>
                <h2>Cooking facilities</h2>
                <ul>
                    <li>Fully functional kitchen available</li>
                    <li>BBQ with gas supplied</li>
                    <li>All utensils available</li>
                    <li>We recommend you bring paper plates to reduce clean-up duties</li>
                    <li>
                        We encourage self-catering or pre-ordered
                        <SecondaryInfo>We dispose of all the rubbish afterwards.</SecondaryInfo>
                    </li>
                </ul>
            </section>
            <section>
                <h2>Meeting room hire</h2>
                <ul>
                    <li>We have two split rooms available for use</li>
                    <li>Charge is $150 for half day hire</li>
                    <li>Charge is $250 for full day hire</li>
                    <li>Wifi</li>
                </ul>
            </section>
            <section>
                <h2 className="mb-3">Get in touch with our club manager to make a booking</h2>
                <ClubManagerContactCard center />
            </section>
        </>
    );
}

function SecondaryInfo({ children }: { children: string }) {
    return <div className="text-sm text-gray-500"> {children}</div>;
}
