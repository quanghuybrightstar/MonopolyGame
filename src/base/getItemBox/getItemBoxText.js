/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import SmartBaseScreen from "../SmartScreenBase";
SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;
const smFontSize = SmartBaseScreen.smFontSize;

export const getItemBoxText = (_this, _chessboard, _imageKey, _detailItem) => {
  const containerText = _this.add.container();
  containerText.setPosition(_chessboard.x * 0.87, _chessboard.y * 0.7);
  const textCongrats = _this.add.text(
    containerText.x * 1,
    containerText.y * 0.9,
    "Chúc mừng! Bạn đã nhận một vật phẩm.",
    {
      fontSize: `${smFontSize * 35.2}px `,
      stroke: "#fff",
      strokeThickness: widthScreen * 3,
      shadow: {
        offsetX: widthScreen * 3,
        offsetY: widthScreen * 3,
        color: "#0017e6",
        blur: widthScreen * 3,
        stroke: true,
        fill: true,
      },
      maxLines: 2,
      wordWrap: {
        width: containerText.x * 0.45,
        useAdvancedWrap: true,
      },
      align: "center",
    }
  );

  const itemImg = _this.add.image(
    containerText.x * 1.12,
    containerText.y * 1.28,
    _imageKey
  );
  itemImg.setDisplaySize(widthScreen * 260, widthScreen * 260);
  itemImg.setOrigin(0.2, 0.25);
  itemImg.setDepth(1);

  const detailItemText = _this.add.text(
    containerText.x,
    containerText.y * 1.8,
    _detailItem,
    {
      fontSize: `${smFontSize * 33.6}px `,
      color: "#ffb366",
      stroke: "#ffb366",
      strokeThickness: 2,
      maxLines: 2,
      wordWrap: {
        width: containerText.x * 0.4,
        useAdvancedWrap: true,
      },
      align: "center",
    }
  );
  detailItemText.setOrigin(-0.05);

  return {
    textCongrats,
    itemImg,
    detailItemText,
  };
};
