/* eslint-disable no-unused-vars */
import { TypeItem } from "./typeItem";
import ItemBase from "../../storage/Items";
export const listItem = [
  {
    id: "1",
    sub_type: TypeItem.ROLL_DOUBLE,
    item_image: "rollDoubleItemBg",
    item_name: "Đổ xúc sắc 2 lần liên tiếp.",
  },
  {
    id: "2",
    sub_type: TypeItem.TURN_1_CELL,
    item_image: "turn1CellItemBg",
    item_name: "Lùi lại 1 ô.",
  },
  {
    id: "3",
    sub_type: TypeItem.X2_DIAMOND,
    item_image: "x2DiamondItemBg",
    item_name: "Nhân 2 số kim cương nhận được hoặc trừ đi.",
  },
  {
    id: "4",
    sub_type: TypeItem.ROLL_DOUBLE_SELECT_1,
    item_image: "rollDoubleSelect1ItemBg",
    item_name: "Đổ xúc sắc 2 lần và chọn 1.",
  },
  {
    id: "5",
    sub_type: TypeItem.ROLL_TURN_BACK,
    item_image: "rollTurnBackItemBg",
    item_name: "Sẽ lùi lại thay vì tiến khi đổ xúc sắc.",
  },
];

export const listItemMenu = [
  {
    sub_type: TypeItem.ROLL_DOUBLE,
    item_image: "rollDoubleItem",
    item_name: "Đổ xúc sắc 2 lần liên tiếp.",
    quantity_available: ItemBase.rollDoubleItem,
  },
  {
    sub_type: TypeItem.TURN_1_CELL,
    item_image: "turn1CellItem",
    item_name: "Lùi lại 1 ô.",
    count: ItemBase.turn1CellItem,
  },
  {
    sub_type: TypeItem.X2_DIAMOND,
    item_image: "x2DiamondItem",
    item_name: "Nhân 2 số kim cương nhận được hoặc trừ đi.",
    count: ItemBase.x2DiamondItem,
  },
  {
    sub_type: TypeItem.ROLL_DOUBLE_SELECT_1,
    item_image: "rollDoubleSelect1Item",
    item_name: "Đổ xúc sắc 2 lần và chọn 1.",
    count: ItemBase.rollDoubleSelect1Item,
  },
  {
    sub_type: TypeItem.ROLL_TURN_BACK,
    item_image: "rollTurnBackItem",
    item_name: "Sẽ lùi lại thay vì tiến khi đổ xúc sắc.",
    count: ItemBase.rollTurnBackItem,
  },
];
