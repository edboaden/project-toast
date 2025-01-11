import React from "react";

import styles from "../ToastPlayground/ToastPlayground.module.css";

function TextArea({ label, message, setMessage }) {
  return (
    <>
      <label
        htmlFor="message"
        className={styles.label}
        style={{ alignSelf: "baseline" }}
      >
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <textarea
          id="message"
          className={styles.messageInput}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>
    </>
  );
}

export default TextArea;
