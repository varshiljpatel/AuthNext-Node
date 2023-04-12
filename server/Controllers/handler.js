const User = require('../Model/user.model');

const HCL =  {
    signUp : async (req, res) => {
        try {
            console.log("Post request");
            const user = new User({
                username: req.body.username,
                email: req.body.email,
                name: req.body.name,
                phone: req.body.phone,
                password: req.body.password
            })
            const doesExist = await  User.findOne({
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
    }
}

module.exports = HCL;