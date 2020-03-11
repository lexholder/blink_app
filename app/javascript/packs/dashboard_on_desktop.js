import "bootstrap";
import { eyeBreakNotifications, eyeBreakNotificationsDemo } from '../components/eye_break_notification';
import { computerTime } from '../components/computer_time';
import { switching } from '../components/switch_eye_break_notification';
import { openTabs } from '../components/tabs_navigation';

console.log("Hello from app/javascript/packs/dashboard_on_desktop.js");

computerTime();
eyeBreakNotifications();
eyeBreakNotificationsDemo();

switching();


window.openTabs = openTabs;
