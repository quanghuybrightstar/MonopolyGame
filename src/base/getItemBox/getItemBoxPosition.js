/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */

import { getItemBoxText } from "./getItemBoxText";
import { TypeAction } from "../../constants/Actions/typeAction";
import ItemBase from "../../storage/Items";
import { TypeItem } from "../../constants/Items/typeItem";
import { listActions } from "../../constants/Actions/listActions";
import { listItem, listItemMenu } from "../../constants/Items/listItem";
import { addItemIntoList } from "../menuItem/addItemIntoList";
import updateQuantityItem from "../UpdateQuantityItem";

export const getItemBoxPosition = async (
  _this,
  _chessboard,
  _row,
  _col,
  _dice1,
  _dice2
) => {
  const platformSelected = ItemBase.platformSelected;
  const detailItemDiamond = ItemBase.detailItem.filter(
    (item) => item.item_category == "diamond"
  );
  const detailItemTicket = ItemBase.detailItem.filter(
    (item) => item.item_category == "ticket"
  );

  const item_result_filter_diamond = ItemBase.detailItem.filter(
    (item) => item.item_category != "diamond"
  );

  const item_result_filter_ticket = ItemBase.detailItem.filter(
    (item) => item.item_category != "ticket"
  );

  console.log(detailItemDiamond[0]);

  const actionItem = listActions[_row][_col];
  const listItems = ItemBase.listItems;
  let text = "";
  actionItem?.count >= 0
    ? (text = `Chúc mừng! Bạn được cộng`)
    : (text = `Rất tiếc! Bạn bị trừ`);

  switch (actionItem.type) {
    case TypeAction.DIAMOND:
      if (ItemBase.typeUsingItem === TypeItem.X2_DIAMOND) {
        detailItemDiamond[0] = {
          ...detailItemDiamond[0],
          quantity_available: ItemBase.countDiamonds + actionItem?.count * 2,
        };

        item_result_filter_diamond.push(detailItemDiamond[0]);

        ItemBase.updateDetailItem(item_result_filter_diamond);
        console.log(detailItemDiamond[0]);

        const body = {
          platform_id: platformSelected.id,
          platform_category: platformSelected.type,
          item_result: JSON.stringify(item_result_filter_diamond),
          type: "playing",
        };

        const result = await updateQuantityItem(body);

        if (result?.status) {
          ItemBase.updateCountDiamonds(actionItem?.count * 2);
          ItemBase.updateContentAlertAction(
            `${text} ${Math.abs(actionItem.count * 2)} kim cương.`
          );
        } else {
          ItemBase.updateContentAlertAction(`${result?.msg}`);
        }
      } else {
        detailItemDiamond[0] = {
          ...detailItemDiamond[0],
          quantity_available: ItemBase.countDiamonds + actionItem?.count,
        };
        console.log(detailItemDiamond[0]);
        item_result_filter_diamond.push(detailItemDiamond[0]);

        ItemBase.updateDetailItem(item_result_filter_diamond);
        
        const body = {
          platform_id: platformSelected.id,
          platform_category: platformSelected.type,
          item_result: JSON.stringify(item_result_filter_diamond),
          type: "playing",
        };

        const result = await updateQuantityItem(body);

        if (result?.status) {
          ItemBase.updateCountDiamonds(actionItem?.count);
          ItemBase.updateContentAlertAction(
            `${text} ${Math.abs(actionItem.count)} kim cương.`
          );
        } else {
          ItemBase.updateContentAlertAction(`${result?.msg}`);
        }
      }
      break;
    case TypeAction.TICKET:
      ItemBase.updateCountTickets(actionItem?.count);
      ItemBase.updateContentAlertAction(
        `${text} ${Math.abs(actionItem.count)} vé.`
      );
      detailItemTicket[0] = {
        ...detailItemTicket[0],
        quantity_available: ItemBase.countTickets + actionItem?.count,
      };
      item_result_filter_ticket.push(detailItemTicket[0]);
      ItemBase.updateDetailItem(item_result_filter_ticket);
      const body = {
        platform_id: platformSelected.id,
        platform_category: platformSelected.type,
        item_result: JSON.stringify(item_result_filter_ticket),
        type: "playing",
      };

      const result = await updateQuantityItem(body);

      if (result?.status) {
      } else {
        ItemBase.updateContentAlertAction(`${result?.msg}`);
      }
      break;
    case TypeAction.HOME:
      break;
    case TypeAction.ITEM_BOX:
      const index = Math.floor(Math.random() * (4 - 0 + 1) + 0);
      console.log(index);
      const itemBox = listItem[index];
      console.log(itemBox);

      ItemBase.updateTypeItemGot(itemBox.sub_type);
      ItemBase.updateItem(itemBox.sub_type, 1);
      _dice1.setVisible(false);
      _dice2?.setVisible(false);
      let itemAlertCongrats = getItemBoxText(
        _this,
        _chessboard,
        itemBox.sub_type + "_bg",
        itemBox.item_name
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
