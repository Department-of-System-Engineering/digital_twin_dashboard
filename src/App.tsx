import Graph from './Components/Graph';
import Header from './Components/Header';
import ApiProvider from './context/ApiProvider';
import GlobalProvider from './context/GlobalProvider';

function App() {
    return (
        <ApiProvider>
            <GlobalProvider>
                <div className="w-screen h-screen flex flex-col">
                    <Header />
                    <Graph />
                </div>
            </GlobalProvider>
        </ApiProvider>
    );
}

export default App;
