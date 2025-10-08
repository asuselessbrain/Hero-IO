import downloadIcon from '../../assets/images//icon-downloads.png';
import ratingIcon from '../../assets/images//icon-ratings.png';
import revicewIcon from '../../assets/images/icon-review.png';

const AppStatas = ({ downloads, ratingAvg, reviews }: { downloads: string, ratingAvg: number, reviews: string }) => {
    return (
        <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
            <div className="space-y-2">
                <img src={downloadIcon} alt="Download Icon" className="h-10 w-10" />
                <p className="opacity-80">Downloads</p>
                <h2 className="text-5xl font-bold">{downloads}</h2>
            </div>
            <div className="space-y-2">
                <img src={ratingIcon} alt="Rating Icon" className="h-10 w-10" />
                <p className="opacity-80">Average Ratings</p>
                <h2 className="text-5xl font-bold">{ratingAvg}</h2>
            </div>
            <div className="space-y-2">
                <img src={revicewIcon} alt="Review Icon" className="h-10 w-10" />
                <p className="opacity-80">Total Reviews</p>
                <h2 className="text-5xl font-bold">{reviews}</h2>
            </div>
        </div>
    );
};

export default AppStatas;