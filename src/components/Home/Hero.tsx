import playStore from "../../assets/images/google-play.png";
import appStore from "../../assets/images/app-store.png";
import heroImage from "../../assets/images/hero.png";

const Hero = () => {
    return (
        <div className="bg-gray-100 text-center pt-20">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">We Build <br /> <span className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent">Productive</span> Apps</h2>
            <p className="max-w-5xl lg:text-xl mx-auto mt-4 text-gray-600">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
                <a href="https://play.google.com/store" target="_black">
                    <button className="border border-[#D2D2D2] cursor-pointer hover:scale-105 transition-all duration-500 flex items-center gap-3 rounded font-semibold px-6 py-3"><img src={playStore} alt="Google Play Store" />Google Play</button>
                </a>
                <a href="https://www.apple.com/app-store/" target="_blank">
                    <button className="border border-[#D2D2D2] cursor-pointer hover:scale-105 transition-all duration-500 flex items-center gap-3 rounded font-semibold px-6 py-3"><img src={appStore} alt="App Store" />App Store</button>
                </a>
            </div>
            <div className="flex items-center justify-center mt-10">
                <img src={heroImage} alt="" />
            </div>
        </div>
    );
};

export default Hero;