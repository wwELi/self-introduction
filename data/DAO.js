const mongoClient  = require('mongodb').MongoClient;
const DB_PATH = 'mongodb://127.0.0.1:27017/comment_info';

const insert = data => {
    connect((db ,collection) => {
      collection.insert(data, (err, res) => {
          if(err) {
              console.log('---------------------\nerr\n---------------------');
              return;
          }
          console.log('------------------\n', res, '\n----------------------');
      })
    })
};
const find = (callback) => {
    connect((db ,collection) => {
        collection.find().toArray((err, data) => {
            console.log('=================\n',data, '\n=====================');
            callback(data);
            db.close();
        })
    })
}
function connect(callback) {
    mongoClient.connect(DB_PATH, (err, db) => {
        if(err) {
            console.log('---------------------\nerr\n---------------------');
            return;
        }
        const collection = db.collection('site');
        callback(db ,collection);
    });
}

const DAO = {
    find,
    insert
}

module.exports = DAO;