const exercises = ['Jumping Jacks', 'Squats', 'Butt Kicks', 'Push Ups', 'Crunches'];
const minReps = 10
const maxReps = 20

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomExercise = arr => {
    const workout = Math.floor(Math.random() * arr.length);
    return arr[workout];
}

const randomWorkout = (function1, function2) => {
    const exercise = randomExercise(exercises);
    const numReps = randomNumber(minReps,maxReps);
    return `Hello. Your exercise for today is ${numReps} ${exercise}. You can start when you're ready!!`;
}

console.log(randomWorkout());