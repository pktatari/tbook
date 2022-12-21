const router = require("express").Router();
const { create, get, login } = require("../controller/user");

router.post("/create", create);
router.post("/login", login);
router.get("/", get);

module.exports = router;
