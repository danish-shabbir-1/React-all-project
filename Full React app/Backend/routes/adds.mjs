import express from "express";
import Ads from "../model/Adds.mjs";

const router = express.Router()

router.get('/' , async (req, res) => {
    try {
        const getData = await Ads.find()
        res.send({ massage : 'Product fetch succesfully', Data : getData})
    } catch (e) {
        res.send({ massage : e.massage})
    }

})

router.post('/post', async (req, res) => {
    try {
       const postData = await Ads.create(req.body)
        res.send({ massage : 'Product added succesfully'})
    } catch (e) {
        res.send({ massage : e.massage})   
    }
})

router.delete('/:id' , async (req, res) => {
    const delDataFromDb = await Ads.findByIdAndDelete(req.params.id) 
    res.send({ massage : 'Product deleted succesfully'})
})

router.put('/:id' , async (req, res) => {
    const updateDataFromDb = await Ads.findByIdAndUpdate(req.params.id , req.body)
    res.send({ massage : 'Product updated succesfully'})
})

export default router