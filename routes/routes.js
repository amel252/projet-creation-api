import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello les amis ");
});
router.get("/test", (req, res) => {
    res.send({
        name: "Hardcoders",
    });
});
router.post("/test", (req, res) => {
    // console.log(req);

    res.send(req.body);
});

export default router;
