function callApiThen(endpoint = "", data = {}, callback = () => { }) {
    const options = {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    };

    fetch("./apis/" + endpoint, options).then(response => {
        response.json().then(json => {
            callback(json);
        });
    }).catch((e) => {
        console.error({ error: "Error: " + e });
    });
};