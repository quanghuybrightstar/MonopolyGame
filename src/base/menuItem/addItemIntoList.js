/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import ItemBase from "../../storage/Items";

export const addItemIntoList = (_this, _listItems, itemGot, _count) => {
  if (!Array.isArray(_listItems) || _listItems.length === 0) {
    _listItems.push(itemGot);
    ItemBase.updateListItems(_listItems);
  } else {
    const includedItem = _listItems?.some(
      (item) => item?.type === itemGot?.type
    );
    if (!includedItem) {
      _listItems.push(itemGot);
      ItemBase.updateListItems(_listItems);
    }
  }
};
