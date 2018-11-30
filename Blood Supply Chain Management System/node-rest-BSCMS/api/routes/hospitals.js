const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Hospital = require('../models/hospital')

router.get('/', (req, res, next) => {
    const hospitalName = req.body.hospitalEmailId;
    const hospitalPassword = req.body.hospitalPassword;
    Hospital.find(
        {
            hospitalEmailId: hospitalName,
            hospitalPassword: hospitalPassword
        }
    )
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

router.put('/:emailId', (req, res, next) => {
    const hospitalEmailId = req.params.emailId;
    console.log("Put Email Id " + hospitalEmailId);
    Hospital.update({ hospitalEmailId: hospitalEmailId }, {
        $set:
        {
            hospitalName: req.body.hospitalName,
            hospitalContactNumber: req.body.hospitalContactNumber
        }
    })  .exec()
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

router.patch('/:userId', (req, res, next) => {
    const id = req.params.userId;
    Hospital.update({ _id: id }, { $set: { hospitalEmailId: req.body.hospitalEmailId } })
});

router.post('/', (req, res, next) => {

    console.log("Body From POST " + req.body.name);
    const hospital = new Hospital({
        hospitalName: req.body.hospitalName,
        hospitalRegistrationNumber: req.body.hospitalRegistrationNumber,
        hospitalEmailId: req.body.hospitalEmailId,
        hospitalStreetAddress: req.body.hospitalStreetAddress,
        hospitalCity: req.body.hospitalCity,
        hospitalZipCode: req.body.hospitalZipCode,
        hospitalState: req.body.hospitalState,
        hospitalContactNumber: req.body.hospitalContactNumber,
        hospitalPassword: req.body.hospitalPassword
    });
    hospital.save().then((result) => {

        console.log(result)
    }).catch((err) => {
        console.log(err);
    });;
    res.status(201).json({
        message: 'Handling POST requests to /User',
        hospital: hospital
    });
});

module.exports = router;