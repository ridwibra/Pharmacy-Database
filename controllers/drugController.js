//model/controller/route
const { response } = require('express')
const Drug = require('../models/drugModel')

//show the list of drugs
const index = (req, res, next) => {
    if(req.query.page && req.query.limit){
        Drug.paginate({}, {page: req.query.page, limit: req.query.limit})
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occured'+error
            })
        })
    }else{
        Drug.find()
         .then(response => {
           res.json({
            response
           })
    })
    .catch(error => {
        res.status(400).json({
            error
        })
    })

    }
    

    // Drug.find()
    // .then(response => {
    //     res.json({
    //         response
    //     })
    // })
    // .catch(error => {
    //     res.json({
    //         message: 'An error occured!'
    //     })
    // })
}

const show = (req, res, next)=>{
    let drugID = req.body.drugID
    Drug.findById(drugID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured'
        })
    })
}

//add new drug
const store = (req, res, next) => {
    let drug = new Drug({
        name: req.body.name,
        company: req.body.company,
        country: req.body.country,
        production: req.body.production,
        expiry: req.body.expiry,
        price: req.body.price
    })
    // if(req.file){
    //     drug.avatar = req.file.path
    // }
    if(req.files){
        let path = ''
        req.files.forEach(function(files, index, arr){
            path = path + files.path + ','
        })
        path = path.substring(0, path.lastIndexOf(","))
        drug.avatar = path
    }
    drug.save()
    .then(response => {
        res.json({
            message: 'A drug added successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured'
        })
    })
}

//update a drug
const update = (req, res, next) => {
    let drugID = req.body?.drugID

    let updatedData = {
        name: req.body.name,
        company: req.body.company,
        country: req.body.country,
        production: req.body.production,
        expiry: req.body.expiry,
        price: req.body.price
    }
    Drug.findByIdAndUpdate(drugID, {$set:updatedData})
    .then(()=>{
        res.json({
            message: 'Drug updated successfully'
        })
    })
    .catch(error => {
        res.json({
            message:'An error occured'
        })
    })
}


//delete a drug
const destroy = (req, res, next)=>{
    let drugID = req.body.drugID
    Drug.findByIdAndRemove(drugID)
    .then(()=>{
        res.json({
            message: 'Drug deleted successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured'
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}