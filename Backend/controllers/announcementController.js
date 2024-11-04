import Announcement from "../models/announcementModel.js";

export const createAnnouncement = async (req, res) => {
    try {
        const announcement = await Announcement.create(req.body);
        res.status(201).json(announcement);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllAnnouncements = async (req, res) => {
    try {
        const announcements = await Announcement.findAll();
        res.status(200).json(announcements);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAnnouncementById = async (req, res) => {
    try {
        const announcement = await Announcement.findByPk(req.params.id);
        if (!announcement) return res.status(404).json({ message: 'Announcement not found' });
        res.status(200).json(announcement);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateAnnouncement = async (req, res) => {
    try {
        const announcement = await Announcement.findByPk(req.params.id);
        if (!announcement) return res.status(404).json({ message: 'Announcement not found' });
        await announcement.update(req.body);
        res.status(200).json(announcement);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteAnnouncement = async (req, res) => {
    try {
        const announcement = await Announcement.findByPk(req.params.id);
        if (!announcement) return res.status(404).json({ message: 'Announcement not found' });
        await announcement.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
