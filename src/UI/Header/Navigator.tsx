import { useLocation, useNavigate } from 'react-router';

const Navigator = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navigationHandler = (location: 'HOME' | 'ORDER') => {
        switch (location) {
            case 'HOME':
                navigate('/');
                break;
            case 'ORDER':
                navigate('/order');
                break;
        }
    };

    return (
        <div className=" mr-auto flex flex-row justify-center items-center gap-6">
            <div className="relative cursor-pointer" onClick={() => navigationHandler('HOME')}>
                <span className="text-md font-semibold">Home</span>
                <span
                    className={`absolute left-0 -bottom-1 h-0.5 w-full bg-amber-300 transition-transform duration-300 origin-left ${location.pathname === '/' ? 'scale-x-100' : 'scale-x-0'}`}
                />
            </div>

            <div className="relative cursor-pointer" onClick={() => navigationHandler('ORDER')}>
                <span className="text-md font-semibold">Order</span>
                <span
                    className={`absolute left-0 -bottom-1 h-0.5 w-full bg-amber-300 transition-transform duration-300 origin-left ${location.pathname === '/order' ? 'scale-x-100' : 'scale-x-0'}`}
                />
            </div>
        </div>
    );
};
export default Navigator;
