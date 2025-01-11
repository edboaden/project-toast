import React from "react";

function Radio({ option, variant, setVariant }) {
  const id = `variant-${option}`;
  return (
    <>
      <input
        id={id}
        type="radio"
        name="variant"
        value={option}
        checked={option === variant}
        onChange={(event) => setVariant(event.target.value)}
      />
      <label htmlFor={id}>{option}</label>
    </>
  );
}

export default Radio;
