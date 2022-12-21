const router = require("express").Router();
const { publish, get_list, get } = require("../controller/book");

router.post("/publish", publish);
router.get("/get-list", get_list);
router.get("/get/:id", get);

module.exports = router;
