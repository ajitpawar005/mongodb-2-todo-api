
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
if(err){
    return console.log('Unable to connect to MongoDB Server');
}
console.log('Connected to MongoDB Server');

// db.collection('Todos').find({
//     _id:new ObjectID('5a9d43b08474c715b83c46b0')
// }).toArray().then ((docs) => {
//     console.log("Todos");
//     console.log(JSON.stringify(docs,undefined,2));
// },(err) => {
//     console.log(" Unable to fetch Todos",err);

// });

// db.collection('Todos').find().count().then ((count) => {
//     console.log(`Todos count: ${count}`);
    
// },(err) => {
//     console.log(" Unable to fetch Todos",err);

// });

db.collection('Users').find({name: "eee"}).toArray().then ((docs) => {
    console.log("Todos");
    console.log(JSON.stringify(docs,undefined,2));
 },(err) => {
    console.log(" Unable to fetch Todos",err);
 
 });
 
// db.close();
});