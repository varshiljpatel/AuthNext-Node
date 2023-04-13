const User = require('../Model/user.model');
const dotenv = require('dotenv').config();

const HCL = {
    signUp: async (req, res) => {
        if (req.query.apiId == process.env.QUERY_ID && req.query.apiPassword == process.env.QUERY_PASSWORD) {
            try {
                console.log("Post request");
                const user = new User({
                    username: req.body.username,
                    email: req.body.email,
                    name: req.body.name,
                    phone: req.body.phone,
                    password: req.body.password
                })
                const doesExist = await User.findOne({
                    username: req.body.username
                });
                if (doesExist) {
                    return res.status(400).json({
                        message: "Username already exists"
                    });
                }
                await user.save();
                console.log("user saved");
            } catch (err) {
                console.log(err.message);
            }
        } else {
            console.log("Not data Fetched");
        }
    },
    root : async (req, res) => {
        let result = await User.find()
        result.map(user => {
            console.log({
                email : user.email,
                name : user.name,
            });
        });
    }
}

module.exports = HCL;