/* eslint-disable no-unused-vars */
import Phaser from "phaser";
import { movePlayerWithSteps } from "../player/player";
import ItemBase from "../../storage/Items";
import { tweenAnims } from "../animation/tweenAnims";
import SmartBaseScreen from "../SmartScreenBase";
SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;
const smFontSize = SmartBaseScreen.smFontSize;

export const rollDoubleSelect1 = (
  _this,
  _chessboard,
  _player,
  _dice1,
  _dice2
) => {
  let isRolling = false;
  let steps = 0;
  _dice1.setVisible(true);
  _dice2.setVisible(true);

  _dice1.setPosition((_chessboard.x * 2) / 3, widthScreen * 530);
  _dice2.setPosition(_chessboard.x * 0.75, widthScreen * 490);

  let _steps1 = Phaser.Math.Between(1, 6);
  let _steps2 = Phaser.Math.Between(1, 6);
  if (!isRolling) {
    // Create the jump tween using the easing function
    tweenAnims(
      _this,
      _chessboard,
      _chessboard.x * 0.96,
      _chessboard.y,
      _dice1,
      () => {
        _dice1.setTexture(`dice_${_steps1}`);
      }
    );
    tweenAnims(
      _this,
      _chessboard,
      _chessboard.x * 1.1,
      _chessboard.y * 0.93,
      _dice2,
      () => {
        _dice2.setTexture(`dice_${_steps2}`);
      }
    );

    // rollDice();
    isRolling = true;
    console.log(`dice_${_steps1}`);
    console.log(`dice_${_steps2}`);
    setTimeout(() => {
      isRolling = false;
    }, 2000);

    ItemBase.decreaseCountTickets(1);
  }
  _dice1.setInteractive({ useHandCursor: true });
  _dice2.setInteractive({ useHandCursor: true });

  _dice1.on("pointerup", () => {
    steps = _steps1;
    _dice1.setScale(widthScreen * 0.7);
    console.log(steps);
    _this.input.enabled = false;
    setTimeout(() => {
      movePlayerWithSteps(_this, _chessboard, _player, steps, _dice1, _dice2);
    }, 500);
  });
  _dice2.on("pointerup", () => {
    _dice2.setScale(widthScreen * 0.7);
    steps = _steps2;
    _this.input.enabled = false;
    setTimeout(() => {
      movePlayerWithSteps(_this, _chessboard, _player, steps, _dice2, _dice1);
    }, 500);
  });

  ItemBase.updateTextSelectDice("Chọn số ô muốn di chuyển");
  const textSelectDice = _this.add.text(
    _chessboard.x * 0.85,
    _chessboard.y * 1.27,
    "Chọn số ô muốn di chuyển",
    {
      fontSize: `${smFontSize * 2.2}rem `,
      color: "#ffb366",
      stroke: "#ffb366",
      strokeThickness: widthScreen * 2,
      maxLines: 2,
      wordWrap: {
        width: _chessboard.x * 0.34,
        useAdvancedWrap: true,
      },
      align: "center",
    }
  );

  return { textSelectDice };
};
