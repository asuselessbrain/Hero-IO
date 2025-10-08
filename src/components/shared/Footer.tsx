import { FaLinkedin } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="footer bg-[#001931]">
            <div className="max-w-[1440px] mx-auto py-10 text-white w-full px-2">
                <div className="flex items-center justify-between w-full border-b-2 border-gray-600 pb-6 mb-6">
                    <div className="flex items-center gap-2">
                        <img src={logo} className="h-16 w-16" alt="" />
                        <p className="font-bold text-xl">
                            HeroVault
                        </p>
                    </div>
                    <div>
                        <p className="text-[20px]">Social Links</p>
                        <div className="flex gap-2 items-center mt-4">
                            <FaLinkedin size={24} />
                            <FaSquareXTwitter size={24} />
                            <FaSquareFacebook size={24} />
                        </div>
                    </div>
                </div>
                <p  className="flex items-center justify-center w-full">Copyright &copy; {new Date().getFullYear()} - All right reserved by HERO.IO</p>
            </div>
        </footer>
    );
};

export default Footer;