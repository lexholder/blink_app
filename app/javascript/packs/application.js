import "bootstrap";
import { fillInModalExercise, fillInModalMorningExercise, fillInModalNightExercise, fillInModalResource } from "../components/modal";
import { exerciseTimer } from "../components/timer";
import { setRoutineSwitches, switchingRoutine } from "../components/switch_routine_notification";

console.log("Hello from app/javascript/packs/application.js");
window.fillInModalExercise = fillInModalExercise;
window.fillInModalMorningExercise = fillInModalMorningExercise;
window.fillInModalNightExercise = fillInModalNightExercise;
window.fillInModalResource = fillInModalResource;

window.exerciseTimer = exerciseTimer;

exerciseTimer();

setRoutineSwitches();
switchingRoutine();
