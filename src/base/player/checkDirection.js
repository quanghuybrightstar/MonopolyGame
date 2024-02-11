/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import ItemBase from "../../storage/Items";
import { Constants } from "../../constants/Constants";
import updateQuantityItem from "../UpdateQuantityItem";

export const checkDirection = (_row, _col) => {
  const platformSelected = ItemBase.platformSelected;
  const detailItemTicket = ItemBase.detailItem.filter(
    (item) => item.item_category == "ticket"
  );

  const item_result = ItemBase.detailItem.filter(
    (item) => item.item_category != "ticket"
  );

  const positionPlayer = _row + "_" + _col;
  switch (positionPlayer) {
    // position top left
    case "0_0":
      ItemBase.updateDirectionMove({
        row: 1,
        col: 0,
      });
      break;
    // position top right
    case "0_5":
      ItemBase.updateDirectionMove({
        row: 0,
        col: -1,
      });
      break;
    // position bottom right
    case "5_5":
      ItemBase.updateDirectionMove({
        row: -1,
        col: 0,
      });
      break;
    // position bottom left
    case "5_0":
      ItemBase.updateDirectionMove({
        row: 0,
        col: 1,
      });
      ItemBase.increaseCountTickets(1);

      detailItemTicket[0] = {
        ...detailItemTicket[0],
        quantity_available: ItemBase.countTickets + 1,
      };
      item_result.push(detailItemTicket[0]);
      ItemBase.updateDetailItem(item_result);
      const body = {
        platform_id: platformSelected.id,
        platform_category: platformSelected.type,
        item_result: JSON.stringify(item_result),
        type: "playing",
      };
      const result = updateQuantityItem(body);

      break;
    default:
  }

  if (_col !== 0 && _col !== Constants.boxSize - 1) {
    if (_row === 0) {
      ItemBase.updateDirectionMove({
        row: 0,
        col: -1,
      });
    } else if (_row === Constants.boxSize - 1) {
      ItemBase.updateDirectionMove({
        row: 0,
        col: 1,
      });
    }
  } else if (_col === 0) {
    if (_row !== 0 && _row !== Constants.boxSize - 1) {
      ItemBase.updateDirectionMove({
        row: 1,
        col: 0,
      });
    }
  } else if (_col === Constants.boxSize - 1) {
    if (_row !== 0 && _row !== Constants.boxSize - 1) {
      ItemBase.updateDirectionMove({
        row: -1,
        col: 0,
      });
    }
  }
};
