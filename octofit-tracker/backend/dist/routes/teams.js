import express from 'express';
import { Team } from '../models/Team.js';
const router = express.Router();
// Get all teams
router.get('/', async (req, res) => {
    try {
        const teams = await Team.find().populate('leader members');
        res.json(teams);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching teams', error });
    }
});
// Get team by ID
router.get('/:id', async (req, res) => {
    try {
        const team = await Team.findById(req.params.id).populate('leader members');
        if (!team) {
            return res.status(404).json({ message: 'Team not found' });
        }
        res.json(team);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching team', error });
    }
});
// Create team
router.post('/', async (req, res) => {
    try {
        const { name, description, leader } = req.body;
        const team = new Team({ name, description, leader, members: [leader] });
        await team.save();
        res.status(201).json(team);
    }
    catch (error) {
        res.status(400).json({ message: 'Error creating team', error });
    }
});
// Add member to team
router.post('/:id/members', async (req, res) => {
    try {
        const { memberId } = req.body;
        const team = await Team.findByIdAndUpdate(req.params.id, { $addToSet: { members: memberId } }, { new: true });
        if (!team) {
            return res.status(404).json({ message: 'Team not found' });
        }
        res.json(team);
    }
    catch (error) {
        res.status(400).json({ message: 'Error adding member', error });
    }
});
// Update team
router.put('/:id', async (req, res) => {
    try {
        const team = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!team) {
            return res.status(404).json({ message: 'Team not found' });
        }
        res.json(team);
    }
    catch (error) {
        res.status(400).json({ message: 'Error updating team', error });
    }
});
// Delete team
router.delete('/:id', async (req, res) => {
    try {
        const team = await Team.findByIdAndDelete(req.params.id);
        if (!team) {
            return res.status(404).json({ message: 'Team not found' });
        }
        res.json({ message: 'Team deleted' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting team', error });
    }
});
export default router;
//# sourceMappingURL=teams.js.map