import localStorage from "redux-persist/es/storage";

const ReduxPersist = {
  active: true,
  reducerVersion: "0.7",
  storeConfig: {
    key: "primary",
    storage: localStorage,
  },
};

export default ReduxPersist;
