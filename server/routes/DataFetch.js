import express from "express";
const router = express.Router();

import { getTempData } from "../controllers/Logic.js";

router.get("/", getTempData);

module.exports = router;