/* eslint-disable no-unused-vars */
import { listActions } from "../constants/Actions/listActions";
import { IMG_BOX_CORNER, IMG_SIDE_EFFECT, IMG_BOX } from "../assets";
import { Constants } from "../constants/Constants";

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
            (Constants.rectangleWidth * 3) / 2 +
            _chessboard.x -
            Math.floor(_chessboard.width / 2),
          _y +
            (Constants.rectangleHeight * 3) / 2 +
            _chessboard.y -
            Math.floor(_chessboard.height / 2),
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
            (Constants.rectangleWidth * 3) / 2 +
            _chessboard.x -
            Math.floor(_chessboard.width / 2),
          _y +
            (Constants.rectangleHeight * 3) / 2 +
            _chessboard.y -
            Math.floor(_chessboard.height / 2),
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
            (Constants.rectangleWidth * 3) / 2 +
            _chessboard.x -
            Math.floor(_chessboard.width / 2),
          _y +
            (Constants.rectangleHeight * 3) / 2 +
            _chessboard.y -
            Math.floor(_chessboard.height / 2),
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
            (Constants.rectangleWidth * 3) / 2 +
            _chessboard.x -
            Math.floor(_chessboard.width / 2),
          _y +
            (Constants.rectangleHeight * 3) / 2 +
            _chessboard.y -
            Math.floor(_chessboard.height / 2),
          `box-${_row}-${_col}`
        );
        box.setDisplaySize(Constants.rectangleWidth, Constants.rectangleHeight);
        box.setOrigin(0.5, 0.5);
        box.alpha = 0.65;

        // Side Effect
        const sideEffect = _this.add.image(
          _x +
            (Constants.rectangleWidth * 3) / 2 +
            _chessboard.x -
            Math.floor(_chessboard.width / 2),
          _y +
            (Constants.rectangleHeight * 3) / 2 +
            _chessboard.y -
            Math.floor(_chessboard.height / 2),
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
              Constants.rectangleWidth * 1.6 +
              _chessboard.x -
              Math.floor(_chessboard.width / 2),
            _y +
              (Constants.rectangleHeight * 3) / 2 +
              _chessboard.y -
              Math.floor(_chessboard.height / 2),
            `action-${_row}-${_col}`
          );

          // action.setDisplaySize(Constants.rectangleWidth / 3, Constants.rectangleHeight / 2);

          const titleAction = _this.add.text(
            _x +
              Constants.rectangleWidth * 1.26 +
              _chessboard.x -
              Math.floor(_chessboard.width / 2),
            _y +
              Constants.rectangleHeight * 1.54 +
              _chessboard.y -
              Math.floor(_chessboard.height / 2),
            actionItem.title,
            {
              fontSize: "26px",
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
