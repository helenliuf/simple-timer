import { TimerFeature } from "./components/timer_feature/timer_feature.js";

// initialize main app
const app = document.getElementById("app");

if (!app) {
    console.error("App container with id 'app' not found.");
} else {
    const timer = new TimerFeature();
    app.appendChild(timer.render());
}
