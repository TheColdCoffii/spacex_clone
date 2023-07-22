import { Outlet } from "react-router-dom";

function App() {
    return (
        <main className="overflow-x-hidden font-primary">
            <Outlet />
        </main>
    );
}

export default App;
