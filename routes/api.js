const express=require('express');
const router=express.Router();
const fetch = require("node-fetch");

router.get('/getrecom/:id',function(req,res){
    var id=req.params.id;
    fetch('http://127.0.0.1:8000/?id='+id).then(response =>  response.json())
            .then(resData => {
               res.send(resData);
               
            })
})

router.get('/myrecomm',function(req,res){

   var MongoClient = require('mongodb').MongoClient;
   MongoClient.connect('mongodb://localhost:27017').then(function(client)
       {
           var db=client.db('flickdeets');
           var collection=db.collection("recomm");
           return collection.find({}).sort({"score":-1}).limit( 20 ).toArray();
           
       }).then((items)=>{
        res.send(items);
       })

})


router.post('/rate',function(req,res){
   var recomm = {
      id:req.body.id,
      rating: req.body.score,
  }
  console.log(recomm);
  var MongoClient = require('mongodb').MongoClient;
  MongoClient.connect('mongodb://localhost:27017').then(function(client)
      {
          var db=client.db('flickdeets');
          var collection=db.collection("ratings");
          return collection.insertOne(recomm);
          
      }).then(function(items){
         var item=items.ops[0];
          console.log('here',item);
          fetch('http://127.0.0.1:8000/?id='+item.id).then(response =>  response.json())
          .then(resData => {
            // console.log(resData.recom) 
            resData.recom.map(item=>{
               var item1=JSON.parse(item)
               // console.log(item1.title,item1.score*recomm.rating);
               var recommendation={
                  id:item1.imdb_id,
                  title:item1.title,
                  score:item1.score*recomm.rating
               }


         var MongoClient = require('mongodb').MongoClient;
  MongoClient.connect('mongodb://localhost:27017').then(function(client)
      {
          var db=client.db('flickdeets');
          var collection=db.collection("recomm");
         collection.findOne({"id":recommendation.id}).then((item)=>{
         if(item){
            console.log("Found",item)
          var newvalues = { $set: {id:recommendation.id,title:recommendation.title,score:recommendation.score+item.score } };
          console.log("new",newvalues)

          collection.updateOne({"id":recommendation.id},newvalues)
         }
         else{
            collection.insertOne(recommendation);

         }
         })
          
         
          



      })




            })
             
          })          






      })




})


module.exports=router;
