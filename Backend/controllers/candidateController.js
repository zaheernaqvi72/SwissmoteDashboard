import Candidate from "../models/candidateModel.js";

export const createCandidate = async (req, res) => {
    try {
        const candidate = await Candidate.create(req.body);
        res.status(201).json(candidate);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllCandidates = async (req, res) => {
    try {
        const candidates = await Candidate.findAll();
        res.status(200).json(candidates);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getCandidateById = async (req, res) => {
    try {
        const candidate = await Candidate.findByPk(req.params.id);
        if (!candidate) return res.status(404).json({ message: 'Candidate not found' });
        res.status(200).json(candidate);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateCandidate = async (req, res) => {
    try {
        const candidate = await Candidate.findByPk(req.params.id);
        if (!candidate) return res.status(404).json({ message: 'Candidate not found' });
        await candidate.update(req.body);
        res.status(200).json(candidate);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteCandidate = async (req, res) => {
    try {
        const candidate = await Candidate.findByPk(req.params.id);
        if (!candidate) return res.status(404).json({ message: 'Candidate not found' });
        await candidate.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
