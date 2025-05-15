import { helloClubRegisterUrl } from '@/app/globals';
import OperationsManagerContactCard from '@/app/_components/ContactCards/OperationsManagerContactCard';
import PricingGuide from '@/app/memberships/PricingGuide';

export default function Memberships() {
    return (
        <>
            <h1>Memberships</h1>
            <section>
                <PricingGuide />
                <p className="p-6 font-semibold">
                    Member you also gain access to our sauna, table tennis table, weights and cardio
                    equipment.
                </p>
            </section>
            <section>
                <h2>Join now</h2>
                <p>Membership registrations are processed through our booking system, Hello Club.</p>
                <div className="flex justify-center">
                    <a
                        className="button-primary mb-6 mx-3 w-full sm:w-auto sm:min-w-80"
                        target="_blank"
                        href={helloClubRegisterUrl}
                        rel="noopener"
                    >
                        Register via Hello Club
                    </a>
                </div>
                <p>If you have any questions please get in touch with our operations manager:</p>
                <OperationsManagerContactCard center />
            </section>
        </>
    );
}
