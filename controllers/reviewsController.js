require("dotenv").config()
const yelp = require("yelp-fusion")
const yelpClient = yelp.client(process.env.YELP_API_KEY)

const getReviews = async (businessId) => {
    const reviews = await yelpClient.reviews(businessId)
    if(!reviews){
        return Promise.reject("Business not found")
    }

    return Promise.resolve(reviews.jsonBody.reviews)
}

module.exports = { getReviews }
