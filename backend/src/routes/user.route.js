import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware";

const router = Router();
router.get("/", protectRoute, getAllUsers);

export default router;
