/* eslint-disable no-unused-vars */
import SmartBaseScreen from "../SmartScreenBase";
SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;

export const tweenAnims = (
  _this,
  _chessboard,
  targetDiceX,
  targetDiceY,
  _dice,
  _onComplete
) => {
  // Value for jumping animation
  const jumpHeight = widthScreen * 50;

  const duration = 300;

  const controlX = targetDiceX + _dice.x; // Calculate the control point x-coordinate
  const controlY = _dice.y - jumpHeight;

  function rollDice() {
    _dice.anims.play("roll");
  }

  _this.tweens.add({
    targets: _dice,
    x: controlX / 2,
    y: controlY + widthScreen * 20,
    duration,
    rotation: Math.PI,
    ease: "Sine.easeInOut",
    onComplete: () => {
      _this.tweens.add({
        targets: _dice,
        x: controlX / 2 + widthScreen * 80,
        y: targetDiceY - widthScreen * 12,
        duration: 250,
        rotation: (Math.PI * 6) / 5,
        ease: "Sine.easeInOut",
        onComplete: () => {
          rollDice();
          _this.tweens.add({
            targets: _dice,
            x: controlX / 2 + widthScreen * 130,
            y: controlY + widthScreen * 5,
            duration: 200,
            ease: "Sine.easeInOut",
            onComplete: () => {
              _this.tweens.add({
                targets: _dice,
                x: targetDiceX,
                y: targetDiceY,
                rotation: 0,
                duration: 250,
                ease: "Sine.easeInOut",
                onComplete: _onComplete,
                onCompleteScope: _this,
              });
            },
            onCompleteScope: _this,
          });
        },
        onCompleteScope: _this,
      });
    },
    onCompleteScope: _this,
  });
};
