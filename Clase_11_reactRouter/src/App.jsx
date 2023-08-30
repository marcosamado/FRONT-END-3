import { Outlet } from "react-router-dom";
import Nabvar from "./Nabvar";
function App() {
    return (
        <div>
            <Nabvar />
            <Outlet />
            {/* <Footer /> */}
        </div>
    );
}

export default App;
