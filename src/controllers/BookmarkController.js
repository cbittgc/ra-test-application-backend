
const History = require('../models/history')
const axios = require('axios')
let Yup = require('yup');

exports.store = async function (req,res){
    const {_id} = req.params;
    
    console.log(_id);

    const history = await History.findOne({_id });
    const {bookmark} = history;
    const updated = await History.findOneAndUpdate({_id}, {bookmark: !bookmark})
     return  res.status(200).json(updated);
}

exports.index = async function (req,res){
    const bookmarks = await History.find({ bookmark: true});
    return res.status(200).json(bookmarks);
}