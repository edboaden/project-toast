import React, { use } from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  // submit
  const handleSubmit = (variant, message) => {
    const newToast = {
      variant: variant,
      message: message || "No message",
      id: crypto.randomUUID(),
    };

    const nextToasts = [...toasts, newToast];

    setToasts(nextToasts);
  };

  // dismiss
  const handleDismiss = (id) => {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(nextToasts);
  };

  // dismiss all

  const dismissAll = () => {
    setToasts([]);
  };

  return (
    <ToastContext.Provider
      value={{
        toasts,
        handleSubmit,
        handleDismiss,
        dismissAll,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
