import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Request from "../Pages/Request";
import Budgets from "../Pages/Budgets";
import Message from "../Pages/Message";
import Kanban from "../Pages/Kanban";
import Calender from "../Pages/Calender";
import PurchaseRequisitions from "../Pages/PurchaseRequisitions";
import RequestQuotation from "../Pages/PurchaseQuotation";
import PurchaseOrder from "../Pages/PurchaseOrder";
import Invoice from "../Pages/Invoice";
import Payment from "../Pages/Payment";
import Suppliers from "../Pages/Suppliers";
import Products from "../Pages/Products";
import Deliveries from "../Pages/Deliveries";
import Settings from "../Pages/Settings";
import Help from "../Pages/Help";
import Table from "../Pages/Table";
import RequestSix from "../Pages/RequestSix";
const NavPage = () => {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request" element={<Request />} />
        <Route path="/table" element={<Table />} />
        <Route path="/requestsix" element={<RequestSix />} />
        <Route path="/budgets" element={<Budgets />} />
        <Route path="/message" element={<Message />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/calender" element={<Calender />} />
        <Route
          path="/purchaserequisitions"
          element={<PurchaseRequisitions />}
        />
        <Route path="/requestquotation" element={<RequestQuotation />} />
        <Route path="/purchaseorder" element={<PurchaseOrder />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/deliveries" element={<Deliveries />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
};

export default NavPage;
