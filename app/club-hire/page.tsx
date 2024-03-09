import ClubManagerContactCard from '@/app/_components/ContactCards/ClubManagerContactCard';
import grassCourt1Thumb from '@/public/images/photos/grass-courts-1-500x750.png';
import grassCourt1 from '@/public/images/photos/grass-courts-1.jpg';
import ExpandableImage from '@/app/_components/ExpandableImage';

export default function ClubHire() {
    return (
        <>
            <h1>Club hire</h1>
            <h2>Perfect for private events, work parties, or festive celebrations</h2>
            <section className="flex flex-wrap flex-row justify-center items-center">
                <ExpandableImage thumb={grassCourt1Thumb} full={grassCourt1} alt="'Grass court photo 1'" />
                <ExpandableImage thumb={grassCourt1Thumb} full={grassCourt1} alt="'Grass court photo 1'" />
                <ExpandableImage thumb={grassCourt1Thumb} full={grassCourt1} alt="'Grass court photo 1'" />
            </section>
            <section>
                <h3>Call now to organise a booking</h3>
                <div className="flex justify-between gap-6">
                    <ClubManagerContactCard />
                </div>
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
                <h3>Drinks and bar snacks prices</h3>
                <div className="flex flex-wrap flex-row justify-center items-center">
                    <ExpandableImage
                        thumb={grassCourt1Thumb}
                        full={grassCourt1}
                        alt="'Grass court photo 1'"
                    />
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
                    <li>Charge is $150 for ½ day hire</li>
                    <li>Charge is $250 for 1 full day hire</li>
                    <li>Wifi</li>
                </ul>
            </section>
        </>
    );
}

function SecondaryInfo({ children }: { children: string }) {
    return <span className="text-xs text-gray-500"> {children}</span>;
}
