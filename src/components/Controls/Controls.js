import React from "react";

import TextArea from "../TextArea";
import Radio from "../Radio";
import Button from "../Button";

import styles from "../ToastPlayground/ToastPlayground.module.css";

function Controls({
  message,
  setMessage,
  options,
  variant,
  setVariant,
  toasts,
  setToasts,
}) {
  const handleSubmit = (variant, message) => {
    const newToast = {
      variant: variant,
      message: message,
      id: crypto.randomUUID(),
    };

    const nextToasts = [...toasts, newToast];

    setToasts(nextToasts);

    setVariant("notice");
    setMessage("");
  };
  return (
    <form
      className={styles.controlsWrapper}
      onSubmit={(event) => {
        event.preventDefault();

        handleSubmit(variant, message);
      }}
    >
      <div className={styles.row}>
        <TextArea label="Message" message={message} setMessage={setMessage} />
      </div>

      <div className={styles.row}>
        <div className={styles.label}>Variant</div>
        <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
          {options.map((option) => (
            <Radio
              key={option}
              option={option}
              variant={variant}
              setVariant={setVariant}
            />
          ))}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.label} />
        <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
          <Button>Pop Toast!</Button>
        </div>
      </div>
    </form>
  );
}

export default Controls;
