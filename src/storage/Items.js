/* eslint-disable no-unused-vars */
import { TypeItem } from "../constants/Items/typeItem";
import { useSelector } from "react-redux";
import updateQuantityItem from "../base/UpdateQuantityItem";

class ItemBase {
  static countTickets;
  static countDiamonds;
  static rollDoubleItem = 0;
  static turn1CellItem = 0;
  static x2DiamondItem = 0;
  static rollDoubleSelect1Item = 0;
  static rollTurnBackItem = 0;
  static contentAlertAction = "";
  static imgKeyItem = "";
  static historyMovation = [];
  static typeUsingItem = null;
  static isUsingItem = false;
  static textSelectDice = "";
  static listItems = [];
  static typeItemGot = "";
  static isGotItem = true;
  static listItemsCurrent = [];
  static isDeletedItem = false;
  static isBtnSelected;
  static platformSelected =
    {
      id: "1648FFC89000004",
      name: "H\u00e0nh tr\u00ecnh tri\u1ec7u \u0111\u00f4",
      type: "million_dollar",
      category_id: "1648FFC89000009",
      description: null,
      status: 1,
      required_ticket: 0,
      number_ticket: 0,
    } || localStorage.getItem("platformSelected");
  static detailItem = [];

  static directionMove = {
    row: 0,
    col: 1,
  };

  static positionAfterMoved = {
    row: 5,
    col: 0,
  };

  static increaseCountTickets(count) {
    ItemBase.countTickets += count;
  }

  static decreaseCountTickets(count) {
    ItemBase.countTickets -= count;
  }

  static updateCountTickets(count) {
    ItemBase.countTickets += count;
  }

  static updateQuantityTickets(quantity) {
    ItemBase.countTickets = quantity;
  }

  static updateCountDiamonds(count) {
    ItemBase.countDiamonds += count;
  }

  static updateQuantityDiamonds(quantity) {
    ItemBase.countDiamonds = quantity;
  }

  static updateContentAlertAction(content) {
    ItemBase.contentAlertAction = content;
  }

  static updateDetailItem(detail) {
    ItemBase.detailItem = detail;
  }

  static getBaseItem(type) {
    switch (type) {
      case TypeItem.ROLL_DOUBLE:
        return ItemBase.rollDoubleItem;
      case TypeItem.TURN_1_CELL:
        return ItemBase.turn1CellItem;

      case TypeItem.X2_DIAMOND:
        return ItemBase.x2DiamondItem;

      case TypeItem.ROLL_DOUBLE_SELECT_1:
        return ItemBase.rollDoubleSelect1Item;

      case TypeItem.ROLL_TURN_BACK:
        return ItemBase.rollTurnBackItem;

      default:
        console.log(type);
    }
  }

  static updateItem(type, count) {
    const platformSelected = ItemBase.platformSelected;
    const detailItemMenu = ItemBase.detailItem.filter(
      (data) => data.sub_type == type
    );

    const item_result = ItemBase.detailItem.filter(
      (data) => data.sub_type != type
    );

    console.log(detailItemMenu[0]);

    detailItemMenu[0] = {
      ...detailItemMenu[0],
      quantity_available: ItemBase.getBaseItem(type) + count,
    };

    item_result.push(detailItemMenu[0]);

    ItemBase.updateDetailItem(item_result);

    const body = {
      platform_id: platformSelected.id,
      platform_category: platformSelected.type,
      item_result: JSON.stringify(item_result),
      type: "playing",
    };

    const result = updateQuantityItem(body);

    switch (type) {
      case TypeItem.ROLL_DOUBLE:
        ItemBase.rollDoubleItem += count;
        break;
      case TypeItem.TURN_1_CELL:
        ItemBase.turn1CellItem += count;
        break;
      case TypeItem.X2_DIAMOND:
        ItemBase.x2DiamondItem += count;
        break;
      case TypeItem.ROLL_DOUBLE_SELECT_1:
        ItemBase.rollDoubleSelect1Item += count;
        break;
      case TypeItem.ROLL_TURN_BACK:
        ItemBase.rollTurnBackItem += count;
        break;
      default:
        console.log(type);
    }
  }

