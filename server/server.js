var mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo= mongoose.model('Todo',{
 text:{
     type: String
 },
 completed:{
     type: Boolean
 },
 completeAt:{
     type:Number
 }
});

// var newTOdo=new Todo({
//    text:'get dinner'
// });

// newTOdo.save().then((doc) => {
//     console.log('saved todo',doc);
// },(e) => {
//     console.log('Unable to save todo')
// });

var otherTodo=new Todo({
    text:'set dinner',
    completed:true,
    completeAt:123
});

otherTodo.save().then((doc) =>{
    console.log(JSON.stringify(doc,undefined,2));
},(e) =>{
console.log('Unable to save',e);
});