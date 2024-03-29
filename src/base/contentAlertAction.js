/* eslint-disable no-unused-vars */
import SmartBaseScreen from "./SmartScreenBase";
SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;
const smFontSize = SmartBaseScreen.smFontSize;

export const contentAlertItem = (
  _this,
  _graphicChessboard,
  _contentAlertAction,
  _imgKey
) => {
  // Text alert action
  const textAlertAction = _this.add.text(
    widthScreen * 1246.2,
    widthScreen * 46,
    _contentAlertAction,
    {
      fontSize: `${smFontSize * 35.2}px `,
      stroke: "#fff",
      strokeThickness: widthScreen * 3,
      shadow: {
        offsetX: widthScreen * 3,
        offsetY: widthScreen * 3,
        color: "#dd3a08",
        blur: widthScreen * 3,
        stroke: true,
        fill: true,
      },
      maxLines: 2,
      wordWrap: {
        width: widthScreen * 670,
        useAdvancedWrap: true,
      },
      align: "center",
    }
  );
  textAlertAction.setOrigin(0.25);

  // Image item alert
  const imgItemAlert = _this.add.image(
    widthScreen * 1680,
    widthScreen * 46,
    _imgKey + "_bg"
  );

  return {
    textAlertAction,
    imgItemAlert,
  };
};
