import downloads from '../../assets/images/icon-downloads.png';
import ratting from '../../assets/images/icon-ratings.png';
import apps from "../../assets/images//demo-app (1).webp"
const Card = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <img src={apps} className="h-80 w-80 object-fill rounded-lg" alt="" />
            <h3 className="text-lg font-semibold mt-4">App Name</h3>
            <div className='flex items-center justify-between mt-4'>
                <div className='text-[#00D390] flex items-center gap-2 px-3 py-2 rounded bg-[#F1F5E8]'>
                    <img src={downloads} className='h-4 w-4' alt="" />
                    <p>9M</p>
                </div>
                <div className='text-[#FF8811] flex items-center gap-2 px-3 py-2 rounded bg-[#FFF0E1]'>
                    <img src={ratting} className='h-4 w-4' alt="" />
                    <p>5</p>
                </div>  
            </div>           
        </div>
    );
};

export default Card;