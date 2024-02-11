import { useState, useEffect } from "react";
import SmartBaseScreen from "../../base/SmartScreenBase";
SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;
const smFontSize = SmartBaseScreen.smFontSize;
import { useDispatch, useSelector } from "react-redux";
import {
  setDetailPlatform,
  setDetailDiamond,
} from "../../redux/action/actions";
import APIBase from "../../base/APIBase";
import API from "../../apis/APIConstants";
import ItemBase from "../../storage/Items";
import { TypeItem } from "../../constants/Items/typeItem";
import ParamAuth from "../../constants/ParamAuth";

export const chessBoardLogic = (props) => {
  const _dispatch = useDispatch();

  const [dataChessBoard, setDataChessBoard] = useState([]);
  const [dataItemCurrent, setDataItemCurrent] = useState([]);
  const platformSelected = ItemBase.platformSelected;

  console.log(platformSelected);

  const getDetailPlatform = async () => {
    if (platformSelected) {
      try {
        let uriApi = `${API.baseURL}${API.detailPlatform}?id_platform=${platformSelected.id}&type=${platformSelected.type}`;

        const result = await APIBase.apiCaller("GET", uriApi);
        if (result?.status) {
          _dispatch(setDetailPlatform(result.data));
          const filterDiamond = result.data.filter(
            (data) => data.item_category == "diamond"
          );
          const filterTicket = result.data.filter(
            (data) => data.item_category == "ticket"
          );
          _dispatch(setDetailDiamond(filterDiamond[0]));
          console.log(filterDiamond[0].quantity_available);
          ItemBase.updateQuantityDiamonds(filterDiamond[0].quantity_available);
          ItemBase.updateQuantityTickets(filterTicket[0].quantity_available);
          console.log(filterTicket[0].quantity_available);
          ItemBase.updateDetailItem(result.data);
          setDataChessBoard(result.data);
          const filterInGame = result.data.filter(
            (data) =>
              data.quantity_available > 0 && data.item_category == "in_game"
          );
          setDataItemCurrent(filterInGame);
          ItemBase.updateListItems(filterInGame);

          filterInGame.map((data) => {
            ItemBase.updateQuantityItem(data.sub_type, data.quantity_available);
          });

          console.log(ItemBase.getCountItem(TypeItem.ROLL_DOUBLE));
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  // const getAccessToken = async () => {
  //   try {
  //     const urlApi = `${API.baseURL}${API.accessToken}`;

  //     const dataBody = {
  //       client_id: ParamAuth.client_id,
  //       client_secret: ParamAuth.client_secret,
  //       grant_type: ParamAuth.grant_type,
  //       password: "Khongcomk123123",
  //       scope: ParamAuth.scope,
  //       username: "daoquanghuy29077@gmail.com",
  //     };

  //     const result = await APIBase.apiCaller("POST", urlApi, dataBody);
  //     console.log(result);
  //     if (result) {
  //       APIBase.updateAccessToken(result.access_token);
  //       localStorage.setItem("access_token", result.access_token);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //     if (e.message == "Network Error") {
  //       alert("Vui lòng kiểm tra kết nối Internet");
  //     }
  //   }
  // };
  // getAccessToken();
  useEffect(() => {
    getDetailPlatform();
  }, []);

  return { dataChessBoard, dataItemCurrent };
};
