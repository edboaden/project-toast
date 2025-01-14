import React from "react";

import Header from "../Header";
import Controls from "../Controls";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

function ToastPlayground() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <ToastShelf />
      <Controls />
    </div>
  );
}

export default ToastPlayground;
