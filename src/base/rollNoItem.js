/* eslint-disable no-unused-vars */
import Phaser from "phaser";
import { movePlayerWithSteps } from "./player/player";
import ItemBase from "../storage/Items";
import { tweenAnims } from "./animation/tweenAnims";
import SmartBaseScreen from "./SmartScreenBase";
SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;

export const rollNoItem = (_this, _chessboard, _player, _dice1, _steps) => {
  let isRolling = false;
  _dice1.setVisible(true);
  _dice1.setPosition((_chessboard.x * 2) / 3, widthScreen * 530);
  if (!isRolling) {
    // Create the jump tween using the easing function
    tweenAnims(_this, _chessboard, _chessboard.x, _chessboard.y, _dice1, () => {
      _dice1.setTexture(`dice_${_steps}`);
    });

    // rollDice();
    isRolling = true;
    console.log(`dice_${_steps}`);
    setTimeout(() => {
      isRolling = false;
    }, 2000);

    ItemBase.decreaseCountTickets(1);
  }
  _this.input.enabled = false;
  setTimeout(() => {
    movePlayerWithSteps(_this, _chessboard, _player, _steps, _dice1);
  }, 1300);
};
