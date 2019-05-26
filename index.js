var express=require('express');
const mongoose= require('mongodb');


mongoose.connect('mongodb://localhost:27017',{ useNewUrlParser: true });

mongoose.connection.on('connected', (err, res)=>{
    if(err)
    console.log('error'+ err);
    else
    console.log('connected')
});
var app=express();

app.listen(8080, (err,res)=>
{
    if(err)
    {
        console.log(err);
    }
    console.log('server is listening at port 8080')
})