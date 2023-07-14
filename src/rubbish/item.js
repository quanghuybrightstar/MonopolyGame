/* eslint-disable no-undef */
  // Roll Double
  const containerRollDoubleItem = this.add.container();
  containerRollDoubleItem.setPosition(
    containerItems.x,
    containerItems.y
  );
  const itemRollDouble = createItem(
    this,
    containerRollDoubleItem,
    "rollDoubleItem",
    countItemRollDouble,
    "Đổ xúc sắc 2 lần liên tiếp.",
    TypeItem.ROLL_DOUBLE
  );
  remainItemRollDouble = itemRollDouble.remainItemText;
  btnUseRollDouble = itemRollDouble.btnUseItem;

  // Turn back 1 cell
  const containerTurn1CellItem = this.add.container();
  containerTurn1CellItem.setPosition(
    containerItems.x,
    containerItems.y * 1.25
  );

  const itemTurn1Cell = createItem(
    this,
    containerTurn1CellItem,
    "turn1CellItem",
    countItemTurn1Cell,
    "Lùi lại 1 ô.",
    TypeItem.TURN_1_CELL,
    chessboard,
    player,
    dice_1,
    dice_2
  );
  remainItemTurn1Cell = itemTurn1Cell.remainItemText;
  btnUseTurn1Cell = itemTurn1Cell.btnUseItem;

  // x2 Diamond item
  const containerX2DiamondItem = this.add.container();
  containerX2DiamondItem.setPosition(
    containerItems.x,
    containerItems.y * 1.5
  );

  const itemX2Diamond = createItem(
    this,
    containerX2DiamondItem,
    "x2DiamondItem",
    countItemX2Diamond,
    "Nhân 2 số kim cương nhận được hoặc trừ đi.",
    TypeItem.X2_DIAMOND
  );
  remainItemX2Diamond = itemX2Diamond.remainItemText;
  btnUseX2Diamond = itemX2Diamond.btnUseItem;

  // Roll double select 1
  const containerRollDoubleSelect1Item = this.add.container();
  containerRollDoubleSelect1Item.setPosition(
    containerItems.x,
    containerItems.y * 1.75
  );

  const itemRollDoubleSelect1 = createItem(
    this,
    containerRollDoubleSelect1Item,
    "rollDoubleSelect1Item",
    countItemRollDoubleSelect1,
    "Đổ xúc sắc 2 lần và chọn 1.",
    TypeItem.ROLL_DOUBLE_SELECT_1
  );

  remainItemRollDoubleSelect1 = itemRollDoubleSelect1.remainItemText;
  btnUseRollDoubleSelect1 = itemRollDoubleSelect1.btnUseItem;
  // Roll Turn Back Item
  const containerRollTurnBackItem = this.add.container();
  containerRollTurnBackItem.setPosition(
    containerItems.x,
    containerItems.y * 2
  );

  const itemRollTurnBack = createItem(
    this,
    containerRollTurnBackItem,
    "rollTurnBackItem",
    countItemRollTurnBack,
    "Sẽ lùi lại thay vì tiến khi đổ xúc sắc.",
    TypeItem.ROLL_TURN_BACK
  );
  remainItemRollTurnBack = itemRollTurnBack.remainItemText;
  btnUseRollTurnBack = itemRollTurnBack.btnUseItem;
  