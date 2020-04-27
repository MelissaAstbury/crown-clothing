import { all, call } from "redux-saga/effects";

import { shopSagas } from "./Shop/shop-sagas";
import { userSagas } from "./user/user-saga";
import { cartSagas } from "./Cart/cart-saga";

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
