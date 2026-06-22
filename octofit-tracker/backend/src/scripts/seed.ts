import connectDB from '../config/database.js';
import { User } from '../models/User.js';
import { Team } from '../models/Team.js';
import { Activity } from '../models/Activity.js';
import { Leaderboard } from '../models/Leaderboard.js';
import { Workout } from '../models/Workout.js';

const seedDatabase = async (): Promise<void> => {
  try {
    // Connect to database
    await connectDB();

    // Clear existing data
    await User.deleteMany({});
    await Team.deleteMany({});
    await Activity.deleteMany({});
    await Leaderboard.deleteMany({});
    await Workout.deleteMany({});

    // Create sample users
    const users = await User.insertMany([
      {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        password: 'hashed_password_1',
        bio: 'Fitness enthusiast and runner',
        points: 1500,
      },
      {
        name: 'Bob Smith',
        email: 'bob@example.com',
        password: 'hashed_password_2',
        bio: 'Gym lover and strength trainer',
        points: 1200,
      },
      {
        name: 'Charlie Davis',
        email: 'charlie@example.com',
        password: 'hashed_password_3',
        bio: 'Cyclist and outdoor adventurer',
        points: 980,
      },
      {
        name: 'Diana Wilson',
        email: 'diana@example.com',
        password: 'hashed_password_4',
        bio: 'Yoga and pilates instructor',
        points: 1100,
      },
      {
        name: 'Eve Martinez',
        email: 'eve@example.com',
        password: 'hashed_password_5',
        bio: 'Swimming champion',
        points: 2000,
      },
    ]);

    console.log('✅ Created 5 users');

    // Create sample teams
    const teams = await Team.insertMany([
      {
        name: 'Runners United',
        description: 'A team of passionate runners',
        leader: users[0]._id,
        members: [users[0]._id, users[2]._id],
      },
      {
        name: 'Gym Warriors',
        description: 'Strength training focused team',
        leader: users[1]._id,
        members: [users[1]._id, users[3]._id],
      },
      {
        name: 'Water Athletes',
        description: 'Swimming and aquatic sports',
        leader: users[4]._id,
        members: [users[4]._id],
      },
    ]);

    console.log('✅ Created 3 teams');

    // Create sample activities
    const activities = await Activity.insertMany([
      {
        user: users[0]._id,
        type: 'running',
        duration: 45,
        distance: 7.5,
        calories: 450,
        description: 'Morning run at the park',
      },
      {
        user: users[1]._id,
        type: 'gym',
        duration: 60,
        calories: 600,
        description: 'Upper body workout',
      },
      {
        user: users[2]._id,
        type: 'cycling',
        duration: 90,
        distance: 25,
        calories: 800,
        description: 'Weekend cycling adventure',
      },
      {
        user: users[3]._id,
        type: 'walking',
        duration: 50,
        distance: 5,
        calories: 200,
        description: 'Evening walk session',
      },
      {
        user: users[4]._id,
        type: 'swimming',
        duration: 60,
        distance: 2,
        calories: 700,
        description: 'Competitive swimming training',
      },
    ]);

    console.log('✅ Created 5 activities');

    // Create leaderboard entries
    const leaderboardEntries = await Leaderboard.insertMany([
      {
        user: users[4]._id,
        totalPoints: 2000,
        activitiesCount: 25,
        rank: 1,
      },
      {
        user: users[0]._id,
        totalPoints: 1500,
        activitiesCount: 18,
        rank: 2,
      },
      {
        user: users[1]._id,
        totalPoints: 1200,
        activitiesCount: 15,
        rank: 3,
      },
      {
        user: users[3]._id,
        totalPoints: 1100,
        activitiesCount: 14,
        rank: 4,
      },
      {
        user: users[2]._id,
        totalPoints: 980,
        activitiesCount: 12,
        rank: 5,
      },
    ]);

    console.log('✅ Created 5 leaderboard entries');

    // Create sample workouts
    const workouts = await Workout.insertMany([
      {
        user: users[0]._id,
        name: '5K Running Plan',
        description: 'A 6-week plan to run a 5K',
        type: 'cardio',
        duration: 30,
        difficulty: 'beginner',
        exercises: ['Warm-up jog', '3K run', 'Cool-down walk'],
      },
      {
        user: users[1]._id,
        name: 'Muscle Building Program',
        description: 'Build strength with resistance training',
        type: 'strength',
        duration: 60,
        difficulty: 'intermediate',
        exercises: ['Bench press', 'Squats', 'Deadlifts', 'Pull-ups'],
      },
      {
        user: users[3]._id,
        name: 'Beginner Yoga',
        description: 'Start your yoga journey',
        type: 'flexibility',
        duration: 45,
        difficulty: 'beginner',
        exercises: ['Downward Dog', 'Warrior Pose', 'Child Pose', 'Savasana'],
      },
      {
        user: users[4]._id,
        name: 'HIIT Training',
        description: 'High-intensity interval training',
        type: 'hiit',
        duration: 30,
        difficulty: 'advanced',
        exercises: ['Burpees', 'Mountain Climbers', 'Jump Squats', 'High Knees'],
      },
    ]);

    console.log('✅ Created 4 workouts');

    console.log('✨ Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

// Run seed script
seedDatabase();
