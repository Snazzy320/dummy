const users = require("../model/usersModel")


const handleAddUser =  async(req, res)=>{

    const { fullName, email, password } = req.body

    const newUser = new users({ fullName, email, password })

    const user = await users.findOne({email})

    if(user){
        
        return res.status(400).json({message: "this user already exist."})
    }

    await newUser.save()

    return res.status(200).json({
        message: "successful",
        user: newUser
    })
}

module.exports = {
    handleAddUser

}