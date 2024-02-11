/* eslint-disable no-unused-vars */
import { TypeItem } from "../../constants/Items/typeItem";
import ItemBase from "../../storage/Items";
import { getItemBoxPosition } from "../getItemBox/getItemBoxPosition";
import { Constants } from "../../constants/Constants";
import { checkDirection } from "../player/checkDirection";
import { deleteItem } from "../menuItem/deleteItem";
import SmartBaseScreen from "../SmartScreenBase";
SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;
const smFontSize = SmartBaseScreen.smFontSize;

export const turn1Cell = (_this, _chessboard, _player, _dice1, _dice2) => {
  const historyMovation = ItemBase.historyMovation;
  const historyMovationLength = historyMovation.length;
  let prevPosition;
  let positionAfterMoved = ItemBase.positionAfterMoved;
  if (
    !Array.isArray(historyMovation) ||
    historyMovationLength == 0 ||
    (positionAfterMoved.row === 5 && positionAfterMoved.col === 0)
  ) {
    ItemBase.updateTypeUsingItem(null);
    ItemBase.updateContentAlertAction(
      "Bạn đang ở nơi bắt đầu, không thể quay lại tiếp."
    );
    ItemBase.updateIsUsingItem(false);
  } else {
    ItemBase.updateTypeUsingItem(TypeItem.TURN_1_CELL);
    ItemBase.updateItem(TypeItem.TURN_1_CELL, -1);
    ItemBase.updateIsUsingItem(true);
    deleteItem(ItemBase.listItems, TypeItem.TURN_1_CELL);
    ItemBase.updateContentAlertAction("Bạn đã sử dụng vật phẩm ");
    ItemBase.updateImgKeyItem(TypeItem.TURN_1_CELL + "_bg");
    prevPosition = {
      row: historyMovation[historyMovationLength - 1]?.row,
      col: historyMovation[historyMovationLength - 1]?.col,
    };
    ItemBase.updatePositionAfterMoved(prevPosition.row, prevPosition.col);
    checkDirection(prevPosition.row, prevPosition.col);
    _dice1.setVisible(false);
    _dice2.setVisible(false);

    setTimeout(() => {
      const newX =
        prevPosition.col * Constants.rectangleWidth +
        widthScreen * ((Constants.rectangleWidth * 3) / 2 / widthScreen + 760);

      const newY =
        prevPosition.row * Constants.rectangleHeight +
        widthScreen * ((Constants.rectangleHeight * 1.52) / widthScreen + 25);

      _player.setPosition(newX, newY);

      getItemBoxPosition(
        _this,
        _chessboard,
        prevPosition.row,
        prevPosition.col,
        _dice1,
        _dice2
      );

      historyMovation.pop();
      ItemBase.updateHistoryMovation(historyMovation);
      ItemBase.updateTypeUsingItem(null);
      ItemBase.updateIsUsingItem(false);
      ItemBase.updateIsDeletedItem(false);
      ItemBase.updateIsBtnSelected(false);
      ItemBase.updateImgKeyItem("");
      ItemBase.updateContentAlertAction("");
    }, 500);
  }
};
