const DAO = require('./DAO')

function controller(app){
    app.post('/add/comment', (req, res) => {
        DAO.insert(req.body);
        res.send('success');
    })
    app.get('/view/comment', (req, res, next) => {

        DAO.find((data) => {
            res.json(data)
        });
    })
    app.get('/works', (req, res) => {
        res.json(['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'tem8']);
    })
}

module.exports = controller;