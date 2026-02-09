import { useContext } from 'react';
import Global from './context/global-context';
import { Navigate } from 'react-router';

type ProtectedRouteType = {
    children: React.ReactElement;
};

const ProtectedRoute = ({ children }: ProtectedRouteType) => {
    const { isUserLoggedIn } = useContext(Global);
    if (!isUserLoggedIn) return <Navigate to="/login" replace />;
    return children;
};

export default ProtectedRoute;
