import "./App.css";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import SearchForm from "./components/SearchForm";

// React Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Obs. O que fica fora do BrowserRouter sempre irá permanecer
// Obs. Data out the BrowserRouter will always remain

function App() {
  return (
    <div className="App">
      <h1>React Router Dom</h1>
      <BrowserRouter>
        {/* 2 - Links com React Router / Links with React Router */}
        <Navbar />
        {/* 8 - Formulário de Busca / Search Form */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 4 - Rota Dinâmica / Dynamic Route */}
          <Route path="/product/:id" element={<Product />} />
          {/* 6 - Nested Route */}
          <Route path="/product/:id/info" element={<Info />} />
          {/* 8 - Search */}
          <Route path="/search" element={<Search />} />
          {/* 9 - Redirect */}
          <Route path="/company" element={<Navigate to="/about"/>}/>
          {/* 7 - No Matched Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
