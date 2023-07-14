// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable no-unused-vars */
// import React, { useLayoutEffect, useEffect, useState } from "react";
// import Phaser from "phaser";
// import imgFlag from "../../assets/imgs/flagStart.png";
// import imgPlayer from "../../assets/imgs/character-blonde.png";
// import imgDiceSprite from "../../assets/imgs/DiceSprite.png";
// import { createCharacter, moveCharacterWithSteps } from "../../rubbish/character";
// import { createAnimation } from "../../base/animation";
// import "./ChessBoard.css";
// import ItemBase from "../../storage/Items";

// const ChessBoard = () => {
//   const squareSize = 100;
//   const boardSize = 6;
//   const positionGraphicX = 500;
//   const positionGraphicY = 200;
//   const colors = {
//     dark: 0x8b4513,
//     light: 0xffebcd,
//   };
//   let steps = 0;
//   const diceTextureKey = "dice";
//   const playerTextureKey = "player";

//   useEffect(() => {
//     let character;
//     let countTicketsSide;
//     let remainTickets;

//     const config = {
//       type: Phaser.AUTO,
//       parent: "chessboard_container",
//       width: 1600,
//       height: 1000,
//       backgroundColor: "#f0f8ff",
//       scene: {
//         preload() {
//           this.load.spritesheet(playerTextureKey, imgPlayer, {
//             frameWidth: 64,
//             frameHeight: 65,
//           });

//           this.load.spritesheet(diceTextureKey, imgDiceSprite, {
//             frameWidth: 106.3,
//             frameHeight: 106,
//           });
//         },
//         create() {
//           countTicketsSide = ItemBase.countTickets;
//           // Calculate the dimensions of the screen
//           const screenWidth = this.sys.game.config.width;
//           const screenHeight = this.sys.game.config.height;
//           const graphics = this.add.graphics(600, 600);
//           character = this.add.sprite(0, 0, playerTextureKey, 143);

//           // Create chess board
//           for (let row = 0; row < boardSize; row++) {
//             for (let col = 0; col < boardSize; col++) {
//               const x = col * squareSize;
//               const y = row * squareSize;
//               const color = (row + col) % 2 === 0 ? colors.light : colors.dark;

//               if (
//                 row === 0 ||
//                 row === boardSize - 1 ||
//                 col === 0 ||
//                 col === boardSize - 1
//               ) {
//                 graphics.fillStyle(color);
//                 graphics.fillRect(x, y, squareSize, squareSize);
//               } else {
//                 graphics.fillStyle("0xffffff");
//                 graphics.fillRect(x, y, squareSize, squareSize);
//               }

//               if (row === boardSize - 1 && col === 0) {
//                 this.load.image(`chessPiece-${row}-${col}`, imgFlag);
//                 this.load.once("complete", () => {
//                   const image = this.add.image(
//                     x + squareSize / 2 + positionGraphicX,
//                     y + squareSize / 2 + positionGraphicY,
//                     `chessPiece-${row}-${col}`
//                   );
//                   image.setDisplaySize(
//                     (squareSize * 2) / 3,
//                     (squareSize * 2) / 3
//                   );
//                   image.setOrigin(0.5, 0.5);
//                 });
//                 this.load.start();
//               }
//             }
//           }

//           createCharacter(this, character);
//           createAnimation(this);

//           // Create dice
//           const dice = this.add.sprite(100, 500, diceTextureKey);
//           dice.setVisible(false);
//           dice.setScale(0.5);
//           dice.setDisplaySize(80, 80);

//           const targetX = 800; // Specify the target position on the screen
//           const targetY = 500;

//           const jumpHeight = 120;

//           function rollDice() {
//             dice.anims.play("roll");
//           }
//           const duration = 300; // Specify the duration of each jump

//           const controlX = targetX + dice.x; // Calculate the control point x-coordinate
//           const controlY = dice.y - jumpHeight; // Calculate the control point y-coordinate

//           // Create button roll dice
//           const btnRollDice = this.add.text(1300, 600, "Roll Dice", {
//             fontSize: "24px",
//             fill: "#000",
//             backgroundColor: "#ff8533",
//           });

//           // Handle event Button
//           btnRollDice.setInteractive({ useHandCursor: true });
//           btnRollDice
//             .setPadding(35)
//             .on("pointerup", () => {
//               dice.setVisible(true);
//               dice.setPosition(100, 500);
//               dice.setFrame(0);
//               // Create the jump tween using the easing function
//               this.tweens.add({
//                 targets: dice,
//                 x: (controlX * 2) / 5,
//                 y: controlY,
//                 duration,
//                 rotation: Math.PI * 2,
//                 ease: "Sine.easeInOut",
//                 onComplete: () => {
//                   this.tweens.add({
//                     targets: dice,
//                     x: (controlX * 2) / 3 - 50,
//                     y: targetY,
//                     duration: 200,
//                     rotation: (Math.PI * 3) / 2,
//                     ease: "Sine.easeInOut",
//                     onComplete: () => {
//                       this.tweens.add({
//                         targets: dice,
//                         x: (controlX * 2) / 3 + 180,
//                         y: controlY + 50,
//                         duration: 200,
//                         rotation: Math.PI * 2,
//                         ease: "Sine.easeInOut",
//                         onComplete: () => {
//                           this.tweens.add({
//                             targets: dice,
//                             x: targetX,
//                             y: targetY,
//                             rotation: 0,
//                             duration: 200,
//                             ease: "Sine.easeInOut",
//                             onComplete: rollDice,
//                             onCompleteScope: this,
//                           });
//                         },
//                         onCompleteScope: this,
//                       });
//                     },
//                     onCompleteScope: this,
//                   });
//                 },
//                 onCompleteScope: this,
//               });
//               steps = Phaser.Math.Between(1, 6);
//               dice.on("animationcomplete", () => {
//                 dice.setFrame(steps - 1);
//               });
//               this.input.enabled = false;
//               setTimeout(() => {
//                 moveCharacterWithSteps(this, character, steps);
//                 this.input.enabled = true;
//               }, 2000);
//               ItemBase.decreaseCountTickets(1);
//             })
//             .on("pointerover", () => {
//               btnRollDice.setStyle({
//                 backgroundColor: "#ffa366",
//               });
//             })
//             .on("pointerout", () => {
//               btnRollDice.setStyle({
//                 backgroundColor: "#ff8533",
//               });
//             });

//           remainTickets = this.add.text(
//             1250,
//             750,
//             `Tickets Remaining: ${countTicketsSide}`,
//             {
//               fontSize: "24px",
//               fill: "#000",
//               textAlign: "center",
//             }
//           );
//           const boardWidth = boardSize * squareSize;
//           const boardHeight = boardSize * squareSize;

//           graphics.lineStyle(2, 0x000000);
//           graphics.strokeRect(0, 0, boardWidth, boardHeight);

//           graphics.x = positionGraphicX;
//           graphics.y = positionGraphicY;
//         },
//         update() {
//           countTicketsSide = ItemBase.countTickets;
//           remainTickets.setText(`Tickets Remaining: ${countTicketsSide}`);
//         },
//       },
//     };
//     const game = new Phaser.Game(config);

//     return () => {
//       game.destroy(true);
//     };
//   }, []);

//   return <div id="chessboard_container" />;
// };

// export default ChessBoard;
