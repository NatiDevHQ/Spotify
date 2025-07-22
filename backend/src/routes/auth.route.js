import { Router } from "express";
import { authCallback } from "../controller/auth.controller.js";

const router = Router();
router.get("/callback", authCallback);
export default router;
