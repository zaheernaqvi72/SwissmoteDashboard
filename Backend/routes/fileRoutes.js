import { createFile, updateFile, deleteFile, getAllFiles, getFileById } from "../controllers/fileController.js";

import express from 'express';

const router = express.Router();

router.post('/', createFile);
router.get('/', getAllFiles);
router.get('/:id', getFileById);
router.put('/:id', updateFile);
router.delete('/:id', deleteFile);

export default router;