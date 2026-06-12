import { BrowserRouter, Route, Routes } from 'react-router';

import ProtectedRoute from './ProtectedRoute';
import GlobalProvider from './context/GlobalProvider';
import Unauthorized from './Components/Screens/Unauthorized';
import RoleProvider from './context/RoleProvider';
import ApiProvider from './context/ApiProvider';
import Process from './Components/Screens/Process';
import Login from './Components/Screens/Login';
import Order from './Components/Screens/Order';

function App() {
    return (
        <ApiProvider>
            <GlobalProvider>
                <RoleProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<Login />} path="/login" />

                            <Route
                                element={
                                    <ProtectedRoute required={'PROCESS'}>
                                        <Process />
                                    </ProtectedRoute>
                                }
                                path="/process"
                            />

                            <Route
                                element={
                                    <ProtectedRoute required={'ORDER'}>
                                        <Order />
                                    </ProtectedRoute>
                                }
                                path="/order"
                            />

                            <Route element={<Unauthorized />} path="/unauthorized" />
                        </Routes>
                    </BrowserRouter>
                </RoleProvider>
            </GlobalProvider>
        </ApiProvider>
    );
}

export default App;
