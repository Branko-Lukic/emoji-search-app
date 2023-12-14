import React from "react";

const EmojiList = ({ emojis, handleCopy }) => {
  const list = (
    <ul>
      {emojis.map((emoji) => (
        <li key={emoji.title} onClick={() => handleCopy(emoji.symbol)}>
          <span>{emoji.symbol}</span> - {emoji.title}
        </li>
      ))}
    </ul>
  );

  return list;
};

export default EmojiList;
