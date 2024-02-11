/* eslint-disable no-unused-vars */
import { TypeItem } from "../constants/Items/typeItem";

export const preloadImage = (_this) => {
  const playerTextureKey = "player";

  _this.load.image("background", "assets/imgs/background.png");

  // Dice
  _this.load.image("dice_1", "assets/imgs/dice1.png");
  _this.load.image("dice_2", "assets/imgs/dice2.png");
  _this.load.image("dice_3", "assets/imgs/dice3.png");
  _this.load.image("dice_4", "assets/imgs/dice4.png");
  _this.load.image("dice_5", "assets/imgs/dice5.png");
  _this.load.image("dice_6", "assets/imgs/dice6.png");

  // // Menu Item
  _this.load.image("header", "assets/imgs/header.png");
  _this.load.image("menuItems", "assets/imgs/backgroundLeft.png");
  _this.load.image("tickets", "assets/imgs/tickets.png");
  _this.load.image("diamondYellow", "assets/imgs/diamondYellow.png");
  _this.load.image(TypeItem.X2_DIAMOND, "assets/imgs/x2Diamond.png");
  _this.load.image(TypeItem.TURN_1_CELL, "assets/imgs/turnBack.png");
  _this.load.image(TypeItem.ROLL_TURN_BACK, "assets/imgs/rollTurnBack.png");
  _this.load.image(TypeItem.ROLL_DOUBLE, "assets/imgs/roll2Dices.png");
  _this.load.image(
    TypeItem.ROLL_DOUBLE_SELECT_1,
    "assets/imgs/roll2DicesSelect1.png"
  );
  _this.load.image("borderItem", "assets/imgs/borderItem.png");
  _this.load.image("borderDiamond", "assets/imgs/borderDiamond.png");
  _this.load.image("btnUseItem", "assets/imgs/btnUseItem.png");
  _this.load.image("btnSelectedItem", "assets/imgs/selectedItem.png");

  _this.load.image(
    TypeItem.ROLL_DOUBLE + "_bg",
    "assets/imgs/rollDoubleBg.png"
  );
  _this.load.image(TypeItem.TURN_1_CELL + "_bg", "assets/imgs/turnBackBg.png");
  _this.load.image(
    TypeItem.ROLL_DOUBLE_SELECT_1 + "_bg",
    "assets/imgs/rollDoubleSelect1Bg.png"
  );
  _this.load.image(
    TypeItem.ROLL_TURN_BACK + "_bg",
    "assets/imgs/backgroundLeft.png"
  );
  _this.load.image(TypeItem.X2_DIAMOND + "_bg", "assets/imgs/x2DiamondBg.png");

  // // Chess Board
  _this.load.image(playerTextureKey, "assets/imgs/player.png");
  _this.load.image("frameBoard", "assets/imgs/frameBoard.png");
  _this.load.image("rollDice", "assets/imgs/rollDice.png");
  _this.load.image("knifeLeft", "assets/imgs/knifeLeft.png");
  _this.load.image("knifeRight", "assets/imgs/knifeRight.png");
  _this.load.image("boxCorner", "assets/imgs/boxCorner.png");
  _this.load.image("blockBg", "assets/imgs/block.png");
};
