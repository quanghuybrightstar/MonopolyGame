/* eslint-disable no-unused-vars */
import { listActions } from "../constants/Actions/listActions";
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
      _this.load.image(
        `boxCorner-${_row}-${_col}`,
        "assets/imgs/boxCorner.png"
      );
      _this.load.image(`action-${_row}-${_col}`, actionItem.image);
      _this.load.image(
        `sideEffect-${_row}-${_col}`,
        "assets/imgs/sideEffectBox.png"
      );

      _this.load.once("complete", () => {
        // Box Corner
        const boxCorner = _this.add.image(
          _x +
            widthScreen *
              ((Constants.rectangleWidth * 3) / 2 / widthScreen + 760),
          _y +
            widthScreen *
              ((Constants.rectangleHeight * 3) / 2 / widthScreen + 25),
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
              ((Constants.rectangleWidth * 3) / 2 / widthScreen + 760),
          _y +
            widthScreen *
              ((Constants.rectangleHeight * 3) / 2 / widthScreen + 25),
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
              ((Constants.rectangleWidth * 3) / 2 / widthScreen + 760),
          _y +
            widthScreen *
              ((Constants.rectangleHeight * 3) / 2 / widthScreen + 25),
          `action-${_row}-${_col}`
        );

        action.setDisplaySize(
          Constants.rectangleWidth * 0.6,
          Constants.rectangleHeight * 0.6
        );
      });

      _this.load.start();
    } else {
      _this.load.image(`box-${_row}-${_col}`, "assets/imgs/box.png");
      _this.load.image(`action-${_row}-${_col}`, actionItem?.image);
      _this.load.image(
        `sideEffect-${_row}-${_col}`,
        "assets/imgs/sideEffectBox.png"
      );

      _this.load.once("complete", () => {
        // Box
        const box = _this.add.image(
          _x +
            widthScreen *
              ((Constants.rectangleWidth * 3) / 2 / widthScreen + 760),
          _y +
            widthScreen *
              ((Constants.rectangleHeight * 3) / 2 / widthScreen + 25),
          `box-${_row}-${_col}`
        );
        box.setDisplaySize(Constants.rectangleWidth, Constants.rectangleHeight);
        box.setOrigin(0.5, 0.5);
        box.alpha = 0.65;

        // Side Effect
        const sideEffect = _this.add.image(
          _x +
            widthScreen *
              ((Constants.rectangleWidth * 1.6) / widthScreen + 760),
          _y +
            widthScreen *
              ((Constants.rectangleHeight * 3) / 2 / widthScreen + 25),
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
                ((Constants.rectangleWidth * 1.65) / widthScreen + 760),
            _y +
              widthScreen *
                ((Constants.rectangleHeight * 3) / 2 / widthScreen + 25),
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
                ((Constants.rectangleWidth * 1.26) / widthScreen + 760),
            _y +
              widthScreen *
                ((Constants.rectangleHeight * 1.54) / widthScreen + 25),
            actionItem.title,
            {
              fontSize: `${smFontSize * 30.4}px `,
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
