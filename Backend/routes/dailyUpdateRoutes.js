import { createDailyUpdate, updateDailyUpdate, getAllDailyUpdates, getDailyUpdateById, deleteDailyUpdate } from "../controllers/dailyUpdateController.js";

import express from 'express';

const router = express.Router();

router.post('/', createDailyUpdate);
router.get('/', getAllDailyUpdates);
router.get('/:id', getDailyUpdateById);
router.put('/:id', updateDailyUpdate);
router.delete('/:id', deleteDailyUpdate);

export default router;