import { createCandidate, updateCandidate, getAllCandidates, getCandidateById, deleteCandidate } from "../controllers/candidateController.js";

import express from 'express';

const router = express.Router();

router.post('/', createCandidate);
router.get('/', getAllCandidates);
router.get('/:id', getCandidateById);
router.put('/:id', updateCandidate);
router.delete('/:id', deleteCandidate);

export default router;