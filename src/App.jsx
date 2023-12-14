import { useState } from "react";

import "./App.css";
import { AlertDialogDemo } from "./components/AlertDialogDemo";

import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Barcode from "./components/Navbar/Barcode";
import Back from "./components/Navbar/Back";
import Dashboard from "./components/Dashboard/Dashboard";
import Logo from "./components/Navbar/Logo";
import AllOrders from "./components/AllOrders/AllOrders";
import AllLeads from "./components/AllLeads/AllLeads";

function App() {
  const initialStats = [
    {
      Name: ["IR Sensor", "Name"],
      desc: ["Product Description", "Description"],
      quantity: [5, "Quantity"],
    },
    {
      Name: ["MotherBoard", "Name"],
      desc: ["Product Description", "Description"],
      quantity: [7, "Quantity"],
    },
    {
      Name: ["Pendrive", "Name"],
      desc: ["Product Description", "Description"],
      quantity: [9, "Quantity"],
    },
  ];
  const [orders, setOrders] = useState(initialStats);
  const intialLeads = [
    {
      Name: ["Rakesh Verma", "Name"],
      text: ["Motherboard", "text"],
      quantity: [4, "Quantity"],
      contact: "0987654321",
    },
    {
      Name: ["Mukesh Verma", "Name"],
      text: ["Pendrive", "text"],
      quantity: [3, "Quantity"],
      contact: "0987654321",
    },
    {
      Name: ["Rakesh Verma", "Name"],
      text: ["Product Description", "text"],
      quantity: [7, "Quantity"],
      contact: "0987654321",
    },
    {
      Name: ["Rakesh Verma", "Name"],
      text: ["Product Description", "text"],
      quantity: [10, "Quantity"],
      contact: "0987654321",
    },
  ];
  const [leads, setLeads] = useState(intialLeads);
  return (
    <BrowserRouter>
      <div className="bg-slate-100 h-[100%] pt-4">
        <Navbar />
        <Routes>
          <Route
            path="*"
            element={<Dashboard orders={orders} leads={leads} />}
          />
          <Route path="/barcode" element={<Barcode />} />
          <Route path="/allorders" element={<AllOrders orders={orders}  />} />
          <Route path="/allleads" element={<AllLeads leads={leads} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
