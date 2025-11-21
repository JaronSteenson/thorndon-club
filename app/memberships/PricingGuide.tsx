import globals from '@/app/globals.json';

const { memberships } = globals;

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
                    {memberships.map(({ type, annual, monthly, notes }) => (
                        <tr key={type}>
                            <td>{type}</td>
                            <td>{annual ? '$' + annual : ''}</td>
                            <td>{monthly ? '$' + monthly : ''}</td>
                            <td dangerouslySetInnerHTML={{ __html: notes }} />
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center gap-6 flex-wrap lg:hidden">
                {memberships.map(({ type, annual, monthly, notes }) => (
                    <div key={type} className="membership-card">
                        <h2>{type}</h2>
                        <div>
                            {annual && <strong>${annual} annual</strong>}
                            {monthly && annual && ', '}
                            {monthly && <strong>${monthly} monthly</strong>}
                        </div>
                        {notes && <div dangerouslySetInnerHTML={{ __html: notes }} />}
                    </div>
                ))}
            </div>
        </div>
    );
}
