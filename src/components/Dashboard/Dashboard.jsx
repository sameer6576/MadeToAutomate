// Dashboard.jsx
import React from "react";
import { Form, Route, Routes } from "react-router-dom";
import Stats from "../Stats/Stats";
import Orders from "../Orders/Orders";
import Leads from "../Leads/Leads";
import AllOrders from "../AllOrders/AllOrders";
// import Forms from "../Form/Forms";

const Dashboard = ({orders,leads}) => {
  return (
    <div className="p-8">
      <Stats orders={orders } leads={leads}/>
      <Orders orders={orders} />
      <Leads leads={leads}/>
      {/* <Forms/> */}
      {/* Other Dashboard content goes here */}

      {/* Routes for Stats, Orders, and Leads */}
      <Routes>
        <Route path="/stats" element={<Stats />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/leads" element={<Leads />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
