import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

// import { fetchCollectionsStart } from "./Shop/shop-sagas";

import rootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
//adding in middlewares makes it more scaleable
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// sagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store);

export default { store, persistStore };
