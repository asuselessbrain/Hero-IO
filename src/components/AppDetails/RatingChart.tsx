import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import type { Rating } from '../../pages/Home';


const RatingChart = ({ratings}: {ratings: Rating[] }) => {
    return (
        <div className={`px-2 border-b border-gray-300 pb-10`}>
            <h3 className='my-6 text-2xl font-semibold'>Ratings</h3>
            <ResponsiveContainer width="100%" height={600}>
            <BarChart
                data={ratings}
                layout="vertical"
            >
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Bar dataKey="count" fill="#FF8811" />
            </BarChart>
        </ResponsiveContainer>
        </div>
    );
};

export default RatingChart;
