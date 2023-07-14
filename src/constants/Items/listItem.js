/* eslint-disable no-unused-vars */
import { TypeItem } from "./typeItem";
import ItemBase from "../../storage/Items";
export const listItem = [
  {
    id: "1",
    type: TypeItem.ROLL_DOUBLE,
    imageKey: "rollDoubleItemBg",
    detail: "Đổ xúc sắc 2 lần liên tiếp.",
  },
  {
    id: "2",
    type: TypeItem.TURN_1_CELL,
    imageKey: "turn1CellItemBg",
    detail: "Lùi lại 1 ô.",
  },
  {
    id: "3",
    type: TypeItem.X2_DIAMOND,
    imageKey: "x2DiamondItemBg",
    detail: "Nhân 2 số kim cương nhận được hoặc trừ đi.",
  },
  {
    id: "4",
    type: TypeItem.ROLL_DOUBLE_SELECT_1,
    imageKey: "rollDoubleSelect1ItemBg",
    detail: "Đổ xúc sắc 2 lần và chọn 1.",
  },
  {
    id: "5",
    type: TypeItem.ROLL_TURN_BACK,
    imageKey: "rollTurnBackItemBg",
    detail: "Sẽ lùi lại thay vì tiến khi đổ xúc sắc.",
  },
];

export const listItemMenu = [
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
