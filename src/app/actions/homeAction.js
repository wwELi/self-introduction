import Dispatcher from '../dispatcher/AppDispatcher';

const homeAction = {
	loadWorks() {
		fetch('/works').then(res => res.json()).then(value => {
			Dispatcher.dispatch({
            	type: 'WORKS',
            	payload: {
            		list: value
            	}
            });
		});
	}
}

export default homeAction;