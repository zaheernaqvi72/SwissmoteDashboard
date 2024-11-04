import { createAssignment, updateAssignment, getAllAssignments, getAssignmentById, deleteAssignment } from "../controllers/assignmentController.js";

import express from 'express';

const router = express.Router();

router.post('/', createAssignment);
router.get('/', getAllAssignments);
router.get('/:id', getAssignmentById);
router.put('/:id', updateAssignment);
router.delete('/:id', deleteAssignment);

export default router;