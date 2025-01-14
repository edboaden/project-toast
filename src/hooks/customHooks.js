import React from "react";

function useKeyDown(key, callback) {
  if (!key) {
    throw new Error("You must provide a key to useKeyDown.");
  }

  const memoizedCallback = React.useCallback(callback, [callback]);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === key) {
        memoizedCallback();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, memoizedCallback]);
}

export default useKeyDown;
