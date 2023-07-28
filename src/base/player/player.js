/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import ItemBase from "../../storage/Items";
import { TypeItem } from "../../constants/Items/typeItem";
import { getItemBoxPosition } from "../getItemBox/getItemBoxPosition";
import { Constants } from "../../constants/Constants";
import SmartBaseScreen from "../SmartScreenBase";
SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;
const smFontSize = SmartBaseScreen.smFontSize;

let canMove = false;
let typeMove = "right";
let itemAlertCongrats;
let historyMovation = [];

let _direction = {
  row: 0,
  col: 1,
};

export const createPlayer = (_this, _player, _chessboard) => {
  const playerPosition = { row: 5, col: 0 };
  _player.setDisplaySize(Constants.rectangleWidth, Constants.rectangleHeight);
  _player.setOrigin(0.5);

  _player.setPosition(
    playerPosition.col * Constants.rectangleWidth +
      widthScreen * ((Constants.rectangleWidth * 3) / 2 / widthScreen + 790),
    playerPosition.row * Constants.rectangleHeight +
      widthScreen * ((Constants.rectangleHeight * 3) / 2 / widthScreen + 105)
  );

  _player.setDepth(1);
};

export const movePlayerWithSteps = (
  _this,
  _chessboard,
  _player,
  steps,
  _dice1,
  _dice2
) => {
  let stepCount = 0;
  const moveInterval = setInterval(() => {
    _direction = ItemBase.directionMove;
    const currentRow = Math.round(
      (_player.y -
        widthScreen *
          ((Constants.rectangleHeight * 3) / 2 / widthScreen + 105)) /
        Constants.rectangleHeight
    );

    const currentCol = Math.round(
      (_player.x -
        widthScreen *
          ((Constants.rectangleWidth * 3) / 2 / widthScreen + 790)) /
        Constants.rectangleWidth
    );

    console.log(currentRow + "_" + currentCol);

    const newRow = currentRow + _direction?.row;
    const newCol = currentCol + _direction?.col;

    if (
      newRow >= 0 &&
      newRow < Constants.boxSize &&
      newCol >= 0 &&
      newCol < Constants.boxSize
    ) {
      if (
        newRow === 0 ||
        newRow === 5 ||
        (newRow !== 0 && newRow !== 5 && (newCol === 0 || newCol === 5))
      ) {
        canMove = true;
        stepCount++;

        if (stepCount > steps) {
          ItemBase.updateIsUsingItem(false);
          ItemBase.updateIsDeletedItem(false);
          ItemBase.updateTextSelectDice("");
          ItemBase.updateIsBtnSelected(false);
          clearInterval(moveInterval);
          canMove = false;
          if (ItemBase.typeUsingItem === TypeItem.ROLL_DOUBLE_SELECT_1) {
            _dice1.removeListener("pointerup");
            _dice2.removeListener("pointerup");
          }
          _this.input.enabled = true;
          getItemBoxPosition(
            _this,
            _chessboard,
            currentRow,
            currentCol,
            _dice1,
            _dice2
          );
        } else {
          canMove = true;
          let newRowAfterMoved = currentRow + _direction?.row;
          let newColAfterMoved = currentCol + _direction?.col;

          const positionPlayer = newRowAfterMoved + "_" + newColAfterMoved;
          switch (positionPlayer) {
            // position top left
            case "0_0":
              ItemBase.updateDirectionMove({
                row: 1,
                col: 0,
              });
              typeMove = "down";
              break;
            // position top right
            case "0_5":
              ItemBase.updateDirectionMove({
                row: 0,
                col: -1,
              });
              typeMove = "left";
              break;
            // position bottom right
            case "5_5":
              ItemBase.updateDirectionMove({
                row: -1,
                col: 0,
              });
              typeMove = "up";
              break;
            // position bottom left
            case "5_0":
              ItemBase.updateDirectionMove({
                row: 0,
                col: 1,
              });
              typeMove = "right";
              ItemBase.increaseCountTickets(1);
              break;
            default:
          }

          historyMovation = [
            ...ItemBase.historyMovation,
            { row: currentRow, col: currentCol },
          ];
          ItemBase.updateHistoryMovation(historyMovation);
          ItemBase.updatePositionAfterMoved({
            row: newRowAfterMoved,
            col: newColAfterMoved,
          });

          console.log(newRowAfterMoved + "_" + newColAfterMoved);

          const newX =
            newColAfterMoved * Constants.rectangleWidth +
            widthScreen *
              ((Constants.rectangleWidth * 3) / 2 / widthScreen + 790);

          const newY =
            newRowAfterMoved * Constants.rectangleHeight +
            widthScreen *
              ((Constants.rectangleHeight * 1.52) / widthScreen + 105);

          _player.setPosition(newX, newY);
        }
      } else {
        canMove = false;
        clearInterval(moveInterval);
      }
    }
  }, 330);
};
