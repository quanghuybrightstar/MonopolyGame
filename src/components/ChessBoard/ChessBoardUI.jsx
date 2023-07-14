/* eslint-disable no-case-declarations */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useLayoutEffect, useEffect, useState } from "react";
import Phaser from "phaser";
import { createAnimation } from "../../base/animation/animation";
import "./ChessBoard.css";
import ItemBase from "../../storage/Items";
import { createPlayer } from "../../base/player/player";
import { preloadImage } from "../../base/preloadImage";
import { createItem } from "../../base/menuItem/menuItem";
import { boxActions } from "../../base/boxActions";
import { TypeItem } from "../../constants/Items/typeItem";
import { rollNoItem } from "../../base/rollNoItem";
import {
  rollDouble,
  x2Diamond,
  rollDoubleSelect1,
  turn1Cell,
  rollTurnBack,
} from "../../base/useItem";
import { Constants } from "../../constants/Constants";
import { contentAlertItem } from "../../base/contentAlertAction";

const ChessBoardUI = () => {
  let steps = 0;
  const playerTextureKey = "player";

  useEffect(() => {
    let graphicChessboard;
    let player;
    let countTicketsSide;
    let remainTickets;
    let dice_1;
    let dice_2;
    let typeItemUsing;
    let knifeLeft;
    let knifeRight;

    let remainDiamonds;
    let countDiamondsSide;

    let textAlertAction;
    let contentAlertAction;

    let imgItemAlert;
    let imgKeyItem;

    let textContainerSelectDice;
    let textSelectDice;

    let listItems;
    let listItemsLength;

    let chessboard;
    let containerItems;

    let isGotItem;
    let isUsingItem;
    let isDeletedItem;
    let listItemsCurrent;

    const config = {
      type: Phaser.AUTO,
      parent: "chessboardui_container",
      width: 1900,
      height: 1100,
      physics: {
        default: "arcade",
        arcade: {
          debug: false,
        },
      },
      input: {
        activePointers: 1,
      },
      scene: {
        preload() {
          preloadImage(this);
        },
        create() {
          countTicketsSide = ItemBase.countTickets;
          countDiamondsSide = ItemBase.countDiamonds;
          contentAlertAction = ItemBase.contentAlertAction;
          typeItemUsing = ItemBase.typeUsingItem;
          imgKeyItem = ItemBase.imgKeyItem;
          textSelectDice = ItemBase.textSelectDice;
          listItems = ItemBase.listItems;
          listItemsLength = listItems.length;
          isGotItem = ItemBase.isGotItem;
          listItemsCurrent = ItemBase.listItemsCurrent;
          isUsingItem = ItemBase.isUsingItem;
          isDeletedItem = ItemBase.isDeletedItem;
          // Animation
          createAnimation(this);

          // Background Image
          const backgroundImage = this.add.sprite(0, 0, "background");
          let positionBackgroundX = game.config.width - backgroundImage.width;
          let positionBackgroundY = game.config.height - backgroundImage.height;
          backgroundImage.setPosition(
            positionBackgroundX + 20,
            positionBackgroundY + 30
          );
          backgroundImage.setOrigin(0);
          // CONTAINER CHESSBOARD
          graphicChessboard = this.add.container(
            (game.config.width * 3) / 5,
            game.config.height
          );
          graphicChessboard.x = (game.config.width * 3) / 5 + 200;
          graphicChessboard.y = (game.config.height * 3) / 5 - 100;

          // Content alert
          const contentAlert = contentAlertItem(
            this,
            graphicChessboard,
            contentAlertAction,
            imgKeyItem
          );

          textAlertAction = contentAlert.textAlertAction;
          imgItemAlert = contentAlert.imgItemAlert;
          // Chessboard
          chessboard = this.add.image(
            graphicChessboard.x,
            graphicChessboard.y + 30,
            "frameBoard"
          );
          chessboard.setDisplaySize(
            Constants.rectangleWidth * Constants.boxSize + 200,
            Constants.rectangleHeight * Constants.boxSize + 250
          );
          // Create Player
          player = this.add.image(0, 0, playerTextureKey);
          createPlayer(this, player, chessboard);

          // Create dice
          dice_1 = this.add.sprite(
            (chessboard.x * 2) / 3,
            chessboard.y - 60,
            "dice_1"
          );

          dice_1.setScale(0.5);
          dice_1.setDisplaySize(150, 178);
          dice_1.setInteractive();
          dice_1.setVisible(false);
          dice_1.setDepth(2);

          dice_2 = this.add.sprite(
            chessboard.x * 0.75,
            chessboard.y - 100,
            "dice_1"
          );
          dice_2.setScale(0.5);
          dice_2.setDisplaySize(150, 178);
          dice_2.setInteractive();
          dice_2.setVisible(false);
          dice_2.setDepth(2);

          // Header
          const headerImg = this.add.image(
            (game.config.width * 1) / 5 + 120,
            (game.config.height * 1) / 5 - 120,
            "header"
          );

          // MENU ITEMS CONTAINER
          const graphicsMenuItems = this.add.container(
            (game.config.width * 2) / 5,
            game.config.height
          );

          graphicsMenuItems.x = (game.config.width * 1) / 5 + 80;
          graphicsMenuItems.y = (game.config.height * 2) / 5 + 120;

          // Menu Items
          const menuItemsImg = this.add.image(
            graphicsMenuItems.x,
            graphicsMenuItems.y,
            "menuItems"
          );
          menuItemsImg.setDisplaySize(
            (game.config.width * 2) / 5 - 25,
            (game.config.height * 4) / 5
          );

          // Container Header Menu Item
          const containerHeaderItem = this.add.container();

          const ticketsImg = this.add.image(0, 0, "tickets");

          containerHeaderItem.x = menuItemsImg.x / 2;
          containerHeaderItem.y = menuItemsImg.y / 2 - ticketsImg.height / 3;
          ticketsImg.setPosition(containerHeaderItem.x, containerHeaderItem.y);

          const labelNumberTickets = this.add.text(
            ticketsImg.x + (ticketsImg.width * 2) / 3,
            ticketsImg.y - ticketsImg.height / 4,
            "Bạn còn ",
            {
              fontSize: "26px",
            }
          );

          remainTickets = this.add.text(
            labelNumberTickets.x + 125,
            labelNumberTickets.y,
            `${countTicketsSide} vé`,
            {
              fontSize: "28px",
              align: "center",
            }
          );
          //Under line remaining tickets text
          const underline = this.add.graphics();
          underline.lineStyle(2, 0xffffff);
          underline.beginPath();
          underline.moveTo(
            remainTickets.x,
            remainTickets.y + remainTickets.height
          );
          underline.lineTo(
            remainTickets.x + remainTickets.width,
            remainTickets.y + remainTickets.height
          );
          underline.closePath();
          underline.strokePath();

          const textMoreTickets = this.add.text(
            labelNumberTickets.x,
            labelNumberTickets.y + 40,
            "Lấy thêm vé",
            {
              fontSize: "26px",
            }
          );

          // Diamond counter
          const diamondCountYellow = this.add.image(0, 0, "diamondYellow");
          diamondCountYellow.setPosition(
            containerHeaderItem.x + (menuItemsImg.width * 2) / 3 - 100,
            containerHeaderItem.y
          );
          diamondCountYellow.setDepth(2);
          const borderDiamond = this.add.image(
            diamondCountYellow.x * 1.07,
            diamondCountYellow.y,
            "borderDiamond"
          );
          remainDiamonds = this.add.text(
            containerHeaderItem.x +
              (menuItemsImg.width * 2) / 3 -
              diamondCountYellow.width,
            containerHeaderItem.y * 0.99,
            `${countDiamondsSide}`,
            {
              fontSize: "32px",
              align: "center",
              stroke: "#fff",
              strokeThickness: 2,
            }
          );
          remainDiamonds.setOrigin(0.1, 0.3);
          remainDiamonds.setDepth(2);

          // CONTENT MENU ITEMS
          const labelWareHouseItems = this.add.text(
            containerHeaderItem.x,
            containerHeaderItem.y * 1.45,
            "Kho vật phẩm hỗ trợ",
            {
              fontSize: "26px",
            }
          );
          containerItems = this.add.container();
          containerItems.setPosition(
            labelWareHouseItems.x * 0.98,
            labelWareHouseItems.y * 1.3
          );
          // LIST ITEM

          // Render Box
          for (let row = 0; row < Constants.boxSize; row++) {
            for (let col = 0; col < Constants.boxSize; col++) {
              const x = col * Constants.rectangleWidth;
              const y = row * Constants.rectangleHeight;
              boxActions(this, x, y, row, col, chessboard);
            }
          }

          // Block
          const blockBg = this.add.image(chessboard.x, chessboard.y, "blockBg");
          blockBg.alpha = 0.3;

          // Roll Dice
          const rollDiceBtn = this.add.image(
            chessboard.x + 25,
            chessboard.y * 2 - 175,
            "rollDice"
          );
          rollDiceBtn.setInteractive({ useHandCursor: true });
          rollDiceBtn.on("pointerup", () => {
            if (countTicketsSide <= 0) {
              ItemBase.updateContentAlertAction(
                "Bạn đã sử dụng hết vé! Bạn có thể lấy thêm vé hoặc chơi lại."
              );
              this.input.enabled = false;
              ItemBase.resetAll();
              this.scene.restart();
            } else {
              ItemBase.updateContentAlertAction("");
              ItemBase.updateImgKeyItem("");
              ItemBase.updateTypeItemGot("");
              steps = Phaser.Math.Between(1, 6);
              switch (typeItemUsing) {
                case TypeItem.ROLL_DOUBLE:
                  rollDouble(this, chessboard, player, dice_1, dice_2, steps);
                  break;
                case TypeItem.TURN_1_CELL:
                  // Turn 1 cell handle when using item not roll dice
                  dice_2.setVisible(false);
                  dice_1.setVisible(false);
                  break;
                case TypeItem.X2_DIAMOND:
                  dice_2.setVisible(false);
                  rollNoItem(this, chessboard, player, dice_1, steps);
                  break;
                case TypeItem.ROLL_DOUBLE_SELECT_1:
                  const textRollDoubleSelect1 = rollDoubleSelect1(
                    this,
                    chessboard,
                    player,
                    dice_1,
                    dice_2
                  );
                  textContainerSelectDice =
                    textRollDoubleSelect1.textSelectDice;
                  break;
                case TypeItem.ROLL_TURN_BACK:
                  dice_2.setVisible(false);
                  rollTurnBack(this, chessboard, player, dice_1, steps);
                  break;
                default:
                  dice_2.setVisible(false);
                  rollNoItem(this, chessboard, player, dice_1, steps);
              }

              dice_1.setScale(0.5);
              dice_2.setScale(0.5);
            }
          });

          // Knife next to Roll Dice
          knifeLeft = this.add.image(0, 0, "knifeLeft");
          knifeRight = this.add.image(0, 0, "knifeRight");

          knifeLeft.setPosition(
            rollDiceBtn.x - knifeLeft.width + 30,
            rollDiceBtn.y
          );
          knifeRight.setPosition(
            rollDiceBtn.x + knifeLeft.width - 30,
            rollDiceBtn.y
          );
          knifeLeft.setVisible(false);
          knifeRight.setVisible(false);
        },
        update() {
          countTicketsSide = ItemBase.countTickets;
          remainTickets.setText(`${countTicketsSide} vé`);

          //update list Items
          listItems = ItemBase.listItems;
          listItemsLength = listItems.length;

          // List item
          let value = 1;
          listItemsCurrent = ItemBase.listItemsCurrent;
          isGotItem = ItemBase.isGotItem;
          isUsingItem = ItemBase.isUsingItem;
          isDeletedItem = ItemBase.isDeletedItem;
          if (
            isGotItem ||
            isUsingItem ||
            isDeletedItem ||
            ItemBase.isBtnSelected === false
          ) {
            ItemBase.destroyListItemsCurrent(listItemsCurrent);
            for (let index = 0; index < listItemsLength; index++) {
              const item = listItems[index];
              const itemCreate = createItem(
                this,
                containerItems.x,
                containerItems.y * value,
                item.imageKey,
                item.detail,
                item.type,
                chessboard,
                player,
                dice_1,
                dice_2
              );
              listItemsCurrent.push(itemCreate);
              value += 0.25;
            }
          }
          ItemBase.updateIsBtnSelected(null);
          ItemBase.updateListItemsCurrent(listItemsCurrent);

          // update diamonds
          countDiamondsSide = ItemBase.countDiamonds;
          remainDiamonds?.setText(`${countDiamondsSide}`);

          // update content alert action
          contentAlertAction = ItemBase.contentAlertAction;
          textAlertAction?.setText(contentAlertAction);

          // update type using item
          typeItemUsing = ItemBase.typeUsingItem;

          // update graphics knife behind roll dice
          typeItemUsing != null
            ? knifeLeft.setVisible(true) && knifeRight.setVisible(true)
            : knifeLeft.setVisible(false) && knifeRight.setVisible(false);

          // update key item
          imgKeyItem = ItemBase.imgKeyItem;
          imgKeyItem === ""
            ? imgItemAlert.setVisible(false)
            : imgItemAlert.setVisible(true);
          imgItemAlert?.setTexture(imgKeyItem);
          imgItemAlert?.setDisplaySize(60, 60);
          imgItemAlert.setPosition(
            graphicChessboard.x * 0.93 + textAlertAction.width * 0.9,
            graphicChessboard.y * 0.1
          );

          // update text select dice
          textSelectDice = ItemBase.textSelectDice;
          textContainerSelectDice?.setText(textSelectDice);
        },
      },
    };
    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="chessboardui_container" />;
};

export default ChessBoardUI;
