const express = require('express');
const router = express.Router();
const mangoose = require('mongoose');
const Connection = require('../models/connection');

router.get('/', (req, res, next) => {
    const emailId = req.body.emailId;
    Connection.find({ $or: [{ userOneEmailId: emailId }, { userTwoEmailId: emailId }] })
        .exec()
        .then(docs => {
            res.status(200).json(docs)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
});


router.post('/', (req, res, next) => {

    const connection = new Connection({
        userOneEmailId: req.body.userOneEmailId,
        userTwoEmailId: req.body.userTwoEmailId,
        status: req.body.status,
    });
    connection.save().then((result) => {

        console.log(result)
    }).catch((err) => {
        console.log(err);
    });;
    res.status(201).json({
        message: 'Handling POST requests to /Connections',
        connection: connection
    });
});


router.put('/:emailId', (req, res, next) => {
    const emailId = req.params.emailId;
    console.log("Put Email Id "+emailId);
    Connection.updateMany( {$or: [{ userOneEmailId : emailId }, { userTwoEmailId: emailId }]}, { $set: 
        { 
            status : "Blocked"
        } 
    }).then((result) => {

        console.log(result)
    }).catch((err) => {
        console.log(err);
    });;
    res.status(201).json({
        message: 'Handling PUT requests to /Connections',
    });
});

module.exports = router;