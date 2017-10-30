import { ReduceStore } from 'flux/utils';
import Dispatcher from '../dispatcher/AppDispatcher';

class HomeStore extends ReduceStore{

	getInitialState() {
         return {
         	list: []
         }
	}

	reduce(state, action) {
        switch(action.type) {
        	case 'WORKS':
        	return {
        		list: action.payload.list
        	}
        	default:
        	return state;
        }
	}

}

export default new HomeStore(Dispatcher);