const Statistics = () => {
    return (
        <div className="text-center bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] text-white">
            <div className="max-w-[1440px] mx-auto py-20">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">Trusted by Millions, Built for You</h2>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-10 md:gap-20 lg:gap-40">
                    <div>
                        <p className="opacity-80">Total Downloads</p>
                        <h1 className="text-7xl font-extrabold my-4">29.6 M</h1>
                        <p className="opacity-80">21% more than last month</p>
                    </div>
                    <div>
                        <p className="opacity-80">Total Reviews</p>
                        <h1 className="text-7xl font-extrabold my-4">906 K</h1>
                        <p className="opacity-80">46% more than last month</p>
                    </div>
                    <div>
                        <p className="opacity-80">Active Apps</p>
                        <h1 className="text-7xl font-extrabold my-4">132 +</h1>
                        <p className="opacity-80">31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;