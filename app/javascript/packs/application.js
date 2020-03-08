import "bootstrap";
import { fillInModalResource } from "../components/modal_resources";
import { setplayButtons, setModalExercises, setModalRoutineExercises } from "../components/modal_exercises";
import { setRoutineSwitches, switchingRoutine } from "../components/switch_routine_notification";
import { fetchWeatherEveryHour } from "../components/weather";
import { initAutocomplete } from "../plugins/init_autocomplete";


console.log("Hello from app/javascript/packs/application.js");
window.setModalExercises = setModalExercises;
window.setModalRoutineExercises = setModalRoutineExercises;


window.setModalExercises();
window.setModalRoutineExercises();


switchingRoutine();

initAutocomplete();

setplayButtons();

fetchWeatherEveryHour();
