/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import ItemBase from "../../storage/Items";
import updateQuantityItem from "../UpdateQuantityItem";

export const addItemIntoList = (_this, _listItems, itemGot, _count) => {
  // const platformSelected = ItemBase.platformSelected;
  // const detailItemTicket = ItemBase.detailItem.filter(
  //   (data) => data.sub_type == itemGot.sub_type
  // );
  // const item_result = ItemBase.detailItem.filter(
  //   (data) => data.sub_type != itemGot.sub_type
  // );

  if (!Array.isArray(_listItems) || _listItems.length === 0) {
    _listItems.push(itemGot);
    ItemBase.updateListItems(_listItems);
  } else {
    const includedItem = _listItems?.some(
      (item) => item?.sub_type === itemGot?.sub_type
    );
    if (!includedItem) {
      _listItems.push(itemGot);
      ItemBase.updateListItems(_listItems);
    }
  }
};
