import React from "react";

import Header from "../Header";
import Controls from "../Controls";
import ToastShelf from "../ToastShelf";
import { ToastContext } from "../ToastProvider";

import styles from "./ToastPlayground.module.css";

function ToastPlayground() {
  const { dismissAll } = React.useContext(ToastContext);
  function useEscapeKey(callback) {
    React.useEffect(() => {
      function handleKeyDown(event) {
        if (event.code === "Escape") {
          callback();
        }
      }

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [callback]);
  }

  useEscapeKey(dismissAll);

  return (
    <div className={styles.wrapper}>
      <Header />
      <ToastShelf />
      <Controls />
    </div>
  );
}

export default ToastPlayground;
