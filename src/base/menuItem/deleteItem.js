/* eslint-disable no-unused-vars */
import ItemBase from "../../storage/Items";

export const deleteItem = (_listItems, type) => {
  if (Array.isArray(_listItems) && _listItems.length) {
    if (ItemBase.getCountItem(type) === 0) {
      const newListItems = _listItems.filter((item) => item.type !== type);
      ItemBase.updateListItems(newListItems);
      ItemBase.updateIsDeletedItem(true);
    }
  }
};
