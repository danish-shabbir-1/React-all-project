import express from "express";
import Users from "../model/User.mjs";
import verifyToken from "../middlewares/verifyToken.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const users = await Users.find();
        res.send({ massage: "users get Succesfully", users });
    } catch (e) {
        res.send({ massage: e.massage });
    }
});

router.post("/register", async (req, res) => {
    try {
        res.send({ massage: "User register succesfully" });
        await Users.create(req.body);
    } catch (e) {
        res.send({ massage : e.massage });
    }
});

router.post("/login", async (req, res) => {
    try {
        // Step 1 : check email exist
        const {email , password} = req.body

        const user = await Users.findOne({email})

        if (!user) {
            res.status(404).send({ massage : 'Email not found'})
            return
        }
        // Step 2 : compare password

        const isCorrectPassword = user.comparepassword(password)

        if (!isCorrectPassword) {
            res.status(404).send({ massage : 'Password is incorect!'})
            return
        }

        // Step 3 : genrate a token

        const token = user.genrateToken()
        user.tokens.push(token)
        await user.save()
        
        res.send({ message: 'User logged in successfully!', token })
    } catch (e) {
        res.send({ massage: e.massage });
    }
});

router.put('/logout' , verifyToken , async (req , res) => {
   await Users.findByIdAndUpdate(req.userId , { $pull : {tokens : req.tokenToRemove}})
   res.send({ message: 'Logged out successfully!' })
})


export default router;
