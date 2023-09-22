import React, { useState } from "react";
import styles from "./InvoiceGrid.module.css";
import Barcode from "react-barcode";

function AdvanceInvoiceGrid() {
  const jsonData = [
    {
      id: 1,
      sellerProduct: "Product A",
      price: 10,
      quantity: 5,
      taxPercentage: 5,
      profitPercentage: 10,
      barcode: "123451234512",
    },
    {
      id: 2,
      sellerProduct: "Product B",
      price: 15,
      quantity: 3,
      taxPercentage: 10,
      profitPercentage: 8,
      barcode: "678906789067",
    },
    {
      id: 3,
      sellerProduct: "Product C",
      price: 8,
      quantity: 7,
      taxPercentage: 8,
      profitPercentage: 12,
      barcode: "543215432154",
    },
    {
      id: 4,
      sellerProduct: "Product D",
      price: 20,
      quantity: 2,
      taxPercentage: 12,
      profitPercentage: 15,
      barcode: "098760987609",
    },
    {
      id: 5,
      sellerProduct: "Product E",
      price: 12,
      quantity: 4,
      taxPercentage: 6,
      profitPercentage: 10,
      barcode: "234562345623",
    },
    {
      id: 6,
      sellerProduct: "Product F",
      price: 18,
      quantity: 3,
      taxPercentage: 9,
      profitPercentage: 11,
      barcode: "765437654376",
    },
    {
      id: 7,
      sellerProduct: "Product G",
      price: 25,
      quantity: 1,
      taxPercentage: 15,
      profitPercentage: 18,
      barcode: "543215432154",
    },
    {
      id: 8,
      sellerProduct: "Product H",
      price: 30,
      quantity: 2,
      taxPercentage: 20,
      profitPercentage: 20,
      barcode: "098760987609",
    },
    {
      id: 9,
      sellerProduct: "Product I",
      price: 22,
      quantity: 4,
      taxPercentage: 8,
      profitPercentage: 14,
      barcode: "234562345623",
    },
    {
      id: 10,
      sellerProduct: "Product J",
      price: 28,
      quantity: 3,
      taxPercentage: 10,
      profitPercentage: 16,
      barcode: "765437654376",
    },
  ];
  const [editedData, setEditedData] = useState([...jsonData]);

  const handleInputChange = (id, field, value) => {
    setEditedData(prevData =>
      prevData.map(product =>
        product.id === id ? { ...product, [field]: value } : product
      )
    );
  };

    return (
        <>
            <div className={styles.gridContainer}>
                <div className={styles.gridHeader}>
                    <div>Sr.no.</div>
                    <div>Seller Product</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Line Amount</div>
                    <div>Tax %</div>
                    <div>Tax</div>
                    <div>Profit %</div>
                    <div>Profit</div>
                    <div>Final Price</div>
                    <div className={styles.barcodeHeading}>Barcode</div>
                </div>
                {editedData.map((product) => (
          <div className={styles.gridRow} key={product.id}>
            <div>{product.id}</div>
            <div>{product.sellerProduct}</div>
                        <div>
                            <input
                                type="number"
                                value={product.price}
                                onChange={(e) => handleInputChange(product.id, 'price', e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="number"
                                value={product.quantity}
                                onChange={(e) => handleInputChange(product.id, 'quantity', e.target.value)}
                            />
                        </div>
                        <div>${(product.price * product.quantity).toFixed(2)}</div>
                        <div>
                            <input
                                type="number"
                                value={product.taxPercentage}
                                onChange={(e) => handleInputChange(product.id, 'taxPercentage', e.target.value)}
                            />
                        </div>
                        <div>${((product.price * product.quantity * product.taxPercentage) / 100).toFixed(2)}</div>
                        <div>
                            <input
                                type="number"
                                value={product.profitPercentage}
                                onChange={(e) => handleInputChange(product.id, 'profitPercentage', e.target.value)}
                            />
                        </div>
                        <div>${((product.price * product.quantity * product.profitPercentage) / 100).toFixed(2)}</div>
                        <div>${((product.price * product.quantity * (1 + product.taxPercentage / 100 + product.profitPercentage / 100))).toFixed(2)}</div>
                        <div className={styles.barcode}>
              <Barcode width={0.8} value={product.barcode} />
            </div>
                    </div>
                ))}
            </div>
            <div className={styles.buttonsList}>
              <div className={styles.approvedFiles}>Approved Files</div>
              <div className={styles.printBarcode}>Print Barcode</div>
              <div></div>
            </div>
        </>
    );
}

export default AdvanceInvoiceGrid;
