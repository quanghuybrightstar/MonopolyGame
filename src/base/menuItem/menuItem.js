/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import { TypeItem } from "../../constants/Items/typeItem";
import ItemBase from "../../storage/Items";
import { turn1Cell } from "../useItem";
import { deleteItem } from "./deleteItem";
import SmartBaseScreen from "../SmartScreenBase";
import API from "../../apis/APIConstants";
SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;
const smFontSize = SmartBaseScreen.smFontSize;

export const createItem = (
  _this,
  _containerX,
  _containerY,
  _keyImage,
  _itemDetail,
  _type,
  _count,
  _chessboard,
  _player,
  _dice1,
  _dice2
) => {
  const borderItem = _this?.add?.image(
    _containerX * 2.08,
    _containerY * 0.96,
    "borderItem"
  );
  borderItem.setDisplaySize(widthScreen * 583, widthScreen * 84);

  const imageItem = _this.add.image(
    _containerX * 0.92,
    _containerY * 0.96,
    _type
  );
  imageItem.setDisplaySize(widthScreen * 48, widthScreen * 44);

  let remainItemText = _this.add.text(
    _containerX * 1.19,
    _containerY * 0.96,
    `X${ItemBase.getCountItem(_type)}`,
    {
      fontSize: `${smFontSize * 25.6}px `,
      color: "#ffb366",
    }
  );
  remainItemText.setOrigin(0, 0.5);

  let itemDetail = _this.add.text(
    _containerX * 1.6,
    _containerY * 0.95,
    _itemDetail,
    {
      fontSize: `${smFontSize * 20.8}px `,
      maxLines: 2,
      wordWrap: {
        width: widthScreen * 250,
        useAdvancedWrap: true,
      },
    }
  );
  itemDetail.setOrigin(0, 0.5);

  let btnUseItem = _this.add.image(
    _containerX * 3.1,
    _containerY * 0.95,
    "btnUseItem"
  );
  btnUseItem.setDisplaySize(widthScreen * 132, widthScreen * 49);

  btnUseItem.setInteractive({ useHandCursor: true });
  btnUseItem.on("pointerup", () => {
    console.log("selected item");
    if (ItemBase.countTickets <= 0) {
      ItemBase.updateContentAlertAction(
        "Bạn đã sử dụng hết vé! Bạn có thể lấy thêm vé hoặc chơi lại."
      );
      _this.input.enabled = false;
      ItemBase.resetAll();
      _this.scene.restart();
    } else if (ItemBase.getCountItem(_type) <= 0) {
      ItemBase.updateContentAlertAction(
        "Rất tiếc! Bạn đã hết lượt sử dụng vật phẩm này."
      );
    } else {
      if (!ItemBase.typeUsingItem) {
        ItemBase.updateIsBtnSelected(true);
        ItemBase.updateTypeUsingItem(_type);
        ItemBase.updateContentAlertAction("Bạn đã sử dụng vật phẩm ");
        switch (_type) {
          case TypeItem.ROLL_DOUBLE:
            ItemBase.updateImgKeyItem(TypeItem.ROLL_DOUBLE + "_bg");
            ItemBase.updateItem(_type, -1);
            ItemBase.updateIsUsingItem(true);
            deleteItem(ItemBase.listItems, _type);
            break;
          case TypeItem.TURN_1_CELL:
            turn1Cell(_this, _chessboard, _player, _dice1, _dice2);
            break;
          case TypeItem.X2_DIAMOND:
            ItemBase.updateImgKeyItem(TypeItem.X2_DIAMOND + "_bg");
            ItemBase.updateItem(_type, -1);
            ItemBase.updateIsUsingItem(true);
            deleteItem(ItemBase.listItems, _type);
            break;
          case TypeItem.ROLL_DOUBLE_SELECT_1:
            ItemBase.updateImgKeyItem(TypeItem.ROLL_DOUBLE_SELECT_1 + "_bg");
            ItemBase.updateItem(_type, -1);
            ItemBase.updateIsUsingItem(true);
            deleteItem(ItemBase.listItems, _type);
            break;
          case TypeItem.ROLL_TURN_BACK:
            const historyMovation = ItemBase.historyMovation;
            console.log(historyMovation);
            const historyMovationLength = historyMovation.length;

            let positionAfterMoved = ItemBase.positionAfterMoved;
            if (
              !Array.isArray(historyMovation) ||
              historyMovationLength == 0 ||
              (positionAfterMoved.row === 5 && positionAfterMoved.col === 0)
            ) {
              ItemBase.updateTypeUsingItem(null);
              ItemBase.updateContentAlertAction(
                "Bạn đang ở nơi bắt đầu, không thể quay lại tiếp."
              );
              ItemBase.updateIsUsingItem(false);
              ItemBase.updateIsBtnSelected(false);
            } else {
              ItemBase.updateTypeUsingItem(_type);
              ItemBase.updateImgKeyItem(TypeItem.ROLL_TURN_BACK + "_bg");
              ItemBase.updateItem(_type, -1);
              ItemBase.updateIsUsingItem(true);
              deleteItem(ItemBase.listItems, _type);
            }
            break;
          default:
            console.log(_type);
        }
      }
    }
  });
  btnUseItem.alpha = 0.95;
  ItemBase.updateIsGotItem(false);
  ItemBase.updateIsUsingItem(false);
  if (ItemBase.isBtnSelected) {
    btnUseItem.setVisible(false);
  } else {
    btnUseItem.setVisible(true);
  }
  return {
    remainItemText,
    btnUseItem,
    borderItem,
    imageItem,
    itemDetail,
    _type,
  };
};
