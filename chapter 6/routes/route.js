const { Router } = require("express");
const controller = require("../controllers/user");

const routers = Router();

routers.get("/login", controller.viewLogin);
routers.get("/register", controller.viewRegister);
routers.get("/list-member", controller.viewMember);

routers.get("/edit/:id", controller.editMember);
routers.post("/updateMember", controller.updateMember);
routers.get("/remove/:id", controller.removeMember);

routers.get("/score/:id", controller.viewScoring);
routers.post("/create-point", controller.createPoint);
routers.get("/remove/point/:user/:id", controller.removePoint);


routers.post("/create-user", controller.createRegister);
routers.post("/create-login", controller.createLogin);

module.exports = routers;
