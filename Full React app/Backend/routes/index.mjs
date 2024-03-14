import express, { Router }  from "express";
import user from './user.mjs'
import adds from './adds.mjs'


const router = express.Router()

router.use('/users' , user)
router.use('/ads' , adds)

export default router