/* eslint-disable no-unused-vars */
import {
  IMG_DICE_1,
  IMG_DICE_2,
  IMG_DICE_3,
  IMG_DICE_4,
  IMG_DICE_5,
  IMG_DICE_6,
  IMG_PLAYER,
  IMG_BLOCKS,
  IMG_BACKGROUND,
  IMG_FRAME_BOARD,
  IMG_KNIFE_LEFT,
  IMG_KNIFE_RIGHT,
  IMG_ROLL_DICE,
  IMG_BOX_CORNER,
  IMG_HEADER,
  IMG_MENU_ITEMS,
  IMG_TICKETS,
  IMG_X2_DIAMOND,
  IMG_TURN_1_CELL,
  IMG_ROLL_TURN_BACK,
  IMG_ROLL_DOUBLE,
  IMG_ROLL_DOUBLE_SELECT_1,
  IMG_DIAMOND_YELLOW,
  IMG_BORDER_ITEM,
  IMG_BORDER_DIAMOND,
  IMG_BTN_ITEM,
  IMG_BTN_SELECTED_ITEM,
  IMG_ROLL_DOUBLE_BG,
  IMG_TURN_1_CELL_BG,
  IMG_ROLL_DOUBLE_SELECT_1_BG,
  IMG_ROLL_TURN_BACK_BG,
  IMG_X2_DIAMOND_BG,
} from "../assets";

export const preloadImage = (_this) => {
  const playerTextureKey = "player";

  _this.load.image("background", IMG_BACKGROUND);

  // Dice
  _this.load.image("dice_1", IMG_DICE_1);
  _this.load.image("dice_2", IMG_DICE_2);
  _this.load.image("dice_3", IMG_DICE_3);
  _this.load.image("dice_4", IMG_DICE_4);
  _this.load.image("dice_5", IMG_DICE_5);
  _this.load.image("dice_6", IMG_DICE_6);

  // Menu Item
  _this.load.image("header", IMG_HEADER);
  _this.load.image("menuItems", IMG_MENU_ITEMS);
  _this.load.image("tickets", IMG_TICKETS);
  _this.load.image("diamondYellow", IMG_DIAMOND_YELLOW);
  _this.load.image("x2DiamondItem", IMG_X2_DIAMOND);
  _this.load.image("turn1CellItem", IMG_TURN_1_CELL);
  _this.load.image("rollTurnBackItem", IMG_ROLL_TURN_BACK);
  _this.load.image("rollDoubleItem", IMG_ROLL_DOUBLE);
  _this.load.image("rollDoubleSelect1Item", IMG_ROLL_DOUBLE_SELECT_1);
  _this.load.image("borderItem", IMG_BORDER_ITEM);
  _this.load.image("borderDiamond", IMG_BORDER_DIAMOND);
  _this.load.image("btnUseItem", IMG_BTN_ITEM);
  _this.load.image("btnSelectedItem", IMG_BTN_SELECTED_ITEM);

  _this.load.image("rollDoubleItemBg", IMG_ROLL_DOUBLE_BG);
  _this.load.image("turn1CellItemBg", IMG_TURN_1_CELL_BG);
  _this.load.image("rollDoubleSelect1ItemBg", IMG_ROLL_DOUBLE_SELECT_1_BG);
  _this.load.image("rollTurnBackItemBg", IMG_ROLL_TURN_BACK_BG);
  _this.load.image("x2DiamondItemBg", IMG_X2_DIAMOND_BG);

  // Chess Board
  _this.load.image(playerTextureKey, IMG_PLAYER);
  _this.load.image("frameBoard", IMG_FRAME_BOARD);
  _this.load.image("rollDice", IMG_ROLL_DICE);
  _this.load.image("knifeLeft", IMG_KNIFE_LEFT);
  _this.load.image("knifeRight", IMG_KNIFE_RIGHT);
  _this.load.image("boxCorner", IMG_BOX_CORNER);
  _this.load.image("blockBg", IMG_BLOCKS);
};
