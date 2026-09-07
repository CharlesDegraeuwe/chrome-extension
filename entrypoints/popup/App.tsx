import {Routes, Route, useNavigate} from "react-router-dom";
import Login from "./pages/auth/Login.tsx";
import Home from "./pages/app/Home.tsx";

function App() {
    const navigate = useNavigate();
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    );
}

export default App;
