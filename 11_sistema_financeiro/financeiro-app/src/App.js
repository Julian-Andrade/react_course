import "./App.css";

// Import React Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Firebase
import { onAuthStateChanged } from "firebase/auth"; // Verify if use auth is sucessfull

// Hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

// Context
import { AuthProvider } from "./context/AuthContext";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Financial from "./pages/Registration/Financial";
import Dashboard from "./pages/Dashboard/Dashboard";
import EntryAndLeave from "./pages/Financial/EntryAndLeave";
import EditEntryAndLeave from "./pages/Edit/EditEntryAndLeave/EditEntryAndLeave";
import Category from "./pages/Registration/Category";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Clients from "./pages/Clients/Clients";
import EditClient from "./pages/Edit/EditClient/EditClient";
import Providers from "./pages/Providers/Providers";
import EditProvider from "./pages/Edit/EdiProvider/EditProvider";
import Constructions from "./pages/Constructions/Constructions";
import EditConstruction from "./pages/Edit/EditConstruction/EditConstruction";
import Payment from "./pages/Registration/Payment";
import StatusPayment from "./pages/Registration/StatusPayment";
import Client from "./pages/Registration/Client";
import Provider from "./pages/Registration/Provider";
import RegisterSystem from "./pages/Registration/RegisterSystem";
import TypeProvider from "./pages/Registration/TypeProvider";
import TypeConstruction from "./pages/Registration/TypeConstruction";
import Construction from "./pages/Registration/Construction";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to="/" />}
              />
              <Route
                path="/dashboard"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
              <Route
                path="/entry_and_leave"
                element={user ? <EntryAndLeave /> : <Navigate to="/login" />}
              />
              <Route
                path="/entry_and_leave/edit/:id"
                element={
                  user ? <EditEntryAndLeave /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/clients"
                element={user ? <Clients /> : <Navigate to="/login" />}
              />
              <Route
                path="/clients/edit/:id"
                element={user ? <EditClient /> : <Navigate to="/login" />}
              />
              <Route
                path="/providers"
                element={user ? <Providers /> : <Navigate to="/login" />}
              />
              <Route
                path="/providers/edit/:id"
                element={user ? <EditProvider /> : <Navigate to="/login" />}
              />
              <Route
                path="/constructions"
                element={user ? <Constructions /> : <Navigate to="/login" />}
              />
              <Route
                path="/constructions/edit/:id"
                element={user ? <EditConstruction /> : <Navigate to="/login" />}
              />
              <Route
                path="/registration/financial"
                element={user ? <Financial /> : <Navigate to="/login" />}
              />
              <Route
                path="/registration/category"
                element={user ? <Category /> : <Navigate to="/login" />}
              />
              <Route
                path="/registration/payment"
                element={user ? <Payment /> : <Navigate to="/login" />}
              />
              <Route
                path="/registration/status_payment"
                element={user ? <StatusPayment /> : <Navigate to="/login" />}
              />
              <Route
                path="/registration/clients"
                element={user ? <Client /> : <Navigate to="/login" />}
              />
              <Route
                path="/registration/providers"
                element={user ? <Provider /> : <Navigate to="/login" />}
              />
              <Route
                path="/registration/register_system"
                element={user ? <RegisterSystem /> : <Navigate to="/login" />}
              />
              <Route
                path="/registration/type_provider"
                element={user ? <TypeProvider /> : <Navigate to="/login" />}
              />
              <Route
                path="/registration/type_construction"
                element={user ? <TypeConstruction /> : <Navigate to="/login" />}
              />
              <Route
                path="/registration/construction"
                element={user ? <Construction /> : <Navigate to="/login" />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
