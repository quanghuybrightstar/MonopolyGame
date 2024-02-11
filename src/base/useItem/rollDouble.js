/* eslint-disable no-unused-vars */
import Phaser from "phaser";
import { movePlayerWithSteps } from "../player/player";
import ItemBase from "../../storage/Items";
import { tweenAnims } from "../animation/tweenAnims";
import SmartBaseScreen from "../SmartScreenBase";
import updateQuantityItem from "../UpdateQuantityItem";

SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;

export const rollDouble = (
  _this,
  _chessboard,
  _player,
  _dice1,
  _dice2,
  _steps
) => {
  const platformSelected = ItemBase.platformSelected;
  const detailItemTicket = ItemBase.detailItem.filter(
    (item) => item.item_category == "ticket"
  );

  const item_result = ItemBase.detailItem.filter(
    (item) => item.item_category != "ticket"
  );
  
  let isRolling = false;
  _dice1.setVisible(true);
  _dice2.setVisible(true);

  _dice1.setPosition((_chessboard.x * 2) / 3, widthScreen * 530);
  _dice2.setPosition(_chessboard.x * 0.75, widthScreen * 490);

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
        _dice1.setTexture(`dice_${_steps}`);
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
    console.log(`dice_${_steps}`);
    console.log(`dice_${_steps2}`);
    setTimeout(() => {
      isRolling = false;
    }, 2000);

    ItemBase.decreaseCountTickets(1);
    detailItemTicket[0] = {
      ...detailItemTicket[0],
      quantity_available: ItemBase.countTickets - 1,
    };
    item_result.push(detailItemTicket[0]);
    ItemBase.updateDetailItem(item_result);
    const body = {
      platform_id: platformSelected.id,
      platform_category: platformSelected.type,
      item_result: JSON.stringify(item_result),
      type: "playing",
    };
    const result = updateQuantityItem(body);
  }
  _this.input.enabled = false;
  setTimeout(() => {
    movePlayerWithSteps(
      _this,
      _chessboard,
      _player,
      _steps + _steps2,
      _dice1,
      _dice2
    );
  }, 1300);
};
