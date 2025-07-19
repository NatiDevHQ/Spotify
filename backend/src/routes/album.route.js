import { route } from "express";

const router = route();
router.get("/stats", (req, res) => {
  res.json({ message: "Statistics endpoint" });
});

export default router;
