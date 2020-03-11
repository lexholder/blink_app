import "bootstrap";
import { fillInModalResource } from "../components/modal_resources";
import { setplayButtons, setModalExercises, updateHTMLForCompletedRoutine } from "../components/modal_exercises";
import { setRoutineSwitches, switchingRoutine } from "../components/switch_routine_notification";
import { fetchWeatherEveryHour } from "../components/weather";
import { initAutocomplete } from "../plugins/init_autocomplete";


console.log("Hello from app/javascript/packs/application.js");
window.setModalExercises = setModalExercises;
window.fillInModalResource = fillInModalResource;


window.setModalExercises();


switchingRoutine();

initAutocomplete();

setplayButtons();

fetchWeatherEveryHour();
