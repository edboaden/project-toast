import React from "react";
import { ToastContext } from "../ToastProvider";

import TextArea from "../TextArea";
import Radio from "../Radio";
import Button from "../Button";

import styles from "../ToastPlayground/ToastPlayground.module.css";

function Controls() {
  const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const { handleSubmit } = React.useContext(ToastContext);

  return (
    <form
      className={styles.controlsWrapper}
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(variant, message);

        setVariant("notice");
        setMessage("");
      }}
    >
      <div className={styles.row}>
        <TextArea label="Message" message={message} setMessage={setMessage} />
      </div>

      <div className={styles.row}>
        <div className={styles.label}>Variant</div>
        <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
          {VARIANT_OPTIONS.map((option) => (
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
