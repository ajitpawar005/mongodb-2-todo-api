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
    name:'abc',  
     age:20,
     location:'abc',  
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