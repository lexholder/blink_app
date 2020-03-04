import "bootstrap";
import { eyeBreakNotifications } from '../components/eye_break_notification';
import { setSwitch, switching } from '../components/switch_eye_break_notification';

console.log("Hello from app/javascript/packs/dashboard_on_desktop.js");


eyeBreakNotifications();

setSwitch();

switching();
