import { Router } from "express";

const router = Router();
router.get("/", (req, res) => {
  res.send("Statistics endpoint is working");
});

export default router;
