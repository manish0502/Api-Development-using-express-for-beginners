var express =  require('express');
var router = express.Router();



// @Middleware started
// Check , is user Authenticated?
// Check if data is correct
// Check if all data is present

router.use('/' ,(req , res ,next)=>{

    req.headers['content-type'] = 'applicatio/json';
    console.log('the request is recieved at ' , +Date.now());
    next()
})

// @ 1.Ecommerce User api
// @public
// @POST request

router.post('/create-user' , (req , res , next) =>{


    res.send('Lists of Users')
    next();

});

// @ Testing purpose
// @public
// @GET request

// router.get('/see-user' , (req , res ,next ) =>{
    
//     res.send("header recieved" + req.headers['content-type'] )
//     res.send('Lists of Users')
//     next();

// });

// @Middleware call  ended

router.use('/' ,(req , res )=>{
    console.log('the request is Ended at ' , +Date.now());

})


// @ 2.Ecommerce User api
// @public
// @PUT request

router.put('/update-user' , (req , res ) =>{
   res.send('Lists of Updated Users');


});


// @ 3.sample User api
// @public
// @ GET request

router.get('/read-user/:id' , (req , res ) =>{
   res.send("this is user details with id is" +req.params.id)
});



// @passing 2 parameters 
// @state and city
// @GET Request

router.get('/search-by-location/:state/:city' , (req , res ) =>{
    res.send("this is user details with location and city are" + req.params.state   + req.params.city)
 });


// @regular expression
// @key
// @GET Request

router.get('/search/:key([0-9]{4})' , (req , res ) =>{
    res.send("Data Capture is" + req.params.key)
 });





// @passing username
// @it will only take character
// @GET & 4 denotes 4 digits

router.get('/search-username/:key([a-zA-Z]{4})' , (req , res ) =>{
    res.send("UserName is" + req.params.key)
 });


// @Wild Card
// @When Page not Found
// @GET Request

router.get('*' , (req , res ) =>{
    var WildObj = {

        statusCode:404,
        statusMsg: 'Page Not Found'
    }
    res.send(WildObj)
 });


// @ get user details 
// @public
// @ GET request User

router.get('/get-user-deatails' , (req , res ) =>{
 
   const UserObj ={
       id:10 ,
       name: 'Manish',
       lastname: 'kumar',
       status: true
   }

   res.send(UserObj);
  
});




module.exports=router;