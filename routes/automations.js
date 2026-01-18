import express from "express";
const router = express.Router();

router.post("/:id/run-now", async (req, res) => {
  const { id } = req.params;

  console.log("Run Now triggered for automation:", id);

  // later: AI generation
  // later: Supabase logging
  // later: YouTube upload

  res.json({
    success: true,
    jobId: `job_${Date.now()}`
  });
});

export default router;
