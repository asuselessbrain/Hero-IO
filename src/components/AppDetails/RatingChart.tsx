import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import type { Rating } from '../../pages/Home';


const RatingChart = ({ratings}: {ratings: Rating[] }) => {
    return (
        <ResponsiveContainer width="100%" height={600} className={`px-2`}>
            <BarChart
                data={ratings}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Bar dataKey="count" fill="#FF8811" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default RatingChart;
