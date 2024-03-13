import express, { Router }  from "express";
import user from './user.mjs'


const router = express.Router()

router.use('/users' , user)

export default router