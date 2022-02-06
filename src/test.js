const https = require("https");
const {v4: uuidv4 } = require("uuid");

function getAsync(path){
    const options = {
        hostname: "id.twitch.tv",
        port: 443,
        path: path,
        method: "GET",
        headers: {

        }
    }

    return new Promise((resolve, reject) => {
        const request = https.request(options, response => {
            response.on("data", d => {
                resolve(JSON.parse(d));
            });

            response.on("error", error => {
                reject(error);
            });
        });

        request.end();
    });
}

const clientId = "";
const redirectUri = "http://localhost";
const responseType = "code";
const scope = "user:read:email";
const state = uuidv4();

getAsync(`oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&state=${state}`)
    .then()