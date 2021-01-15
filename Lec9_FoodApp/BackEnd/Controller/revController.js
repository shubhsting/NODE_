
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

async function getReviewByIDandApprove(req, res) {
    try {
        let review = req.body;
        let reviewm = await reviewModel.findById(review.id);
        reviewm.approved = true;
        await reviewm.save();
        res.status(201).json({
            message: "Successfully added a review",
            data: reviewm
        })
    }
    catch (e) {
        res.status(201).json({
            e
        })
    }

}
module.exports.addreview = addreview;
module.exports.getReviewByIDandApprove = getReviewByIDandApprove;