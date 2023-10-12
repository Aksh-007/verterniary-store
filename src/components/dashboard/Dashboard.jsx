import "../../styles/Dashboard.css";
import DashboardHeader from "./DashboardHeader.jsx";
import Sidebar from "./Sidebar.jsx";
import DashboardHome from "./DashboardHome.jsx";
import { useState } from "react";

const Dashboard = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <section className="dashboard-container">
      <div className="grid-container">
        <DashboardHeader OpenSidebar={OpenSidebar} />
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        <DashboardHome />
      </div>
    </section>
  );
};

export default Dashboard;
