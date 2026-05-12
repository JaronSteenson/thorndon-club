interface InterclubProps {
    sport: 'squash' | 'tennis';
}

export default function InterclubInto({ sport }: InterclubProps) {
    return (
        <p>
            If you’re serious about {sport} or even wanting a little more challenge than the social games
            you’ve been playing, then Interclub is the competition for you.
        </p>
    );
}
