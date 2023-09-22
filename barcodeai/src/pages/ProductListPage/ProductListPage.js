import React, { useState, useRef } from "react";
import styles from "./ProductListPage.module.css";
import AdvanceInvoiceGrid from "../../components/AdvancedGrid/AdvanceGrid";

function ProductListPage() {
  const currentBill = 0;
  const totalBill = 0;
  const fileName = "BILL1.png";

  return (
    <div className={styles.product_list_page}>
      <div className={styles.number_of_bills}>
        {currentBill}/{totalBill} <span className={styles.filename}>{fileName}</span>
      </div>
      <div className={styles.final_result}>Final Results</div>
     <div className={styles.grid}> <AdvanceInvoiceGrid/></div>

    </div>
  );
}

export default ProductListPage;
