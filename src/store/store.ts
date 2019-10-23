import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
import { rootSaga } from "./sagas/rootSaga";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const store = createStore(
  reducer(history),
  compose(
    applyMiddleware(routerMiddleware(history), sagaMiddleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);
sagaMiddleware.run(rootSaga);

export default store;
