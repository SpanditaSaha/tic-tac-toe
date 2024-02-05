import React, { useState } from "react";

function Player({ playerName, playerSymbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(playerName);

  function handleEdit() {
    setIsEditing((prev) => !prev);
    if (isEditing) {
      onChangeName(playerSymbol, name);
    }
  }

  let player = <span className="player-name">{name}</span>;

  if (isEditing) {
    player = (
      <input
        type="text"
        value={name}
        required
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    );
  }

  return (
    <li className={isActive ? "active" : null}>
      <span className="player">
        {player}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
