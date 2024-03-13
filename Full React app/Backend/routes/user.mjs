import express from "express";
import Users from "../model/User.mjs";

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

        // Step 1 : genrate a token
        
        res.send({ massage: "User Login Succesfully" });
    } catch (e) {
        res.send({ massage: e.massage });
    }
});

export default router;
