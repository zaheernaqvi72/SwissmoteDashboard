import { createAnnouncement, updateAnnouncement, getAllAnnouncements, getAnnouncementById, deleteAnnouncement } from "../controllers/announcementController.js";

import express from 'express';

const router = express.Router();

router.post('/', createAnnouncement);
router.get('/', getAllAnnouncements);
router.get('/:id', getAnnouncementById);
router.put('/:id', updateAnnouncement);
router.delete('/:id', deleteAnnouncement);

export default router;