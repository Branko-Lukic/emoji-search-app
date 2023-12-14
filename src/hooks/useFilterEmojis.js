import { useState } from "react";
import { useEmojis } from "./useEmojis";

export const useFilterEmojis = () => {
  const [filteredEmojis, setFilteredEmojis] = useState([]);
  const emojis = useEmojis();

  const handleSearch = (text) => {
    const searchWords = text.toLowerCase().split(" ");
    const filtered = emojis.filter((emoji) =>
      searchWords.every((word) => emoji.keywords.toLowerCase().includes(word))
    );
    setFilteredEmojis(filtered.slice(0, 10));
  };

  return { filteredEmojis, handleSearch };
};
