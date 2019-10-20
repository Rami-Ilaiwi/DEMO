import { createStore } from "redux";
import reducer from "./reducers";
export interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
}
const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;