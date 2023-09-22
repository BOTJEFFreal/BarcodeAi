import React from "react";
import "./InvoiceGrid.css"

function InvoiceGrid(){
    return (
        <>
         <div className="grid-container">
          <div className="grid-header">
            <div>S.no</div>
            <div>File Name</div>
            <div>Uploaded On</div>
            <div>Number of Products</div>
            <div>Invoice Amount</div>
            <div>Seller</div>
          </div>
          <div className="grid-row">
            <div>1</div>
            <div><a href="/">File1.pdf</a></div>
            <div>2023-09-15</div>
            <div>10</div>
            <div>$100.00</div>
            <div>Seller A</div>
          </div>
          <div className="grid-row">
            <div>2</div>
            <div><a href="/">File2.pdf</a></div>
            <div>2023-09-15</div>
            <div>12</div>
            <div>$1000.00</div>
            <div>Seller B</div>
          </div>
          {/* Add more rows as needed */}
          <button className="upload-files">Upload Invoice</button>

        </div></>
       
      );
}

export default InvoiceGrid;