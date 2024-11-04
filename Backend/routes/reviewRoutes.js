import { createReview, updateReview, deleteReview, getAllReviews, getReviewById } from "../controllers/reviewController.js";

import express from 'express';

const router = express.Router();

router.post('/', createReview);
router.get('/', getAllReviews);
router.get('/:id', getReviewById);
router.put('/:id', updateReview);
router.delete('/:id', deleteReview);

export default router;