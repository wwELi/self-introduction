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
    },
    addComment(data) {
        const headers = new Headers({
            "Accept": "application/json",
            "Content-Type": "application/json"
        });

        fetch('/add/comment', {method: 'POST', body: JSON.stringify(data), headers}).then(() => {
            this.getComment();
        });
    },
    getComment() {
        fetch('/view/comment').then(res => res.json()).then((data) => {
            Dispatcher.dispatch({
                type: 'COMMENT',
                payload: {
                    comments: data
                }
            });
        });
    }
}

export default homeAction;