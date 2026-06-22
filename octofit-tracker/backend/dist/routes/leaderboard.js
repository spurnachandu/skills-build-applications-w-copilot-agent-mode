import express from 'express';
import { Leaderboard } from '../models/Leaderboard.js';
const router = express.Router();
// Get leaderboard (top 100)
router.get('/', async (req, res) => {
    try {
        const leaderboard = await Leaderboard.find()
            .populate('user')
            .sort({ rank: 1 })
            .limit(100);
        res.json(leaderboard);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching leaderboard', error });
    }
});
// Get user leaderboard entry
router.get('/user/:userId', async (req, res) => {
    try {
        const entry = await Leaderboard.findOne({ user: req.params.userId }).populate('user');
        if (!entry) {
            return res.status(404).json({ message: 'Leaderboard entry not found' });
        }
        res.json(entry);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching leaderboard entry', error });
    }
});
// Update leaderboard entry
router.put('/:id', async (req, res) => {
    try {
        const entry = await Leaderboard.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!entry) {
            return res.status(404).json({ message: 'Leaderboard entry not found' });
        }
        res.json(entry);
    }
    catch (error) {
        res.status(400).json({ message: 'Error updating leaderboard entry', error });
    }
});
export default router;
//# sourceMappingURL=leaderboard.js.map