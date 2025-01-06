export class TimerFeature {
    constructor() {
        this.loadCSS();
    }    

    loadCSS() {
        const styleSheet = document.createElement("link");
        styleSheet.rel = "stylesheet";
        styleSheet.href = "components/timer_feature/timer_feature.css";
        document.head.appendChild(styleSheet);
    }

    render() {
        // full container
        const fullContainer = document.createElement("div");
        fullContainer.id = "full-container"

        // timer container
        const timerContainer = document.createElement("div");
        timerContainer.id = "timer-container";

        // timer div
        const timerDiv = document.createElement("div");
        timerDiv.id = "timer";

        // minutes, seconds spans
        const minutesSpan = document.createElement("span");
        minutesSpan.id = "minutes";
        minutesSpan.textContent = "00";

        const secondsSpan = document.createElement("span");
        secondsSpan.id = "seconds";
        secondsSpan.textContent = "00";

        // add minutes and seconds
        timerDiv.appendChild(minutesSpan);
        timerDiv.appendChild(document.createTextNode(" Minutes "));
        timerDiv.appendChild(secondsSpan);
        timerDiv.appendChild(document.createTextNode(" Seconds"));

        timerContainer.appendChild(timerDiv);
        fullContainer.append(timerContainer);

        return fullContainer;
    }
}