import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import ReduxPersist from "../../configs/ReducerPersist";
import rootReducer from "../reducers/reducers";

const persistedReducer = persistReducer(ReduxPersist.storeConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };
