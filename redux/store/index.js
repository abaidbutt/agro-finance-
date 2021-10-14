import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "../reducers";
import wholeState from "./wholeState";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });

const store = createStore(
  persistedReducer,
  wholeState,
  composeEnhancers(applyMiddleware(thunk))
);
const persistor = persistStore(store);

export { store, persistor };
