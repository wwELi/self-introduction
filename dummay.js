
function dummay(app){
   app.get('/hello', (req, res) => {
   	   res.json(['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'tem8']);
   })
}

module.exports = dummay;