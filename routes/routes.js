import express from "express";
import { getTest, postTest } from "../controllers/roomControllers.js";

const router = express.Router();

router.get("/", getTest);
router.post("/test", postTest);

export default router;