  static updateQuantityItem(type, count) {
    switch (type) {
      case TypeItem.ROLL_DOUBLE:
        ItemBase.rollDoubleItem = count;
        break;
      case TypeItem.TURN_1_CELL:
        ItemBase.turn1CellItem = count;
        break;
      case TypeItem.X2_DIAMOND:
        ItemBase.x2DiamondItem = count;
        break;
      case TypeItem.ROLL_DOUBLE_SELECT_1:
        ItemBase.rollDoubleSelect1Item = count;
        break;
      case TypeItem.ROLL_TURN_BACK:
        ItemBase.rollTurnBackItem = count;
        break;
      default:
        console.log(type);
    }
  }

  static updateTypeUsingItem(type) {
    ItemBase.typeUsingItem = type;
  }

  static updateHistoryMovation(positionHistory) {
    ItemBase.historyMovation = positionHistory;
  }

  static updateDirectionMove(_direction) {
    ItemBase.directionMove = _direction;
  }

  static updateImgKeyItem(imgKey) {
    ItemBase.imgKeyItem = imgKey;
  }

  static updateIsUsingItem(boolean) {
    ItemBase.isUsingItem = boolean;
  }

  static updateTextSelectDice(text) {
    ItemBase.textSelectDice = text;
  }

  static updateListItems(item) {
    ItemBase.listItems = item;
  }

  static updateTypeItemGot(type) {
    ItemBase.typeItemGot = type;
  }

  static updateIsDeletedItem(boolean) {
    ItemBase.isDeletedItem = boolean;
  }

  static getCountItem(type) {
    switch (type) {
      case TypeItem.ROLL_DOUBLE:
        return ItemBase.rollDoubleItem;
      case TypeItem.TURN_1_CELL:
        return ItemBase.turn1CellItem;
      case TypeItem.X2_DIAMOND:
        return ItemBase.x2DiamondItem;
      case TypeItem.ROLL_DOUBLE_SELECT_1:
        return ItemBase.rollDoubleSelect1Item;
      case TypeItem.ROLL_TURN_BACK:
        return ItemBase.rollTurnBackItem;
      default:
        console.log(type);
    }
  }

  static updateIsGotItem(boolean) {
    ItemBase.isGotItem = boolean;
  }

  static updateListItemsCurrent(_listItemsCurrent) {
    ItemBase.listItemsCurrent = _listItemsCurrent;
  }

  static destroyListItemsCurrent(_listItemsCurrent) {
    if (Array.isArray(_listItemsCurrent) && _listItemsCurrent.length !== 0) {
      _listItemsCurrent?.map((item) => {
        item?.borderItem.destroy();
        item?.imageItem.destroy();
        item?.remainItemText.destroy();
        item?.itemDetail.destroy();
        item?.btnUseItem.destroy();
      });
    }
  }

  static updatePositionAfterMoved(position) {
    ItemBase.positionAfterMoved = position;
  }

  static updateIsBtnSelected(boolean) {
    ItemBase.isBtnSelected = boolean;
  }

  static resetAll() {
    ItemBase.countTickets;
    ItemBase.countDiamonds = 0;
    ItemBase.rollDoubleItem = 0;
    ItemBase.turn1CellItem = 0;
    ItemBase.x2DiamondItem = 0;
    ItemBase.rollDoubleSelect1Item = 0;
    ItemBase.rollTurnBackItem = 0;
    ItemBase.typeUsingItem = null;
    ItemBase.historyMovation = [];
    ItemBase.imgKeyItem = "";
    ItemBase.isUsingItem = false;
    ItemBase.textSelectDice = "";
    ItemBase.listItems = [];
    ItemBase.typeItemGot = "";
    ItemBase.directionMove = {
      row: 0,
      col: 1,
    };
    ItemBase.isGotItem = false;
    ItemBase.listItemsCurrent = [];
    ItemBase.isDeletedItem = null;
    ItemBase.positionAfterMoved = {
      row: 0,
      col: 1,
    };
    ItemBase.isBtnSelected = null;
    ItemBase.platformSelected = localStorage.getItem("platformSelected") || {
      id: "1648FFC89000004",
      name: "H\u00e0nh tr\u00ecnh tri\u1ec7u \u0111\u00f4",
      type: "million_dollar",
      category_id: "1648FFC89000009",
      description: null,
      status: 1,
      required_ticket: 0,
      number_ticket: 0,
    };
  }
}

export default ItemBase;
