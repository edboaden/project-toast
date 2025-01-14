import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

import { ToastContext } from "../ToastProvider";

function ToastShelf() {
  const { toasts, setToasts } = React.useContext(ToastContext);

  return (
    toasts && (
      <ol className={styles.wrapper}>
        {toasts.map((toast) => (
          <li className={styles.toastWrapper} key={toast.id}>
            <Toast
              variant={toast.variant}
              toasts={toasts}
              setToasts={setToasts}
              id={toast.id}
            >
              {toast.message}
            </Toast>
          </li>
        ))}
      </ol>
    )
  );
}

export default ToastShelf;
