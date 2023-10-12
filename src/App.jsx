import Home from "./components/Home";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";
import { Routes, Route } from "react-router-dom";
import Service from "./components/Services";
import CustomerDetails from "./components/CustomerDetails";
import Login from "./components/Login";
import useScrollTop from "./utils/useScrollTop";
const App = () => {
  useScrollTop();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/customerdetails" element={<CustomerDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
