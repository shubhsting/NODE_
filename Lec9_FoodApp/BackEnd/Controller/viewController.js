async function getHomePage(req, res) {
    try {
        res.render("forgotpass.pug", {});
    }
    catch (error) {
        console.log(error);
    }
}
module.exports.getHomePage = getHomePage;