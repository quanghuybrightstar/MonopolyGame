/* eslint-disable no-unused-vars */
import { listActions } from "../constants/Actions/listActions";
import { IMG_BOX_CORNER, IMG_SIDE_EFFECT, IMG_BOX } from "../assets";
import { Constants } from "../constants/Constants";
import SmartBaseScreen from "./SmartScreenBase";
SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;
const smFontSize = SmartBaseScreen.smFontSize;

export const boxActions = (_this, _x, _y, _row, _col, _chessboard) => {
  const actionItem = listActions[_row][_col];
  if (
    _row === 0 ||
    _row === Constants.boxSize - 1 ||
    _col === 0 ||
    _col === Constants.boxSize - 1
  ) {
    if (
      (_row === 0 && _col === 0) ||
      (_row === Constants.boxSize - 1 && _col === Constants.boxSize - 1) ||
      (_row == Constants.boxSize - 1 && _col === 0) ||
      (_row === 0 && _col === Constants.boxSize - 1)
    ) {
      _this.load.image(`boxCorner-${_row}-${_col}`, IMG_BOX_CORNER);
      _this.load.image(`action-${_row}-${_col}`, actionItem.image);
      _this.load.image(`sideEffect-${_row}-${_col}`, IMG_SIDE_EFFECT);

      _this.load.once("complete", () => {
        // Box Corner
        const boxCorner = _this.add.image(
          _x +
            widthScreen *
              ((Constants.rectangleWidth * 3) / 2 / widthScreen + 790),
          _y +
            widthScreen *
              ((Constants.rectangleHeight * 3) / 2 / widthScreen + 105),
          `boxCorner-${_row}-${_col}`
        );
        boxCorner.setDisplaySize(
          Constants.rectangleWidth * 1.83,
          Constants.rectangleHeight * 1.83
        );
        boxCorner.setOrigin(0.5, 0.5);
        boxCorner.alpha = 0.65;

        // Side Effect
        const sideEffect = _this.add.image(
          _x +
            widthScreen *
              ((Constants.rectangleWidth * 3) / 2 / widthScreen + 790),
          _y +
            widthScreen *
              ((Constants.rectangleHeight * 3) / 2 / widthScreen + 105),
          `sideEffect-${_row}-${_col}`
        );
        sideEffect.setDisplaySize(
          Constants.rectangleWidth,
          Constants.rectangleHeight
        );
        sideEffect.setOrigin(0.5, 0.5);

        // Action
        const action = _this.add.image(
          _x +
            widthScreen *
              ((Constants.rectangleWidth * 3) / 2 / widthScreen + 790),
          _y +
            widthScreen *
              ((Constants.rectangleHeight * 3) / 2 / widthScreen + 105),
          `action-${_row}-${_col}`
        );

        action.setDisplaySize(
          Constants.rectangleWidth * 0.6,
          Constants.rectangleHeight * 0.6
        );
      });

      _this.load.start();
    } else {
      _this.load.image(`box-${_row}-${_col}`, IMG_BOX);
      _this.load.image(`action-${_row}-${_col}`, actionItem?.image);
      _this.load.image(`sideEffect-${_row}-${_col}`, IMG_SIDE_EFFECT);

      _this.load.once("complete", () => {
        // Box
        const box = _this.add.image(
          _x +
            widthScreen *
              ((Constants.rectangleWidth * 3) / 2 / widthScreen + 790),
          _y +
            widthScreen *
              ((Constants.rectangleHeight * 3) / 2 / widthScreen + 105),
          `box-${_row}-${_col}`
        );
        box.setDisplaySize(Constants.rectangleWidth, Constants.rectangleHeight);
        box.setOrigin(0.5, 0.5);
        box.alpha = 0.65;

        // Side Effect
        const sideEffect = _this.add.image(
          _x +
            widthScreen *
              ((Constants.rectangleWidth * 1.6) / widthScreen + 790),
          _y +
            widthScreen *
              ((Constants.rectangleHeight * 3) / 2 / widthScreen + 105),
          `sideEffect-${_row}-${_col}`
        );
        sideEffect.setDisplaySize(
          Constants.rectangleWidth,
          Constants.rectangleHeight
        );
        sideEffect.setOrigin(0.5, 0.5);

        // Action
        if (_row === actionItem?.row && _col === actionItem?.col) {
          const action = _this.add.image(
            _x +
              widthScreen *
                ((Constants.rectangleWidth * 1.65) / widthScreen + 790),
            _y +
              widthScreen *
                ((Constants.rectangleHeight * 3) / 2 / widthScreen + 105),
            `action-${_row}-${_col}`
          );

          action.setDisplaySize(
            Constants.rectangleWidth * 0.35,
            Constants.rectangleHeight * 0.4
          );

          // action.setDisplaySize(Constants.rectangleWidth / 3, Constants.rectangleHeight / 2);

          const titleAction = _this.add.text(
            _x +
              widthScreen *
                ((Constants.rectangleWidth * 1.26) / widthScreen + 790),
            _y +
              widthScreen *
                ((Constants.rectangleHeight * 1.54) / widthScreen + 105),
            actionItem.title,
            {
              fontSize: `${smFontSize * 1.9}rem `,
              align: "center",
            }
          );
          titleAction.setOrigin(0.3, 0.5);
        }
      });
      _this.load.start();
    }
  }
};
