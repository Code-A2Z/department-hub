const Notice = require('../models/Notice');
exports.getNotices= async(req, res)=>{
    try{
        const notice=await Notice.find().sort({date: -1}).populate('author','name');
        res.status(200).json(notices);
    } catch(err){
        res.status(500).json({message:err.message});
    }
};

//@ route POST /api/notices
exports.createNotice=async(req,res)=>{
    try{
        const {title, content, authorId}= req.body;
        const newNotice= new Notice({
            title,
            content,
            author: authorId,
        });
        await newNotice.save();
        const populatedNotice=await Notice.findById(newNotice._id).populate('author','name');
        res.status(201).json(populatedNotice);
    } catch(err){
        res.status(400).json({message:err.message});
    }
}