/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import Phaser from "phaser";

const GameOverScene = () => {
  const gameRef = useRef(null);
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 800,
      scene: {
        create() {
          this.add
            .text(400, 300, "Game Over", { fontSize: "32px", fill: "#fff" })
            .setOrigin(0.5);
        },
      },
    };

    const game = new Phaser.Game(config);
    gameRef.current = game;

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      id="gameOver"
      ref={gameRef}
    ></div>
  );
};

export default GameOverScene;
