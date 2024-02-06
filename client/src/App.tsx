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
import { FaMoneyBillWave , FaHome, FaArchive, FaPeopleArrows, FaUserAlt, FaUserFriends, FaSearch, FaArrowsAltH        } from "react-icons/fa";

const options: Option[] = [
  { title: "Inicio", link: "/", icon: <FaHome /> },
  { title: "Búsqueda", link: "/busqueda", icon: <FaSearch  /> },
  {
    title: "Asociados",
    link: "/asociados",
    icon: <FaPeopleArrows />,
    subOptions: [
      { title: "Socios", link: "/socios", icon: <FaUserAlt /> },
      { title: "Cuentas conjuntas", link: "/cuentas-conjuntas", icon: <FaUserFriends /> },
    ],
  },
  {
    title: "Nichos/Inhumados",
    link: "/nichos-inhumados",
    icon: <FaArchive />,
    subOptions: [
      { title: "Nichos", link: "/nichos", icon: <FaArchive /> },
      { title: "Nichos asociados", link: "/nichos-cuentas", icon: <FaArchive /> },
      { title: "Inhumado", link: "/inhumado", icon: <FaArchive /> },
    ],
  },
  { title: "Cobranzas", link: "/cobranzas", icon: <FaMoneyBillWave /> },
  { title: "Ingresos", link: "/ingresos", icon: <FaMoneyBillWave /> },
  { title: "Egresos", link: "/egresos", icon: <FaMoneyBillWave /> },
  { title: "Transferir nichos", link: "/nichos/transferir", icon: <FaArrowsAltH   /> },
  { title: "Generar cuotas", link: "/cobranzas/generar-cuotas" },
  { title: "Edicion bimestres", link: "/bimpagos" },
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
