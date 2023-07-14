/* eslint-disable no-unused-vars */

export const contentAlertItem = (
  _this,
  _graphicChessboard,
  _contentAlertAction,
  _imgKey
) => {
  // Text alert action
  const textAlertAction = _this.add.text(
    _graphicChessboard.x * 0.93,
    _graphicChessboard.y * 0.1,
    _contentAlertAction,
    {
      fontSize: "30px",
      stroke: "#fff",
      strokeThickness: 3,
      shadow: {
        offsetX: 3,
        offsetY: 3,
        color: "#dd3a08",
        blur: 3,
        stroke: true,
        fill: true,
      },
      maxLines: 2,
      wordWrap: {
        width: _graphicChessboard.x * 0.5,
        useAdvancedWrap: true,
      },
      align: "center",
    }
  );
  textAlertAction.setOrigin(0.25);

  // Image item alert
  const imgItemAlert = _this.add.image(
    _graphicChessboard.x * 0.93 + textAlertAction.width * 0.9,
    _graphicChessboard.y * 0.1,
    _imgKey
  );

  return {
    textAlertAction,
    imgItemAlert,
  };
};
