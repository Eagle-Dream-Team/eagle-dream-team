const dbApi = require("./database-api");

const express = require("express");
const router = express.Router();

// Send response takes 3 parameters:
// 1. The first is the express response object.
// 2. The API response to send back to the requester.
// 3. Cookies to set client-side.
function sendResponse(res, apiResponse, cookies = {}) {
    for (const c in cookies) {
        res.cookie(c, cookies[c].val, cookies[c].options);
    }
    res.json(apiResponse);
}

router.use(express.urlencoded({ extended: true }));
router.route("/:endpoint").post((req, res,) => {
    res.sendApiResponse = (apiResponse, cookies) => { sendResponse(res, apiResponse, cookies) };

    if (req.params) {
        const e = req.params.endpoint;
        const b = req.body;
        if (!e) {
            res.sendApiResponse(
                { error: `[Public APIs] Error: No API endpoint provided "${e}".` }
            );

        } else if (e == "getAllUsers") {
            dbApi.getAllUsers().then(apiResponse => res.sendApiResponse(apiResponse));

        } else if (e == "getUserAttributeById") {
            dbApi.getUserAttributeById(b.attribute, b.id).then(apiResponse => res.sendApiResponse(apiResponse));

        } else if (e == "login") {
            dbApi.createNewSessionFromLogin(b.username, b.password).then(apiResponse => res.sendApiResponse(
                apiResponse,
                {
                    "session_id": {
                        val: apiResponse.error ? "" : apiResponse.data.id,
                        options: { httpOnly: true }
                    }
                }
            ));

        } else if (e == "logout") {
            dbApi.deleteSessionById(req.cookies.session_id).then(apiResponse => res.sendApiResponse(apiResponse));

        } else if (e == "getCurrentUser") {
            dbApi.getUserIdBySessionId(req.cookies.session_id).then(apiResponse => {
                dbApi.getUserById(apiResponse.data.user_id).then(apiResponse => res.sendApiResponse(apiResponse))
            });

        } else {
            res.sendApiResponse(
                { error: `[Public APIs] Error: Unkown API "${req.params.endpoint}".` }
            );
        }

    } else {
        res.sendApiResponse(
            { error: `[Public APIs] Error: Unkown API "${req.params.endpoint}".` }
        );
    }
});

module.exports = router;
