import React from "react";

import Header from "../Header";
import Controls from "../Controls";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  return (
    <div className={styles.wrapper}>
      <Header />
      <Controls
        message={message}
        setMessage={setMessage}
        options={VARIANT_OPTIONS}
        variant={variant}
        setVariant={setVariant}
      />
    </div>
  );
}

export default ToastPlayground;
