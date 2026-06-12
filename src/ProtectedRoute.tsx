import type { Page } from './types';

import { useContext } from 'react';
import { Navigate } from 'react-router';

import Global from './context/global-context';
import Header from './Components/Header';
import Role from './context/role-provider';

type ProtectedRouteType = {
    children: React.ReactElement;
    required: Page;
};

const ProtectedRoute = ({ children, required }: ProtectedRouteType) => {
    const { isUserLoggedIn } = useContext(Global);
    const { order, process } = useContext(Role);

    if (!isUserLoggedIn) return <Navigate to="/login" replace />;

    if (required.includes('ORDER') && !order) return <Navigate to="/unauthorized" replace />;
    if (required.includes('PROCESS') && !process) return <Navigate to="/unauthorized" replace />;

    return (
        <div className="w-screen h-screen flex flex-col">
            <Header />
            {children}
        </div>
    );
};

export default ProtectedRoute;
