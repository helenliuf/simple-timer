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

        // input container
        const inputContainer = document.createElement("div");
        inputContainer.id = "input-container"

        // interval inputs
        const minutesInput = document.createElement("input");
        minutesInput.id = "minute-input";
        minutesInput.type = "number";
        minutesInput.value = 0;
        minutesInput.min = 0;
        minutesInput.max = 60;

        const secondsInput = document.createElement("input");
        secondsInput.id = "second-input";
        secondsInput.type = "number";
        secondsInput.value = 0;
        secondsInput.min = 0;
        secondsInput.max = 59;

        const checkIcon = document.createElement('img');
        checkIcon.id = "check-icon";
        checkIcon.src = "./resources/images/checked.png";
        //TODO: move to css
        checkIcon.style.cursor = "pointer";
        checkIcon.style.width = "25px";
        checkIcon.style.height = "25px";

        inputContainer.append(minutesInput);
        inputContainer.append(secondsInput);
        inputContainer.append(checkIcon);

        fullContainer.appendChild(inputContainer);

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