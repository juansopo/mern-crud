import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import { TableJson } from "./pages/SociosPage";
import SocioFormPage from "./pages/SocioFormPage";
import { AuthProvider } from "./context/AuthContext";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import { SocioProvider } from "./context/SocioContext";
import Sidebar from './components/Sidebar/Sidebar'
import { Option } from './components/Sidebar/types'
import { FaCog, FaEnvelope, FaHome, FaShoppingCart } from "react-icons/fa";

const options: Option[] = [
  { title: "Inicio", link: "/", icon: <FaHome /> },
  { title: "Productos", link: "/products", icon: <FaShoppingCart /> },
  { title: "Servicios", link: "/services", icon: <FaCog /> },
  { title: "Contacto", link: "/contact", icon: <FaEnvelope /> },
];

function App() {
  return (
    <div className="font-roboto h-full w-full flex ">
      <AuthProvider>
        <SocioProvider>
          <BrowserRouter>
            <Sidebar options={options}/>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/socios" element={<TableJson />} />
                <Route path="/add-socio" element={<SocioFormPage />} />
                <Route path="/socios/:id" element={<SocioFormPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </SocioProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
