import "bootstrap";
import { fillInModalResource } from "../components/modal_resources";
import { setplayButtons, setModalExercises, setModalRoutineExercises } from "../components/modal_exercises";
import { exerciseTimer } from "../components/timer";
import { setRoutineSwitches, switchingRoutine } from "../components/switch_routine_notification";
import { initAutocomplete } from "../plugins/init_autocomplete";


console.log("Hello from app/javascript/packs/application.js");
window.setModalExercises = setModalExercises;
window.setModalRoutineExercises = setModalRoutineExercises;


window.exerciseTimer = exerciseTimer;

window.setModalExercises();
window.setModalRoutineExercises();

exerciseTimer();

switchingRoutine();

initAutocomplete();

setplayButtons();
