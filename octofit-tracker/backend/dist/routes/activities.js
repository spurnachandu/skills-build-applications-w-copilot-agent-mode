import express from 'express';
import { Activity } from '../models/Activity.js';
const router = express.Router();
// Get all activities
router.get('/', async (req, res) => {
    try {
        const activities = await Activity.find().populate('user');
        res.json(activities);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching activities', error });
    }
});
// Get activities by user
router.get('/user/:userId', async (req, res) => {
    try {
        const activities = await Activity.find({ user: req.params.userId }).populate('user');
        res.json(activities);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching user activities', error });
    }
});
// Get activity by ID
router.get('/:id', async (req, res) => {
    try {
        const activity = await Activity.findById(req.params.id).populate('user');
        if (!activity) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        res.json(activity);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching activity', error });
    }
});
// Create activity
router.post('/', async (req, res) => {
    try {
        const { user, type, duration, distance, calories, description } = req.body;
        const activity = new Activity({ user, type, duration, distance, calories, description });
        await activity.save();
        res.status(201).json(activity);
    }
    catch (error) {
        res.status(400).json({ message: 'Error creating activity', error });
    }
});
// Update activity
router.put('/:id', async (req, res) => {
    try {
        const activity = await Activity.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!activity) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        res.json(activity);
    }
    catch (error) {
        res.status(400).json({ message: 'Error updating activity', error });
    }
});
// Delete activity
router.delete('/:id', async (req, res) => {
    try {
        const activity = await Activity.findByIdAndDelete(req.params.id);
        if (!activity) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        res.json({ message: 'Activity deleted' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting activity', error });
    }
});
export default router;
//# sourceMappingURL=activities.js.map