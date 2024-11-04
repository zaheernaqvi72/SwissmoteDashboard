import File from "../models/fileModel.js";

export const createFile = async (req, res) => {
    try {
        const file = await File.create(req.body);
        res.status(201).json(file);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllFiles = async (req, res) => {
    try {
        const files = await File.findAll();
        res.status(200).json(files);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getFileById = async (req, res) => {
    try {
        const file = await File.findByPk(req.params.id);
        if (!file) return res.status(404).json({ message: 'File not found' });
        res.status(200).json(file);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateFile = async (req, res) => {
    try {
        const file = await File.findByPk(req.params.id);
        if (!file) return res.status(404).json({ message: 'File not found' });
        await file.update(req.body);
        res.status(200).json(file);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteFile = async (req, res) => {
    try {
        const file = await File.findByPk(req.params.id);
        if (!file) return res.status(404).json({ message: 'File not found' });
        await file.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
