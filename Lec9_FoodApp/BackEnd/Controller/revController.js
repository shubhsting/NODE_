const reviewModel = require("../Model/reviewModel");


async function addreview(req, res) {
    try {
        let review = req.body;
        let reviewm = await reviewModel.create(review);
        res.status(201).json({
            message: "Successfully added a review",
            data: reviewm
        })

    }
    catch (e) {

    }
}

module.exports.addreview = addreview;