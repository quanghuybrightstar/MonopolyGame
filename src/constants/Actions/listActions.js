/* eslint-disable no-unused-vars */

import { TypeAction } from "./typeAction";

import { IMG_ITEM_BOX_ACTION } from "../../../public/assets";
import { IMG_HOME_ACTION } from "../../../public/assets";
import { IMG_DIAMOND_ACTION } from "../../../public/assets";
import { IMG_GIFT_ACTION } from "../../../public/assets";

const boxSize = 6;

export const listActions = [
  [
    {
      image: "assets/imgs/itemBox.png",
      type: TypeAction.ITEM_BOX,
      count: null,
      row: 0,
      col: 0,
      title: null,
    },
    {
      image: "assets/imgs/diamondGreen.png",
      type: TypeAction.DIAMOND,
      count: -1,
      row: 0,
      col: 1,
      title: "-1",
    },
    {
      image: "assets/imgs/diamondGreen.png",
      type: TypeAction.DIAMOND,
      count: +2,
      row: 0,
      col: 2,
      title: "+2",
    },
    {
      image: "assets/imgs/ticketAction.png",
      type: TypeAction.TICKET,
      count: +1,
      row: 0,
      col: 3,
      title: "+1",
    },
    {
      image: "assets/imgs/diamondGreen.png",
      type: TypeAction.DIAMOND,
      count: -1,
      row: 0,
      col: 4,
      title: "-1",
    },
    {
      image: "assets/imgs/gift.png",
      type: "GIFT",
      count: null,
      row: 0,
      col: boxSize - 1,
      title: null,
    },
  ],
  [
    {
      image: "assets/imgs/diamondGreen.png",
      type: TypeAction.DIAMOND,
      count: +2,
      row: 1,
      col: 0,
      title: "+2",
    },
    {},
    {},
    {},

    {},
    {
      image: "assets/imgs/diamondGreen.png",
      type: TypeAction.DIAMOND,
      count: -2,
      row: 1,
      col: boxSize - 1,
      title: "-2",
    },
  ],
  [
    {
      image: "assets/imgs/diamondGreen.png",
      type: TypeAction.DIAMOND,
      count: -1,
      row: 2,
      col: 0,
      title: "-1",
    },
    {},
    {},
    {},

    {},
    {
      image: "assets/imgs/diamondGreen.png",
      type: TypeAction.DIAMOND,
      count: -1,
      row: 2,
      col: boxSize - 1,
      title: "-1",
    },
  ],
  [
    {
      image: "assets/imgs/diamondGreen.png",
      type: TypeAction.DIAMOND,
      count: +5,
      row: 3,
      col: 0,
      title: "+5",
    },
    {},
    {},
    {},

    {},
    {
      image: "assets/imgs/diamondGreen.png",
      type: TypeAction.DIAMOND,
      count: +4,
      row: 3,
      col: boxSize - 1,
      title: "+4",
    },
  ],
  [
    {
      image: "assets/imgs/diamondGreen.png",
      type: TypeAction.DIAMOND,
      count: -3,
      row: 4,
      col: 0,
      title: "-3",
    },
    {},
    {},
    {},

    {},
    {
      image: "assets/imgs/diamondGreen.png",
      type: TypeAction.DIAMOND,
      count: +1,
      row: 4,
      col: boxSize - 1,
      title: "+1",
    },
  ],
  [
    {
      image: "assets/imgs/home.png",
      type: "HOME",
      count: null,
      row: boxSize - 1,
      col: 0,
      title: null,
    },
    {
      image: "assets/imgs/diamondGreen.png",
      type: TypeAction.DIAMOND,
      count: +1,
      row: boxSize - 1,
      col: 1,
      title: "+1",
    },
    {
      image: "assets/imgs/ticketAction.png",
      type: TypeAction.TICKET,
      count: +1,
      row: boxSize - 1,
      col: 2,
      title: "+1",
    },
    {
      image: "assets/imgs/diamondGreen.png",
      type: TypeAction.DIAMOND,
      count: -1,
      row: boxSize - 1,
      col: 3,
      title: "-1",
    },
    {
      image: "assets/imgs/diamondGreen.png",
      type: TypeAction.DIAMOND,
      count: +2,
      row: boxSize - 1,
      col: 4,
      title: "+2",
    },
    {
      image: "assets/imgs/itemBox.png",
      type: TypeAction.ITEM_BOX,
      count: null,
      row: boxSize - 1,
      col: boxSize - 1,
      title: null,
    },
  ],
];
