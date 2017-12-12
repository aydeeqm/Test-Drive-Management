import createStore from 'redux-zero';
import susuki1 from '../imgs/susuki/newvitara.png';
import susuki2 from '../imgs/susuki/nomade.png';
import susuki3 from '../imgs/susuki/s-cross.png';
import mazda1 from '../imgs/mazda/mazda3sport.png';
import mazda2 from '../imgs/mazda/mazdacx5.png';
import mazda3 from '../imgs/mazda/mazdamx5rf.png';
import citroen1 from '../imgs/citroen/citroen1.png';
import citroen2 from '../imgs/citroen/citroencactus2.jpg';
import citroen3 from '../imgs/citroen/citroEnlysse.png';
import DsAutomobiles1 from '../imgs/ds/ds4crossback.png';
import DsAutomobiles2 from '../imgs/ds/newds3.png';
import DsAutomobiles3 from '../imgs/ds/newds5.jpg';
import haval1 from '../imgs/haval/havalh2black.jpg';
import haval2 from '../imgs/haval/havalh6sport.jpg';
import greadwall1 from '../imgs/greatwall/newvoleex.png';
import greadwall2 from '../imgs/greatwall/wingle5.png';
import changan1 from '../imgs/changan/changancs15.jpg';
import changan2 from '../imgs/changan/changancx70.png';
import jac1 from '../imgs/jac/grands3.png';
import jac2 from '../imgs/jac/j4.png';

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