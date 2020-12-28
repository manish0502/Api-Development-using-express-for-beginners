var express =  require('express');
var router = express.Router();


// CRUD-Products

// @ 1.Ecommerce product api
// @public
// @POST request

router.post('/create-product' , (req , res ) =>{
    res.send('Lists of products')

});


// @ 2.Ecommerce Products api
// @public
// @PUT request

router.put('/update-product' , (req , res ) =>{
   res.send('Lists of Updated Products')

});

// @ 3.sample api
// @public
// @ GET product request

router.get('/view-product' , (req , res ) =>{

    const UserObj ={
        id:10 ,
        name: 'Manish',
        lastname: 'kumar',
        status: true
    }

    res.send(UserObj);
   
});

// @ 4.sample api
// @ public
// @ GET all-products request

router.get('/view-products' , (req , res ) =>{
    res.send('Lists of all items')
 });

// @ 5.sample User api
// @ public
// @ DELETE all-products request

router.delete('/delete-product' , (req , res ) =>{
    res.send('item has been deleted')
 });












module.exports=router;