const dbApi = require("./database-api");

const express = require("express");
const router = express.Router();
function respond(res, data, cookies = {}) {
    for (const c in cookies) {
        res.cookie(c, cookies[c].val, cookies[c].options);
    }
    res.json(data);
}
router.use(express.urlencoded({ extended: true }));
router.route("/:endpoint").post((req, res) => {
    if (req.params) {
        // apis[req.params.endpoint].POST(req.params.endpoint, req.body, (data, cookies = {}) => { serverRespond(res, data, cookies); }, req.cookies.session_id);
        const e = req.params.endpoint;
        const b = req.body;
        if (!e) {
            respond(
                res,
                { error: `[Public APIs] Error: Unkown api "${req.params.endpoint}".` }
            );
        } else if (e == "getAllUsers") {
            dbApi.getAllUsers().then(data => respond(res, data));
        } else if (e == "getUserAttributeById") {
            dbApi.getUserAttributeById(b.attribute, b.id).then(data => respond(res, data));
        } else {
            respond(
                res,
                { error: `[Public APIs] Error: Unkown api "${req.params.endpoint}".` }
            );
        }

    } else {
        respond(
            res,
            { error: `[Public APIs] Error: Unkown api "${req.params.endpoint}".` }
        );
    }
});

module.exports = router;
