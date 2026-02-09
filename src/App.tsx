import { BrowserRouter, Route } from 'react-router';

import ApiProvider from './context/ApiProvider';
import GlobalProvider from './context/GlobalProvider';
import Login from './Components/Screens/Login';
import Home from './Components/Screens/Home';
import { Routes } from 'react-router';
import ProtectedRoute from './ProtectedRoute';

function App() {
    return (
        <ApiProvider>
            <GlobalProvider>
                <BrowserRouter>
                    <Routes>
                        <Route element={<Login />} path="/login" />

                        <Route
                            element={
                                <ProtectedRoute>
                                    <Home />
                                </ProtectedRoute>
                            }
                            path="/"
                        />
                    </Routes>
                </BrowserRouter>
            </GlobalProvider>
        </ApiProvider>
    );
}

export default App;
