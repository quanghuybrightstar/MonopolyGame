/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import Phaser from "phaser";
import imgPlayer from "../../assets/imgs/character-blonde.png";

const Animation = () => {
  const gameContainerRef = useRef(null);

  useEffect(() => {
    let player;
    let cursors;
    let isMoving = false;

    const config = {
      type: Phaser.AUTO,
      width: 800,
      heigh: 600,
      parent: gameContainerRef.current,
      physics: {
        default: "arcade",
        arcade: {},
      },
      scene: {
        preload() {
          this.load.spritesheet("player", imgPlayer, {
            frameWidth: 64,
            frameHeight: 64,
          });
        },
        create() {
          player = this.physics.add.sprite(400, 300, "player");

          this.anims.create({
            key: "walkLeft",
            frames: this.anims.generateFrameNumbers("player", {
              frames: [13, 19],
            }),
            frameRate: 10,
            repeat: -1,
          });

          player.anims.play("walkLeft", true);
          cursors = this.input.keyboard.createCursorKeys();
          player.setCollideWorldBounds(true);
        },
        update() {
          isMoving = false;
          if (cursors.left.isDown) {
            player.setVelocityX(-160);
            isMoving = true;
            player.flipX = false;
          } else if (cursors.right.isDown) {
            player.setVelocityX(160);
            isMoving = true;
            player.flipX = true;
          }

          if (cursors.up.isDown) {
            player.setVelocityY(-160);
            isMoving = true;
            player.flipY = false;
          } else if (cursors.down.isDown) {
            player.setVelocityY(160);
            isMoving = true;
          }

          //   if (isMoving) {
          //     player.anims.play("walkLeft", true);
          //   }
        },
      },
    };
    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div ref={gameContainerRef} />;
};

export default Animation;
