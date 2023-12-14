import { useState } from "react";

export const useCopy = () => {
  const [copiedSymbol, setCopiedSymbol] = useState(null);

  const handleCopy = (symbol) => {
    navigator.clipboard.writeText(symbol);
    setCopiedSymbol(symbol);
  };

  return { copiedSymbol, handleCopy };
};
