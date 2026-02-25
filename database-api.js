const supabase = require("./supabase");
const sbClient = supabase.createClient(
    "https://cbkttelrpoizjcxbiygh.supabase.co",
    "sb_publishable_0qhnYXy2bmdbxfxq0Hpovg_DEQNf5-_", {
    db: {
        schema: "public"
    }
});

async function runQuery(queryFunction) {
    const response = await queryFunction(sbClient);
    return {
        then: (callback) => { callback(response) }
    }
}

function reformatResponse(response, getFirstItem = true) {
    let res = {};
    if (response.error) {
        res.error = "[Database API] Unexpected error: " + response.error.message;
    }
    if (response.data) {
        res.data = getFirstItem ? response.data[0] : response.data
    } else {
        res.data = true;
    }
    return res
}

const userColumnsExceptPassword = "id, first_name, last_name, username, bio";
const userColumnsExceptPasswordArr = userColumnsExceptPassword.split(", ");

const dbApi = {
    getAllUsers: async () => {
        return reformatResponse(await sbClient.from("user").select(userColumnsExceptPassword), false)
    },

    createNewUser: async (newUser) => {
        return reformatResponse(await sbClient.from("user").insert(newUser))
    },

    getUserById: async (id) => {
        return reformatResponse(await sbClient.from("user").select(userColumnsExceptPassword).eq("id", id))
    },

    getUserAttributeById: async (attribute, id) => {
        if (userColumnsExceptPasswordArr.includes(attribute)) {
            return reformatResponse(await sbClient.from("user").select(attribute).eq("id", id))
        }

        return {
            error: "[Database API] Error: Invalid attribute",
            data: false,
        }
    },

    setUserById: async (newUser, id) => {
        return reformatResponse(await sbClient.from("user").update(newUser).eq("id", id))
    },

    setUserAttributeById: async (attribute, id) => {
        return reformatResponse(await sbClient.from("user").update(attribute).eq("id", id))
    },

    deleteUserById: async (id) => {
        return reformatResponse(await sbClient.from("user").delete("*").eq("id", id))
    },

    createNewSessionFromLogin: async (username, password) => {
        const user_id = reformatResponse(await sbClient.from("user").select("id")
            .eq("username", username)
            .eq("password", password)
        ).data.id;

        if (user_id) {
            return reformatResponse(await sbClient.from("session").insert({ "user_id": user_id }).select("*"));
        }

        return {
            error: "[Database API] Error: Invalid login",
            data: false,
        }
    },

    getUserIdBySessionId: async (id) => {
        return reformatResponse(await sbClient.from("session").select("user_id").eq("id", id));
    },

    deleteSessionById: async (id) => {
        return reformatResponse(await sbClient.from("session").delete("*").eq("id", id))
    },

    deleteAllSessions: async () => {
        return reformatResponse(await sbClient.from("session").delete("*").not("id", "is", null))
    },
};

module.exports = dbApi