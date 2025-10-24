const UserInfo = require('../models/userInfo')

//@desc Get all users
//@route GET /users
//@access Public
exports.getUsers = async (req,res,next) => {
    try {
        const users = await UserInfo.find()

        return res.status(200).json({success:true,data:users})
    } catch (err){
        return res.status(400).json({success:false})
    }
}

//@desc Get user by user id
//@route GET /users/:id
//@access Public
exports.getUser = async (req,res,next) => {
    try{
        const user = await UserInfo.findById(req.params.id)
        if (!user) {
            return res.status(400).json({success:false})
        }

        return res.status(200).json({success:true,data:user})
    } catch (err){
        return res.status(400).json({success:false})
    }
    
}

//@desc Create user
//@route POST /users/
//@access Private
exports.createUser = async (req,res,next) => {
    const user = await UserInfo.create(req.body)
    res.status(200).json({success:true,data:user})
}

//@desc Update user by user id
//@route Put users/:id
//@access Private

exports.updateUser = async (req,res,next) => {
    try{
        const user = await UserInfo.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
            runValidators: true,
        })

        if (!user) {
            return res.status(400).json({success:false})
        }

        return res.status(200).json({success:true,data:user})
    } catch {
        return res.status(400).json({success:false})
    }
}

//@desc Delete user by user id
//@route Delete /users/:id
//@access Private
exports.deleteUser = async (req,res,next) => {
    try{
        const user = await UserInfo.findByIdAndDelete(req.params.id)
        if (!user){
            return res.status(400).json({success:false})
        }

        return res.status(200).json({success:true,data:{}})
    } catch {
        return res.status(400).json({success:false})
    }
}