import { Link } from 'react-router';
const AppNotFound = ({imag, title, subTitle, btnText, link}: {imag:string, title:string, subTitle:string, btnText:string, link:string}) => {
    return (
        <div className='flex items-center justify-center flex-col min-h-[calc(100vh-302px)]'>
            <img src={imag} alt="App not found image" />
            <h2 className='text-5xl font-semibold mt-10'>{title}</h2>
            <p className='opacity-80 my-4'>{subTitle}</p>
            <Link to={link} className='rounded py-3 px-4 bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] text-white'>{btnText}</Link>
        </div>
    );
};

export default AppNotFound;