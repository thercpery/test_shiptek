const express = require("express")
const router = express.Router()
const { getReviews }= require("../controllers/reviewsController")

router.get("/", async (req, res) => {
    try{
        const reviews = await getReviews(req.body.businessId)
        res.status(200).json(reviews)
    }
    catch(e){
        res.status(404).send({
            "message": "Business not found"
        })
    }
})

module.exports = router