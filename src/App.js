import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AirQuality from "./pages/AirQuality";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Signup from "./pages/Signup";
import Stats from "./pages/Stats";
import Forum from "./pages/Forum";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import Setting from "./pages/Setting";
import SentEmail from "./pages/SentEmail";
import DeleteAccount from "./pages/DeleteAccount";
import CarbonCalculatorFootprint from "./pages/CarbonFootprintCalculator";
import Flower from "./pages/Flower";
import GreenCard from "./pages/GreenCard";

import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/air-quality" element={<AirQuality />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/email_sent" element={<SentEmail />} />
          <Route path="/redirect" element={<Navigate to="/login" />} />
          <Route path="/delete_account" element={<DeleteAccount />} />
          <Route path="/landing_page" element={<LandingPage />} />
          <Route path="/carbon_calculator" element={<CarbonCalculatorFootprint/>} />
          <Route path="/flower" element={<Flower />} />
          <Route path="/green-card" element={<GreenCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
