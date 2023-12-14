import React, { useEffect, useState } from "react";

const CopyNotification = ({ copiedSymbol }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (copiedSymbol) {
      setVisible(true);
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [copiedSymbol]);

  return (
    <div>
      {visible && (
        <p className="notification">
          Symbol {copiedSymbol} copied to clipboard!
        </p>
      )}
    </div>
  );
};

export default CopyNotification;
