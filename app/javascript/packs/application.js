import "bootstrap";
import { fillInModalResource } from "../components/modal_resources";
import { setplayButtons, setModalExercises, fillInModalMorningExercise, fillInModalNightExercise } from "../components/modal_exercises";
import { exerciseTimer } from "../components/timer";
import { setRoutineSwitches, switchingRoutine } from "../components/switch_routine_notification";
import { initAutocomplete } from "../plugins/init_autocomplete";


console.log("Hello from app/javascript/packs/application.js");
window.setModalExercises = setModalExercises;
window.fillInModalMorningExercise = fillInModalMorningExercise;
window.fillInModalNightExercise = fillInModalNightExercise;
window.fillInModalResource = fillInModalResource;

window.exerciseTimer = exerciseTimer;

setModalExercises();

exerciseTimer();

switchingRoutine();

initAutocomplete();

setplayButtons();
