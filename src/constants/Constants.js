/* eslint-disable no-unused-vars */
import SmartBaseScreen from "../base/SmartScreenBase";
SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;

export class Constants {
  static rectangleWidth = widthScreen * 150;
  static rectangleHeight = widthScreen * 120;
  static boxSize = 6;
}
