const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/Movies', function(req, res) {
    let arr = ["titanic", "marwel", "superman", "fanna", "batman"]
    res.send(arr)
})

router.get('/movies/:indexnumber', function(req, res){
const arr =["titanic", "marwel", "superman","fanna", "batman"]
const id = req.params.indexnumber
if (id<arr.length){
    res.send(arr[id])
}else{
    res.send('use valid index')

}

});







module.exports = router;
// adding this comment for no reason