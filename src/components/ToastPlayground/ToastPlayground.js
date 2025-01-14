import React from "react";

import Header from "../Header";
import Controls from "../Controls";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: "Oh no!",
      variant: "error",
    },
    {
      id: crypto.randomUUID(),
      message: "Logged in",
      variant: "success",
    },
  ]);
  return (
    <div className={styles.wrapper}>
      <Header />
      <ToastShelf toasts={toasts} setToasts={setToasts} />
      <Controls
        message={message}
        setMessage={setMessage}
        options={VARIANT_OPTIONS}
        variant={variant}
        setVariant={setVariant}
        toasts={toasts}
        setToasts={setToasts}
      />
    </div>
  );
}

export default ToastPlayground;
