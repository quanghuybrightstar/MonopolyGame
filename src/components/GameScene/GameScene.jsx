/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import Phaser from "phaser";
import imgLogo from "../../assets/imgs/logo.png";

const GameScene = () => {
  const gameRef = useRef(null);
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 800,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 200 },
        },
      },
      scene: {
        preload() {
          this.load.image("logo", imgLogo);
        },
        create() {
          const logo = this.add.image(400, 300, "logo");
          this.logo = logo;

          const camera = this.cameras.main;

          camera.setBounds(0, 0, 1000, 1000);

          const sprite = this.physics.add.sprite(400, 300, "spriteKey");
          sprite.body.collideWorldBounds = true;
          camera.startFollow(sprite);

          this.input.on("pointerdown", (pointer) => {
            const x = pointer.worldX;
            const y = pointer.worldY;
            const duration = 1000;
            const ease = "Linear";
            camera.pan(x, y, duration, ease);
          });

          const triggerZone = this.add.zone(600, 500, 100, 100);
          this.physics.world.enable(triggerZone);
          triggerZone.body.setAllowGravity(false);
          triggerZone.body.setImmovable(true);
          triggerZone.body.setSize(100, 100);
          this.physics.add.overlap(sprite, triggerZone, () => {
            const zoomLevel = 2;
            const duration = 1000;
            const ease = "Linear";
            camera.zoomTo(zoomLevel, duration, ease);
          });

          // Shake the camera when the sprite collides with an object
          const obstacle = this.physics.add.sprite(500, 200, "obstacleKey");
          obstacle.body.collideWorldBounds = true; // Enable world bounds collision
          this.physics.add.collider(sprite, obstacle, () => {
            const duration = 500;
            const intensity = 0.01;
            camera.shake(duration, intensity);
          });

          this.input.keyboard.on("keydown", (event) => {
            if (event.key === "f") {
              const fadeInDuration = 1000;
              const fadeOutDuration = 500;
              camera.fadeIn(fadeInDuration);
              this.time.delayedCall(fadeInDuration + 1000, () => {
                camera.fadeOut(fadeOutDuration);
              });
              this.time.delayedCall(fadeInDuration + 3000, () => {
                camera.fadeIn(fadeInDuration);
              });
            }
          });

          // Tạo một tile sprite với kích thước 800x600
          // const tileSprite = this.add.tileSprite(
          //   400,
          //   300,
          //   800,
          //   600,
          //   "imageKey"
          // );

          // // Thiết lập tốc độ di chuyển của tile sprite
          // this.tileSprite = tileSprite;
          // const container = this.add.container(400, 300);

          // // Tạo các đối tượng con
          // const sprite1 = this.add.sprite(-50, 0, "spriteKey1");
          // const sprite2 = this.add.sprite(50, 0, "spriteKey2");

          // // Thêm các đối tượng con vào container
          // container.add([sprite1, sprite2]);

          // // Xử lý sự kiện cho container
          // container.on("pointerdown", () => {
          //   console.log("Container clicked");
          // });

          // // Thiết lập góc quay cho container
          // container.setRotation(Phaser.Math.DegToRad(45));

          // // Hiển thị container và tất cả các đối tượng con của nó
          // container.setVisible(true);

          // GRAPHICS
          // Tạo một đối tượng Graphics
          // const graphics = this.add.graphics();

          // // Vẽ hình chữ nhật đơn giản
          // graphics.fillStyle(0xff0000, 1); // Đặt màu sắc và độ mờ
          // graphics.fillRect(100, 100, 200, 150); // Vẽ hình chữ nhật

          // // Vẽ đường thẳng
          // graphics.lineStyle(5, 0x00ff00, 1); // Đặt màu sắc và độ mờ của đường
          // graphics.beginPath(); // Bắt đầu đường mới
          // graphics.moveTo(300, 300); //Di chuyển đến điểm bắt đầu của đường
          // graphics.lineTo(500, 300); // Vẽ đường đến điểm kết thúc
          // graphics.closePath(); // Kết thúc đường

          // // Hiển thị đối tượng Graphics trên màn hình
          // graphics.strokePath(); // Hiển thị đường
          // graphics.fillPath(); // Hiển thị hình chữ nhật

          // LAYER
          // const group1 = this.add.group(); // Tạo một nhóm đối tượng
          // const group2 = this.add.group(); // Tạo một nhóm đối tượng khác

          // const sprite1 = this.add.sprite(100, 100, "spriteKey1"); // Tạo một sprite
          // const sprite2 = this.add.sprite(200, 200, "spriteKey2"); // Tạo một sprite khác

          // group1.add(sprite1); // Thêm sprite vào group1
          // group2.add(sprite2); // Thêm sprite vào group2

          // // Hiển thị các nhóm đối tượng
          // group1.setDepth(1);
          // group2.setDepth(2);

          // MATTER PHYSICS
          // grounds and wall
          // Create ground and walls
        },

        update() {
          if (this.logo) {
            this.logo.rotation += 0.01;
          }

          // this.tileSprite.tilePositionX += 1;
          // this.tileSprite.tilePositionY += 1;
        },
      },
    };

    const game = new Phaser.Game(config);
    gameRef.current = game;

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div ref={gameRef} />;
};

export default GameScene;
