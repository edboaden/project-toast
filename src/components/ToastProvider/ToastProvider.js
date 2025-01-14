import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  // submit
  const handleSubmit = (variant, message) => {
    const newToast = {
      variant: variant,
      message: message,
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

  return (
    <ToastContext.Provider
      value={{
        toasts,
        handleSubmit,
        handleDismiss,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
