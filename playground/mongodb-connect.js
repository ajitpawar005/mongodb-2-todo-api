const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
if(err){
    return console.log('Unable to connect to MongoDB Server');
}
console.log('Connected to MongoDB Server');

// db.collection('Todos').insertOne({
//     text:'Smething to do',
//     completed:false
// }, (err,result) => {
//     if (err)
//     {
//       return console.log("Unable to insert to Do",err);
//     }
//     console.log(JSON.stringify(result.ops,undefined,2));
// });
db.collection('Users').insertOne({
    name:'eee',  
     age:20,
     location:'eee',  
    Completed:false     
 }, (err,result) => {
    if (err)
    {
      return console.log("Unable to insert Users",err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2)); 
 });
 

db.close();
});