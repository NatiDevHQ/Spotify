import { Router } from "express";

const router = Router();
router.get("/", (req, res) => {
  res.send("Song endpoint is working");
});

export default router;
