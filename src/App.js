import React from "react";
import SearchBar from "./components/SearchBar";
import EmojiList from "./components/EmojiList";
import CopyNotification from "./components/CopyNotification";
import { useFilterEmojis } from "./hooks/useFilterEmojis";
import { useCopy } from "./hooks/useCopy";
import "./App.css";

const App = () => {
  const { filteredEmojis, handleSearch } = useFilterEmojis();
  const { copiedSymbol, handleCopy } = useCopy();

  return (
    <div>
      <h1>Emoji Search App</h1>
      <SearchBar handleSearch={handleSearch} />
      <EmojiList emojis={filteredEmojis} handleCopy={handleCopy} />
      <CopyNotification copiedSymbol={copiedSymbol} />
    </div>
  );
};

export default App;
