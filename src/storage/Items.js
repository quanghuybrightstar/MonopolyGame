/* eslint-disable no-unused-vars */
import { TypeItem } from "../constants/Items/typeItem";

class ItemBase {
  static countTickets = 10;
  static countDiamonds = 100;
  static rollDoubleItem = 10;
  static turn1CellItem = 10;
  static x2DiamondItem = 10;
  static rollDoubleSelect1Item = 10;
  static rollTurnBackItem = 10;
  static contentAlertAction = "";
  static imgKeyItem = "";
  static historyMovation = [];
  static typeUsingItem = null;
  static isUsingItem = false;
  static textSelectDice = "";
  static listItems = [
    {
      type: TypeItem.ROLL_DOUBLE,
      imageKey: "rollDoubleItem",
      detail: "Đổ xúc sắc 2 lần liên tiếp.",
      count: ItemBase.rollDoubleItem,
    },
    {
      type: TypeItem.TURN_1_CELL,
      imageKey: "turn1CellItem",
      detail: "Lùi lại 1 ô.",
      count: ItemBase.turn1CellItem,
    },
    {
      type: TypeItem.X2_DIAMOND,
      imageKey: "x2DiamondItem",
      detail: "Nhân 2 số kim cương nhận được hoặc trừ đi.",
      count: ItemBase.x2DiamondItem,
    },
    {
      type: TypeItem.ROLL_DOUBLE_SELECT_1,
      imageKey: "rollDoubleSelect1Item",
      detail: "Đổ xúc sắc 2 lần và chọn 1.",
      count: ItemBase.rollDoubleSelect1Item,
    },
    {
      type: TypeItem.ROLL_TURN_BACK,
      imageKey: "rollTurnBackItem",
      detail: "Sẽ lùi lại thay vì tiến khi đổ xúc sắc.",
      count: ItemBase.rollTurnBackItem,
    },
  ];
  static typeItemGot = "";
  static isGotItem = true;
  static listItemsCurrent = [];
  static isDeletedItem = false;
  static isBtnSelected;

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

  static updateCountDiamonds(count) {
    ItemBase.countDiamonds += count;
  }

  static updateContentAlertAction(content) {
    ItemBase.contentAlertAction = content;
  }

  static updateItem(type, count) {
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
    ItemBase.countTickets = 10;
    ItemBase.countDiamonds = 100;
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
  }
}

export default ItemBase;
