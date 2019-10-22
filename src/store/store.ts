import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
import { helloSaga } from "./sagas/sagas";

const sagaMiddleware = createSagaMiddleware();

export interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
}
const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);
sagaMiddleware.run(helloSaga);

export default store;
