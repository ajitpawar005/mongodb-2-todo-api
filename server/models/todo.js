var mongoose=require('mongoose');

var Todo= mongoose.model('Todo',{
 text:{
     type: String,
     required:true,
     minlength:1,
     trim :true
 },
 completed:{
     type: Boolean,
     default:false
 },
 completeAt:{
     type:Number,
     default:null
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

// var otherTodo=new Todo({
//     text:'   edit the dinner    '
//  });

// otherTodo.save().then((doc) =>{
//     console.log(JSON.stringify(doc,undefined,2));
// },(e) =>{
// console.log('Unable to save',e);
// });

module.exports={Todo};