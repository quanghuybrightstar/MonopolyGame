/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

export const getItemBoxText = (_this, _chessboard, _imageKey, _detailItem) => {
  const containerText = _this.add.container();
  containerText.setPosition(_chessboard.x * 0.85, _chessboard.y * 0.7);
  const textCongrats = _this.add.text(
    containerText.x * 0.96,
    containerText.y * 0.9,
    "Chúc mừng! Bạn đã nhận một vật phẩm.",
    {
      fontSize: "30px",
      stroke: "#fff",
      strokeThickness: 3,
      shadow: {
        offsetX: 3,
        offsetY: 3,
        color: "#0017e6",
        blur: 3,
        stroke: true,
        fill: true,
      },
      maxLines: 2,
      wordWrap: {
        width: containerText.x * 0.5,
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
  itemImg.setDisplaySize(260, 260);
  itemImg.setOrigin(0.2, 0.25);
  itemImg.setDepth(1);

  const detailItemText = _this.add.text(
    containerText.x,
    containerText.y * 1.8,
    _detailItem,
    {
      fontSize: "30px",
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
