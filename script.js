// Workouts with minimum 5 diiferent exercises
const workoutGroup =[ 
                  ['Jumping Jacks', 'Squats', 'Butt Kicks', 'Push-ups', 'Crunches', 'Mountain Climbers'],
                  ['Seal Claps', 'Lunges', 'Diamond Push-ups', 'Toe Touches', 'Triangle Crunches'],
                  ['X Jumps', 'Side Lunges', 'Judo Push-ups', 'Bicycle Crunches', 'Russian Twists'],
];
// Variables for min and max reps
const minReps = 15;
const maxReps = 25;

// function to genrate random number of reps
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
// function to generate a random exercise
const randomExercise = workoutGroup => {
    const exercise = Math.floor(Math.random() * workoutGroup.length);
    return workoutGroup[exercise];
}

// function to generate a random workout with exercises and reps
const generateRandomWorkout = () => {
    const exerciseGroup = randomExercise(workoutGroup);
    let workout = "Hello! Here is your workout for today. Remember to go at an easy pace if you are just starting out.\nRest 15 secs in between.\n \n";
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(let i=0; i < exerciseGroup.length; i++) {
        const numReps = randomNumber(minReps,maxReps);
        workout += `Exercise ${alphabet[i]}: ${numReps} ${exerciseGroup[i]}.\n`;
    }
    return workout 
}


console.log(generateRandomWorkout());
