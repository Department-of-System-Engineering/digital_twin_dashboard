import Graph from "./Components/Graph";
import Header from "./Components/Header";
import ApiProvider from "./context/ApiProvider";

function App() {
    return (
        <ApiProvider>
            <div className="w-screen h-screen flex flex-col">
                <Header />
                <Graph />
            </div>
        </ApiProvider>
    );
}

export default App;
