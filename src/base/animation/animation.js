/* eslint-disable no-unused-vars */
import Phaser from "phaser";
export const createAnimation = (_this) => {
  const _diceTextureKey = "dice";
  const _playerTextureKey = "player";
  // // Walk left
  // _this.anims.create({
  //   key: "walkLeft",
  //   frames: _this.anims.generateFrameNumbers(_playerTextureKey, {
  //     start: 118,
  //     end: 124,
  //   }),
  //   frameRate: 10,
  //   repeat: -1,
  // });

  // // Walk right
  // _this.anims.create({
  //   key: "walkRight",
  //   frames: _this.anims.generateFrameNumbers(_playerTextureKey, {
  //     start: 143,
  //     end: 151,
  //   }),
  //   frameRate: 10,
  //   repeat: -1,
  // });

  // // Walk up
  // _this.anims.create({
  //   key: "walkUp",
  //   frames: _this.anims.generateFrameNumbers(_playerTextureKey, {
  //     start: 104,
  //     end: 112,
  //   }),
  //   frameRate: 10,
  //   repeat: -1,
  // });

  // // Walk down
  // _this.anims.create({
  //   key: "walkDown",
  //   frames: _this.anims.generateFrameNumbers(_playerTextureKey, {
  //     start: 130,
  //     end: 138,
  //   }),
  //   frameRate: 10,
  //   repeat: -1,
  // });

  // dice animation
  const frames = [
    { key: "dice_1" },
    { key: "dice_2" },
    { key: "dice_3" },
    { key: "dice_4" },
    { key: "dice_5" },
    { key: "dice_6" },
  ];
  _this.anims.create({
    key: "roll",
    frames: frames,
    frameRepeat: 10,
    repeat: 0,
    duration: 520,
    ease: "Sine.easeInOut",
  });
};
