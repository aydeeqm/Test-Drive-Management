import createStore from 'redux-zero';
import {cars} from './data';
/* import { tboard } from './Databoards' */

const initialState = {
    data: cars,
    user: {
        id: 1,
        email: null,
        fullname: null,
        lastname:null,
        password:null,
    },
    successLogin: false,
};

const store = createStore(initialState);
export default store;