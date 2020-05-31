import {Router} from  "react-router-dom"
const portfolioItems = require `${process.env.PUBLIC_URL}/config/db.json`

Router.get("/project", (req, res) => {
    portfolioItems(req.body);
    console.log(req.body)
    });



module.exports = router;


