/* eslint-disable no-unused-vars */
import Phaser from "phaser";

const squareSize = 100;
const boardSize = 6;
const positionGraphicX = 500;
const positionGraphicY = 200;
let canMove = false;
let typeMove = "right";
let _direction = {
  row: 0,
  col: 1,
};

export const createCharacter = (_this, _character) => {
  // Character
  typeMove = "right";
  const characterPosition = { row: 5, col: 0 };
  _character.setDisplaySize(squareSize, squareSize);
  _character.setOrigin(0.5);

  _character.setPosition(
    characterPosition.col * squareSize + squareSize / 2 + positionGraphicX,
    characterPosition.row * squareSize + squareSize / 2 + positionGraphicY
  );

  _character.setInteractive();
  _character.setDepth(1);

  // moveCharacterWithSteps(_this, _character, steps);
};

export const moveCharacterWithSteps = (_this, _character, steps) => {
  let stepCount = 0;

  const moveInterval = setInterval(() => {
    const currentRow = Math.floor(
      (_character.y - positionGraphicY) / squareSize
    );
    const currentCol = Math.floor(
      (_character.x - positionGraphicX) / squareSize
    );

    const newRow = currentRow + _direction?.row;
    const newCol = currentCol + _direction?.col;

    if (
      newRow >= 0 &&
      newRow < boardSize &&
      newCol >= 0 &&
      newCol < boardSize
    ) {
      if (
        newRow === 0 ||
        newRow === 5 ||
        (newRow !== 0 && newRow !== 5 && (newCol === 0 || newCol === 5))
      ) {
        canMove = true;
        stepCount++;

        if (stepCount > steps) {
          clearInterval(moveInterval);
          _character.anims.pause();
          canMove = false;
        } else {
          canMove = true;
          let newRow = currentRow + _direction?.row;
          let newCol = currentCol + _direction?.col;
          if (canMove) {
            switch (typeMove) {
              case "right":
                _character.anims.play("walkRight", true);
                break;
              case "left":
                _character.anims.play("walkLeft", true);
                break;
              case "up":
                _character.anims.play("walkUp", true);
                break;
              case "down":
                _character.anims.play("walkDown", true);
                break;
            }
          }

          const positionCharacter = newRow + "_" + newCol;
          switch (positionCharacter) {
            // position top left
            case "0_0":
              canMove &&
                _character.anims.pause() &&
                _character.anims.play("walkDown", true);
              _direction = {
                row: 1,
                col: 0,
              };
              typeMove = "down";
              break;
            // position top right
            case "0_5":
              canMove &&
                _character.anims.pause() &&
                _character.anims.play("walkLeft", true);
              _direction = {
                row: 0,
                col: -1,
              };
              typeMove = "left";
              break;
            // position bottom right
            case "5_5":
              canMove &&
                _character.anims.pause() &&
                _character.anims.play("walkUp", true);
              _direction = {
                row: -1,
                col: 0,
              };
              typeMove = "up";
              break;
            // position bottom left
            case "5_0":
              canMove &&
                _character.anims.pause() &&
                _character.anims.play("walkRight", true);
              _direction = {
                row: 0,
                col: 1,
              };
              typeMove = "right";
              break;
            default:
            // console.log("not collide");
          }

          const newX = newCol * squareSize + squareSize / 2 + positionGraphicX;
          const newY = newRow * squareSize + squareSize / 2 + positionGraphicY;

          _character.setPosition(newX, newY);
        }
      } else {
        canMove = false;
        clearInterval(moveInterval);
      }
    }
  }, 500);
};
