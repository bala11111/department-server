const User = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports.create = async function(req, res){
    console.log('inside user')
    try{

        if(req.body.password != req.body.confirm_password)
        {
            return res.json(422,{
                message : 'password doesnt match!!'
            })
        }

        let userx = await User.findOne({name: req.body.name});

        if(!userx)
        {
            let user = await User.create(req.body);

            return res.json(200, {
                success: 'Sign up successful, here is your token, please keep it safe!',
                data:  user
            })
        }
        else{
            return res.json(200, {
                message: 'User already exist!!'
            })
        }

    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}

module.exports.createSession = async function(req, res){

    try{
        console.log('req.body',req.body);
        let user = await User.findOne({name: req.body.name});

        if (!user || user.password != req.body.password){
            return res.json(422, {
                message: "Invalid username or password",
            });
        }

        return res.json(200, {
            success: 'Sign in successful, here is your token, please keep it safe!',
            data:  {
                token: jwt.sign(user.toJSON(), 'department', {expiresIn:  '100000'}),
                user : user
            }
        })

    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error",
            error: err
        });
    }
}