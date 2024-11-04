import DailyUpdate from "../models/dailyUpdateModel.js";

export const createDailyUpdate = async (req, res) => {
    try {
        const dailyUpdate = await DailyUpdate.create(req.body);
        res.status(201).json(dailyUpdate);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllDailyUpdates = async (req, res) => {
    try {
        const dailyUpdates = await DailyUpdate.findAll();
        res.status(200).json(dailyUpdates);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getDailyUpdateById = async (req, res) => {
    try {
        const dailyUpdate = await DailyUpdate.findByPk(req.params.id);
        if (!dailyUpdate) return res.status(404).json({ message: 'Daily update not found' });
        res.status(200).json(dailyUpdate);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateDailyUpdate = async (req, res) => {
    try {
        const dailyUpdate = await DailyUpdate.findByPk(req.params.id);
        if (!dailyUpdate) return res.status(404).json({ message: 'Daily update not found' });
        await dailyUpdate.update(req.body);
        res.status(200).json(dailyUpdate);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteDailyUpdate = async (req, res) => {
    try {
        const dailyUpdate = await DailyUpdate.findByPk(req.params.id);
        if (!dailyUpdate) return res.status(404).json({ message: 'Daily update not found' });
        await dailyUpdate.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
