import "bootstrap";
import { eyeBreakNotifications } from '../components/eye_break_notification';
import { switching } from '../components/switch_eye_break_notification';
import { openCity } from '../components/tabs_navigation';

console.log("Hello from app/javascript/packs/dashboard_on_desktop.js");


eyeBreakNotifications();

switching();


window.openCity = openCity;
