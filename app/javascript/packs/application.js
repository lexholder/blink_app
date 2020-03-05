import "bootstrap";
import { fillInModalExercise, fillInModalResource } from "../components/modal";
import { exerciseTimer } from "../components/timer";

console.log("Hello from app/javascript/packs/application.js");
window.fillInModalExercise = fillInModalExercise;
window.fillInModalResource = fillInModalResource;

window.exerciseTimer = exerciseTimer;

exerciseTimer();

