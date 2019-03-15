import { observable } from 'mobx';

import api from '../utils/api';

class Store {

    constructor(){
        this.departments = observable.box(null);
    }

    getDepartments(){
        var callback = (result) => {
            console.log('desde App', result);
            this.departments.set(result);
        }
        api.getDepartments(callback);
    }
}

const store = new Store();

export default store;