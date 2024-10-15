const express = require("express");
const apiRouter  = require("./routes")
const {ServerConfig, Logger} = require("./config")
const CRON = require("./utils/common/cron-jobs")

const app = express();
console.log("Bibek ray");

app.use(express.json())
app.use(express.urlencoded({extends:true}))

app.use('/api', apiRouter)

app.listen(ServerConfig.PORT, () => {
    console.log(`Server started running on ${ServerConfig.PORT}`);
    CRON();
});
