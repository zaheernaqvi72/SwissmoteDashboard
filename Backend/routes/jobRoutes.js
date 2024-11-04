import { createJob, updateJob, getAllJobs, getJobById, deleteJob } from "../controllers/jobController.js";

import express from 'express';

const router = express.Router();

router.post('/', createJob);
router.get('/', getAllJobs);
router.get('/:id', getJobById);
router.put('/:id', updateJob);
router.delete('/:id', deleteJob);

export default router;