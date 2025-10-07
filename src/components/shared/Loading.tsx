import logo from "../../assets/images/logo.png"

const Loading = () => {
    return (
        <div className="min-h-[calc(100vh-302px)] flex items-center justify-center">
            <h2 className="text-3xl md:text-5xl lg:text-7xl flex items-center justify-center font-bold gap-2">L <img className="h-16 w-16 animate-spin" src={logo} alt="" /> ading</h2>
        </div>
    );
};

export default Loading;