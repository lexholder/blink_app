import "bootstrap";
import { fillInModalExercise, fillInModalMorningExercise, fillInModalNightExercise, fillInModalResource } from "../components/modal";
import { exerciseTimer } from "../components/timer";
import { setRoutineSwitches, switchingRoutine } from "../components/switch_routine_notification";
import { setplayButtons } from "../components/play_audio";
import { initAutocomplete } from "../plugins/init_autocomplete";


console.log("Hello from app/javascript/packs/application.js");
window.fillInModalExercise = fillInModalExercise;
window.fillInModalMorningExercise = fillInModalMorningExercise;
window.fillInModalNightExercise = fillInModalNightExercise;
window.fillInModalResource = fillInModalResource;

window.exerciseTimer = exerciseTimer;

exerciseTimer();

switchingRoutine();

initAutocomplete();

setplayButtons();
