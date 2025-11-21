import globals from '@/app/globals.json';
import OperationsManagerContactCard from '@/app/_components/ContactCards/OperationsManagerContactCard';

const { clubManager } = globals;

export default function Beginners() {
    return (
        <>
            <h3>What if I’m just a beginner</h3>
            <p>
                If you are a complete beginner club day can be challenging because you will be matched up with
                players with a wide range of skills. However, this can be useful to see how your skills match
                up. We want to encourage and welcome new members and will try and assist. There is coaching at
                the club, and people often find that with some lessons and practice they are quickly able to
                join in fully. If you have any questions, please get in with{' '}
                <a href="#operations">{clubManager}</a>.
            </p>
            <OperationsManagerContactCard center />
        </>
    );
}
