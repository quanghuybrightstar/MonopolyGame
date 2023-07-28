/* eslint-disable no-unused-vars */
import ItemBase from "../../storage/Items";
import { tweenAnims } from "../animation/tweenAnims";
import { TypeItem } from "../../constants/Items/typeItem";
import { Constants } from "../../constants/Constants";
import { checkDirection } from "../player/checkDirection";
import SmartBaseScreen from "../SmartScreenBase";
SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;
const smFontSize = SmartBaseScreen.smFontSize;

export const rollTurnBack = (_this, _chessboard, _player, _dice, _steps) => {
  let isRolling = false;

  _dice.setVisible(true);
  _dice.setPosition((_chessboard.x * 2) / 3, widthScreen * 530);
  if (!isRolling) {
    // Create the jump tween using the easing function
    tweenAnims(_this, _chessboard, _chessboard.x, _chessboard.y, _dice, () => {
      _dice.setTexture(`dice_${_steps}`);
    });

    // rollDice();
    isRolling = true;
    console.log(`dice_${_steps}`);
    setTimeout(() => {
      isRolling = false;
    }, 2000);

    ItemBase.decreaseCountTickets(1);
  }

  _this.input.enabled = false;
  let prevPosition;

  let historyMovation = ItemBase.historyMovation;
  let historyMovationLength = historyMovation.length;
  let stepCount = 0;
  let canMove = false;
  if (!Array.isArray(historyMovation) || historyMovationLength == 0) {
    ItemBase.updateTypeUsingItem(null);
    ItemBase.updateContentAlertAction(
      "Bạn đang ở nơi bắt đầu, không thể quay lại tiếp."
    );
  } else {
    setTimeout(() => {
      const moveInterval = setInterval(() => {
        canMove = true;
        stepCount++;
        const historyMovationLength = historyMovation.length;
        console.log(historyMovation);
        prevPosition = {
          row: historyMovation[historyMovationLength - 1]?.row,
          col: historyMovation[historyMovationLength - 1]?.col,
        };

        if (stepCount > _steps) {
          clearInterval(moveInterval);
          canMove = false;

          _this.input.enabled = true;
          ItemBase.updateTypeUsingItem(null);
          ItemBase.updateIsUsingItem(false);
          ItemBase.updateIsDeletedItem(false);
          ItemBase.updateIsBtnSelected(false);
        } else if (prevPosition.row === 5 && prevPosition.col === 0) {
          checkDirection(prevPosition.row, prevPosition.col);
          clearInterval(moveInterval);
          ItemBase.updateIsUsingItem(false);
          ItemBase.updateIsDeletedItem(false);
          ItemBase.updateTypeUsingItem(null);
          ItemBase.updateIsBtnSelected(false);
          stepCount = 0;
          const newX =
            0 * Constants.rectangleWidth +
            widthScreen *
              ((Constants.rectangleWidth * 3) / 2 / widthScreen + 790);

          const newY =
            5 * Constants.rectangleHeight +
            widthScreen *
              ((Constants.rectangleHeight * 1.52) / widthScreen + 105);

          _player.setPosition(newX, newY);
          ItemBase.updateContentAlertAction(
            "Bạn đang ở nơi bắt đầu, không thể quay lại tiếp."
          );
          canMove = false;
          _this.input.enabled = true;
        } else {
          checkDirection(prevPosition.row, prevPosition.col);
          canMove = true;
          historyMovation.pop();
          ItemBase.updateHistoryMovation(historyMovation);
          const newX =
            prevPosition.col * Constants.rectangleWidth +
            widthScreen *
              ((Constants.rectangleWidth * 3) / 2 / widthScreen + 790);

          const newY =
            prevPosition.row * Constants.rectangleHeight +
            widthScreen *
              ((Constants.rectangleHeight * 1.52) / widthScreen + 105);

          _player.setPosition(newX, newY);
        }
      }, 330);
    }, 1300);
  }
};
