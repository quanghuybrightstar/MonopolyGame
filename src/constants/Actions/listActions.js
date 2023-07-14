/* eslint-disable no-unused-vars */

import { TypeAction } from "./typeAction";

import {
  IMG_ITEM_BOX_ACTION,
  IMG_HOME_ACTION,
  IMG_DIAMOND_ACTION,
  IMG_TICKET_ACTION,
  IMG_GIFT_ACTION,
} from "../../assets";
const boxSize = 6;

export const listActions = [
  [
    {
      image: IMG_ITEM_BOX_ACTION,
      type: TypeAction.ITEM_BOX,
      count: null,
      row: 0,
      col: 0,
      title: null,
    },
    {
      image: IMG_DIAMOND_ACTION,
      type: TypeAction.DIAMOND,
      count: -1,
      row: 0,
      col: 1,
      title: "-1",
    },
    {
      image: IMG_DIAMOND_ACTION,
      type: TypeAction.DIAMOND,
      count: +2,
      row: 0,
      col: 2,
      title: "+2",
    },
    {
      image: IMG_TICKET_ACTION,
      type: TypeAction.TICKET,
      count: +1,
      row: 0,
      col: 3,
      title: "+1",
    },
    {
      image: IMG_DIAMOND_ACTION,
      type: TypeAction.DIAMOND,
      count: -1,
      row: 0,
      col: 4,
      title: "-1",
    },
    {
      image: IMG_GIFT_ACTION,
      type: "GIFT",
      count: null,
      row: 0,
      col: boxSize - 1,
      title: null,
    },
  ],
  [
    {
      image: IMG_DIAMOND_ACTION,
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
      image: IMG_DIAMOND_ACTION,
      type: TypeAction.DIAMOND,
      count: -2,
      row: 1,
      col: boxSize - 1,
      title: "-2",
    },
  ],
  [
    {
      image: IMG_DIAMOND_ACTION,
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
      image: IMG_DIAMOND_ACTION,
      type: TypeAction.DIAMOND,
      count: -1,
      row: 2,
      col: boxSize - 1,
      title: "-1",
    },
  ],
  [
    {
      image: IMG_DIAMOND_ACTION,
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
      image: IMG_DIAMOND_ACTION,
      type: TypeAction.DIAMOND,
      count: +4,
      row: 3,
      col: boxSize - 1,
      title: "+4",
    },
  ],
  [
    {
      image: IMG_DIAMOND_ACTION,
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
      image: IMG_DIAMOND_ACTION,
      type: TypeAction.DIAMOND,
      count: +1,
      row: 4,
      col: boxSize - 1,
      title: "+1",
    },
  ],
  [
    {
      image: IMG_HOME_ACTION,
      type: "HOME",
      count: null,
      row: boxSize - 1,
      col: 0,
      title: null,
    },
    {
      image: IMG_DIAMOND_ACTION,
      type: TypeAction.DIAMOND,
      count: +1,
      row: boxSize - 1,
      col: 1,
      title: "+1",
    },
    {
      image: IMG_TICKET_ACTION,
      type: TypeAction.TICKET,
      count: +1,
      row: boxSize - 1,
      col: 2,
      title: "+1",
    },
    {
      image: IMG_DIAMOND_ACTION,
      type: TypeAction.DIAMOND,
      count: -1,
      row: boxSize - 1,
      col: 3,
      title: "-1",
    },
    {
      image: IMG_DIAMOND_ACTION,
      type: TypeAction.DIAMOND,
      count: +2,
      row: boxSize - 1,
      col: 4,
      title: "+2",
    },
    {
      image: IMG_ITEM_BOX_ACTION,
      type: TypeAction.ITEM_BOX,
      count: null,
      row: boxSize - 1,
      col: boxSize - 1,
      title: null,
    },
  ],
];
