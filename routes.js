const express = require("express");

const {create,fetch,update,Delete}=require("./controller/controller.js")

const route = express.Router();

route.post("/create", create);
route.get("/fetch", fetch);
route.put("/update/:id", update);
route.delete("/delete/:id", Delete);
module.exports = route;
// Router(