import { Router } from "express";

const router = Router();
router.get("/", (req, res) => {
  res.send("Auth endpoint is working");
});

export default router;
