
const History = require('../models/history')
const axios = require('axios')
let Yup = require('yup');

exports.store = async function (req,res){
     // this is to get the video's title from youtube
    
    const schema = Yup.object().shape({
        url: Yup.string().required()
    });
    await schema.isValid(req.body.url);

    const link = 'https://www.youtube.com/oembed?url=' + req.body.url + '&format=json'        
    const ytJson = await axios.get(link);
    const {data: { title } }  = ytJson;


    const hist = new History({
        title,
        url: req.body.url
    })

    hist.save()

    console.log(hist)
    return  res.status(201).json(hist);
}

exports.index = async function (req,res){
    const histories = await History.find();
    return res.status(200).json(histories);
}
