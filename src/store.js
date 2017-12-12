import createStore from 'redux-zero';
<<<<<<< HEAD


=======
>>>>>>> 7034f63268d4fa1c5973e1012e3b63ba0bfb7cbc
import {cars} from './data';
/* import { tboard } from './Databoards' */

const initialState = {
    data: cars,
    selected : 0,
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