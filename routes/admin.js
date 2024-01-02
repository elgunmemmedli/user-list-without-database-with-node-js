// const path = require('path');
const express = require('express');

const router = express.Router();
const users = [];

router.get('/add-user', (req, res, next)=>{
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-user.html'));
    res.render('add-user', {
        pageTitle : 'Add - User'
    })
})
 

router.post('/add-user', (req,res,next)=>{
    users.push({name : req.body.name, surname : req.body.surname});
    res.redirect('/');
})

// module.exports = router;
exports.routes = router;
exports.users = users;