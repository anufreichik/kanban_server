import User from './Model';
export default function userCreate(req, res){
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        admin:req.body.admin
    })

    newUser
        .save()
        .then(()=>
        {
            res.status(200).json('user created')
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json('user not created: error!')
        })
        .finally(()=>{
            console.log('log user creation call')
        })
}