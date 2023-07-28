/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */

import { getItemBoxText } from "./getItemBoxText";
import { TypeAction } from "../../constants/Actions/typeAction";
import ItemBase from "../../storage/Items";
import { TypeItem } from "../../constants/Items/typeItem";
import { listActions } from "../../constants/Actions/listActions";
import { listItem, listItemMenu } from "../../constants/Items/listItem";
import { addItemIntoList } from "../menuItem/addItemIntoList";

export const getItemBoxPosition = (
  _this,
  _chessboard,
  _row,
  _col,
  _dice1,
  _dice2
) => {
  const actionItem = listActions[_row][_col];
  const listItems = ItemBase.listItems;
  let text = "";
  actionItem?.count >= 0
    ? (text = `Chúc mừng! Bạn được cộng`)
    : (text = `Rất tiếc! Bạn bị trừ`);
  switch (actionItem.type) {
    case TypeAction.DIAMOND:
      if (ItemBase.typeUsingItem === TypeItem.X2_DIAMOND) {
        ItemBase.updateCountDiamonds(actionItem?.count * 2);
        ItemBase.updateContentAlertAction(
          `${text} ${Math.abs(actionItem.count * 2)} kim cương.`
        );
      } else {
        ItemBase.updateCountDiamonds(actionItem?.count);
        ItemBase.updateContentAlertAction(
          `${text} ${Math.abs(actionItem.count)} kim cương.`
        );
      }
      break;
    case TypeAction.TICKET:
      ItemBase.updateCountTickets(actionItem?.count);
      ItemBase.updateContentAlertAction(
        `${text} ${Math.abs(actionItem.count)} vé.`
      );
      break;
    case TypeAction.HOME:
      break;
    case TypeAction.ITEM_BOX:
      const index = Math.floor(Math.random() * (4 - 0 + 1) + 0);
      console.log(index);
      const itemBox = listItem[index];
      console.log(itemBox);
      ItemBase.updateTypeItemGot(itemBox.type);
      ItemBase.updateItem(itemBox.type, 1);
      _dice1.setVisible(false);
      _dice2?.setVisible(false);
      let itemAlertCongrats = getItemBoxText(
        _this,
        _chessboard,
        itemBox.imageKey,
        itemBox.detail
      );
      setTimeout(() => {
        itemAlertCongrats.textCongrats.setVisible(false);
        itemAlertCongrats.itemImg.setVisible(false);
        itemAlertCongrats.detailItemText.setVisible(false);
      }, 2000);
      ItemBase.updateIsGotItem(true);
      const itemMenu = listItemMenu[index];
      addItemIntoList(_this, listItems, itemMenu);
      break;
    case TypeAction.GIFT:
      ItemBase.updateContentAlertAction(
        "Chúc mừng bạn đã nhận được 1 phần quà."
      );
      break;
    default:
      console.log(actionItem.type);
  }

  ItemBase.updateTypeUsingItem(null);
};
