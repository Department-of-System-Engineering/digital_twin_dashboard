import { useContext } from 'react';
import Global from './context/global-context';
import { Navigate } from 'react-router';
import Header from './Components/Header';

type ProtectedRouteType = {
    children: React.ReactElement;
};

const ProtectedRoute = ({ children }: ProtectedRouteType) => {
    const { isUserLoggedIn } = useContext(Global);
    if (!isUserLoggedIn) return <Navigate to="/login" replace />;
    return (
        <div className="w-screen h-screen flex flex-col">
            <Header />
            {children}
        </div>
    );
};

export default ProtectedRoute;
