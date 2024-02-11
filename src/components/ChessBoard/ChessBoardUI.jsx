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
import SmartBaseScreen from "../../base/SmartScreenBase";
import { chessBoardLogic } from "./ChessBoardUI.logic";
import { useSelector } from "react-redux";
import APIBase from "../../base/APIBase";

SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;
const smFontSize = SmartBaseScreen.smFontSize;

const ChessBoardUI = (props) => {
  let steps = 0;
  const playerTextureKey = "player";

  const { dataChessBoard, dataItemCurrent } = chessBoardLogic(props);

  const diamondQuantity = useSelector(
    (state) => state?.quantity_diamond?.quantity_available
  );

  console.log(APIBase.access_token);

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
      resolution: 720 * 1280,
      // width: widthScreen * 1895,
      // height: widthScreen * 982,
      physics: {
        default: "arcade",
        arcade: {
          debug: false,
        },
      },
      scale: {
        mode: Phaser.Scale.FIT,
        parent: "chessboardui_container",
        width: widthScreen * 1895,
        height: widthScreen * 982,
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
          backgroundImage.setDisplaySize(widthScreen * 1895, widthScreen * 982);
          console.log(backgroundImage);
          backgroundImage.setOrigin(0);
          // CONTAINER CHESSBOARD
          graphicChessboard = this.add.container();
          graphicChessboard.x = widthScreen * 1340;
          graphicChessboard.y = widthScreen * 520;

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
            widthScreen * 525,
            "frameBoard"
          );
          chessboard.setDisplaySize(widthScreen * 1050, widthScreen * 890);
          // Create Player
          player = this.add.image(0, 0, playerTextureKey);
          createPlayer(this, player, chessboard);

          // Create dice
          dice_1 = this.add.sprite(
            (chessboard.x * 2) / 3,
            widthScreen * 530,
            "dice_1"
          );

          dice_1.setScale(widthScreen * 0.5);
          dice_1.setDisplaySize(widthScreen * 80, widthScreen * 100);
          dice_1.setInteractive();
          dice_1.setVisible(false);
          dice_1.setDepth(2);

          dice_2 = this.add.sprite(
            chessboard.x * 0.75,
            widthScreen * 490,
            "dice_1"
          );
          dice_2.setScale(widthScreen * 0.5);
          dice_2.setDisplaySize(widthScreen * 80, widthScreen * 100);
          dice_2.setInteractive();
          dice_2.setVisible(false);
          dice_2.setDepth(2);

          // Header
          const headerImg = this.add.image(
            widthScreen * 500,
            widthScreen * 60,
            "header"
          );

          headerImg.setDisplaySize(widthScreen * 533, widthScreen * 148);

          // MENU ITEMS CONTAINER
          const graphicsMenuItems = this.add.container(
            (game.config.width * 2) / 5,
            widthScreen
          );

          graphicsMenuItems.x = widthScreen * 460;
          graphicsMenuItems.y = widthScreen * 520;

          // Menu Items
          const menuItemsImg = this.add.image(
            widthScreen * 460,
            widthScreen * 520,
            "menuItems"
          );
          menuItemsImg.setDisplaySize(widthScreen * 735, widthScreen * 880);

          // Container Header Menu Item
          const containerHeaderItem = this.add.container();

          const ticketsImg = this.add.image(0, 0, "tickets");

          containerHeaderItem.x = widthScreen * 230;
          containerHeaderItem.y = (widthScreen * 580) / 3;
          ticketsImg.setPosition(containerHeaderItem.x, containerHeaderItem.y);
          ticketsImg.setDisplaySize(widthScreen * 96, widthScreen * 103);

          const labelNumberTickets = this.add.text(
            widthScreen * 294,
            widthScreen * 160,
            "Bạn còn",
            {
              fontSize: `${smFontSize * 28.8}px `,
            }
          );

          remainTickets = this.add.text(
            widthScreen * 430,
            widthScreen * 160,
            `${countTicketsSide != undefined ? countTicketsSide : 0} vé`,
            {
              fontSize: `${smFontSize * 28.8}px`,
              align: "center",
            }
          );

          // console.log(remainTickets.height / widthScreen);
          //Under line remaining tickets text
          const underline = this.add.graphics();
          underline.lineStyle(widthScreen * 2, 0xffffff);
          underline.beginPath();
          underline.moveTo(
            remainTickets.x,
            widthScreen * 165 + remainTickets.height
          );
          underline.lineTo(
            remainTickets.x + remainTickets.width,
            widthScreen * 165 + remainTickets.height
          );
          underline.closePath();
          underline.strokePath();

          const textMoreTickets = this.add.text(
            labelNumberTickets.x,
            widthScreen * 210,
            "Lấy thêm vé",
            {
              fontSize: `${smFontSize * 28.8}px`,
            }
          );

          // Diamond counter
          const diamondCountYellow = this.add.image(0, 0, "diamondYellow");
          diamondCountYellow.setPosition(
            widthScreen * 620,
            (widthScreen * 580) / 3
          );
          diamondCountYellow.setDisplaySize(widthScreen * 49, widthScreen * 47);
          diamondCountYellow.setDepth(2);
          const borderDiamond = this.add.image(
            widthScreen * 663.4,
            (widthScreen * 580) / 3,
            "borderDiamond"
          );
          borderDiamond.setDisplaySize(widthScreen * 180, widthScreen * 77);
          remainDiamonds = this.add.text(
            widthScreen * 660,
            widthScreen * 190,
            `${countDiamondsSide != undefined ? countDiamondsSide : 0}`,
            {
              fontSize: `${smFontSize * 36.8}px`,
              align: "center",
              stroke: "#fff",
              strokeThickness: widthScreen * 2,
            }
          );
          remainDiamonds.setOrigin(0.1, 0.3);
          remainDiamonds.setDepth(2);

          // CONTENT MENU ITEMS
          const labelWareHouseItems = this.add.text(
            widthScreen * 220,
            widthScreen * 306,
            "Kho vật phẩm hỗ trợ",
            {
              fontSize: `${smFontSize * 35.2}px`,
            }
          );
          containerItems = this.add.container();
          containerItems.setPosition(widthScreen * 215.6, widthScreen * 464.08);

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
          blockBg.setDisplaySize(widthScreen * 780, widthScreen * 536);

          // Roll Dice
          const rollDiceBtn = this.add.image(
            widthScreen * 1365,
            widthScreen * 915,
            "rollDice"
          );
          rollDiceBtn.setDisplaySize(widthScreen * 413, widthScreen * 225);
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

              dice_1.setScale(widthScreen * 0.5);
              dice_2.setScale(widthScreen * 0.5);
            }
          });

          // Knife next to Roll Dice
          knifeLeft = this.add.image(0, 0, "knifeLeft");
          knifeRight = this.add.image(0, 0, "knifeRight");

          knifeLeft.setPosition(widthScreen * 1075, widthScreen * 915);
          knifeRight.setPosition(widthScreen * 1655, widthScreen * 915);

          knifeLeft.setDisplaySize(widthScreen * 320, widthScreen * 103);
          knifeRight.setDisplaySize(widthScreen * 320, widthScreen * 103);

          knifeLeft.setVisible(false);
          knifeRight.setVisible(false);
        },
        update() {
          countTicketsSide = ItemBase.countTickets;
          remainTickets.setText(
            `${countTicketsSide != undefined ? countTicketsSide : 0} vé`
          );

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
                widthScreen * 215.6,
                widthScreen * 430 * value,
                item?.item_image,
                item?.item_name,
                item?.sub_type,
                item?.quantity_available,
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
          remainDiamonds?.setText(
            `${countDiamondsSide != undefined ? countDiamondsSide : 0}`
          );

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
          imgItemAlert?.setDisplaySize(widthScreen * 60, widthScreen * 60);
          imgItemAlert.setPosition(widthScreen * 1680, widthScreen * 46);

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
