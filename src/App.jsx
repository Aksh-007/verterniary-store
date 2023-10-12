import Home from "./components/Home";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";
import { Routes, Route } from "react-router-dom";
import Service from "./components/Services";
import CustomerDetails from "./components/CustomerDetails";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import Login from "./components/Login";
import useScrollTop from "./utils/useScrollTop";
import { useSelector } from "react-redux";
const App = () => {
  useScrollTop();
  const { isAuthenticated } = useSelector((state) => state.root);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/customerdetails" element={<CustomerDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
        {/* PRotected route  */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
