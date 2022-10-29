const User = require('../models/user');

const getAllUsers = async (req,res) => {
    try {
        const user = await User.find();
        return res.send({user})
    } catch (error) {
        res.status(500).send({error: error.message})
    }
};

const createUser = async (req,res) => {
    try {
        const email = req.body.email;
        if(await User.findOne({email})){
            res.status(500).send({message: "email já cadastrado"})
        }else{
            const user = await User.create(req.body);
            user.password = undefined;
            res.send({user: user})
        }
    } catch (error) {
        res.status(500).send({error: error.message})
    }
};

const editUser = async(req,res) => {
    try {
        const user = req.body;
        await User.updateOne({id: req.params.id}, user);
        res.send({message: "usuario editado com sucesso"})
    } catch (error) {
        res.status(500).send({error: error.message})
    }
};

const deleteUser = async(req,res) => {
    try {
        await User.deleteOne({id: req.params.id});
        res.send({message: "usuario deletado com sucesso"})
    } catch (error) {
        res.status(500).send({error: error.message})
    }
};

module.exports = {
    getAllUsers,
    createUser,
    editUser,
    deleteUser
}