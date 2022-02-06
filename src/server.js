const express = require("express");

const app = express();
const port = 80;
//https://dev.twitch.tv/docs/authentication/getting-tokens-oauth
app.get("/authorize", function(req, res){
    if(!req.query){
        res.send("No query parameters were set");
        return;
    }

    if(!req.query.code){
        res.send("No query parameter with name code was sent");
        return;
    }

    console.log(req.query);
    res.send("hello");

    const clientId = "";
    const clientSecret = "";
    const code = "";
    const grantType = "";
    const redirectUri = "";
    const url = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}&grant_type=${grantType}&redirect_uri=${redirectUri}`;
});

app.use(express.static("public"));

app.listen(port, () => {

});