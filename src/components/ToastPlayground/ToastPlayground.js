import React from "react";

import Header from "../Header";
import Controls from "../Controls";
import Toast from "../Toast";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [isToastVisible, setIsToastVisible] = React.useState(false);
  const handleDismissToast = () => {
    setIsToastVisible(false);
  };
  return (
    <div className={styles.wrapper}>
      <Header />
      <Toast
        variant={variant}
        isToastVisible={isToastVisible}
        handleDismiss={handleDismissToast}
      >
        {message}
      </Toast>
      <Controls
        message={message}
        setMessage={setMessage}
        options={VARIANT_OPTIONS}
        variant={variant}
        setVariant={setVariant}
        setIsToastVisible={setIsToastVisible}
      />
    </div>
  );
}

export default ToastPlayground;
