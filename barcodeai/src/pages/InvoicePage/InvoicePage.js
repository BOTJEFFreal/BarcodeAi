import { useState } from "react";
import React from "react";
import "./InvociePage.css"
import InvoiceGrid from "../../components/InvoiceGrid/InvoiceGrid";

function InvoicePage() {
  const [billNumber, setBillNumber] = useState(0);
  return (
    <div className="invoice-page">
      <div className="invoice-page-left">
        <div className="company-name">BarcodeAi</div>
        <div className="client-name">
          <p className="client-name">Akshay SuperMarket</p>
          <p className="client-location">Pilani</p>
          <p className="status">(Admin)</p>
        </div>
      </div>
      <div className="invoice-page-right">
        <div className="my-bills">My Bills</div>
        <div className="number-of-bills">Showing {billNumber} Bills</div>
        <InvoiceGrid/>

      </div>
    </div>
  );
}

export default InvoicePage;
