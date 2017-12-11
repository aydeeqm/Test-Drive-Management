import createStore from 'redux-zero';
/* import { tboard } from './Databoards' */

const initialState = {
    data: [],
};

const store = createStore(initialState);
export default store;