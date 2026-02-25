const dbApi = require("./database-api");

const express = require("express");
const router = express.Router();
function sendResponse(res, data, cookies = {}) {
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
            sendResponse(
                res,
                { error: `[Public APIs] Error: Unkown api "${req.params.endpoint}".` }
            );

        } else if (e == "getAllUsers") {
            dbApi.getAllUsers().then(apiResponse => sendResponse(res, apiResponse));

        } else if (e == "getUserAttributeById") {
            dbApi.getUserAttributeById(b.attribute, b.id).then(apiResponse => sendResponse(res, apiResponse));

        } else if (e == "login") {
            dbApi.createNewSessionFromLogin(b.username, b.password).then(apiResponse => sendResponse(
                res,
                apiResponse,
                {
                    "session_id": {
                        val: apiResponse.data.id,
                        options: { httpOnly: true }
                    }
                }
            ));

        } else if (e == "logout") {
            dbApi.deleteSessionById(req.cookies.session_id).then(apiResponse => sendResponse(res, apiResponse));

        } else if (e == "getCurrentUser") {
            dbApi.getUserIdBySessionId(req.cookies.session_id).then(apiResponse => {
                dbApi.getUserById(apiResponse.data.user_id).then(apiResponse => sendResponse(res, apiResponse))
            });

        } else {
            sendResponse(
                res,
                { error: `[Public APIs] Error: Unkown api "${req.params.endpoint}".` }
            );
        }

    } else {
        sendResponse(
            res,
            { error: `[Public APIs] Error: Unkown api "${req.params.endpoint}".` }
        );
    }
});

module.exports = router;
