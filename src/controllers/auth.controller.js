import User from "../models/user.models.js"
export const register = async (req,res) =>{
    const {user, passw} = req.body

    try {
        const newUser = new User({
            username: user,
            password: passw,
        });
    
        const userSaved = await newUser.save()
        console.log(userSaved)
    } catch (error) {
        console.log(error)
    }


    res.send(user + " " + passw);
}
export const login = (req,res) =>{
    res.send("login");
}
